"use client"

import { useState, createElement, useEffect, useMemo, useRef, CSSProperties } from "react";

export default function LiveText({ tag, children, hoverText, textOnIntersection, style }: {
  tag: "a" | "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: React.ReactNode;
  hoverText?: string;
  textOnIntersection?: string;
  style?: CSSProperties | undefined;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isIntersected, setIsIntersected] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleChars, setVisibleChars] = useState(0);
  const isInitialRender = useRef(true);
  const elementRef = useRef<HTMLElement>(null);

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const altText = textOnIntersection ?? hoverText ?? children;
  // On mobile with hoverText, use intersection; otherwise use existing logic
  const shouldShowAltText = (isMobile && hoverText) ? isIntersected : (textOnIntersection ? isIntersected : isHovered);
  const displayText = shouldShowAltText ? altText : children;

  const textString = useMemo(() => {
    if (typeof displayText === "string") return displayText;
    if (typeof displayText === "number") return String(displayText);
    // For ReactNode, try to extract text content
    return String(displayText);
  }, [displayText]);

  const characters = textString.split("");

  useEffect(() => {
    // If this is the initial render and we're not hovering, show all characters immediately
    if (isInitialRender.current && !shouldShowAltText) {
      setVisibleChars(characters.length);
      isInitialRender.current = false;
      return;
    }

    // Otherwise, animate from the beginning
    setVisibleChars(0);
    const timeouts: NodeJS.Timeout[] = [];

    characters.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleChars((prev) => Math.max(prev, index + 1));
      }, index * 50);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [textString, shouldShowAltText, characters.length]);

  // Intersection observer for mobile hoverText or explicit textOnIntersection
  useEffect(() => {
    const shouldObserve = textOnIntersection || (isMobile && hoverText);
    if (!shouldObserve || !elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When element is in the top half of viewport, show alt text (Spanish)
          // When element is in the bottom half, show original (Croatian)
          setIsIntersected(entry.isIntersecting);
        });
      },
      {
        // Shrink viewport from bottom by 50%, so observation zone is top half
        // isIntersecting=true means element is in top half → show Spanish
        // isIntersecting=false means element is in bottom half → show Croatian
        rootMargin: '0px 0px -50% 0px',
        threshold: 0,
      }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [textOnIntersection, isMobile, hoverText]);

  return createElement(
    tag,
    {
      ref: elementRef,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      style,
      className: shouldShowAltText ? "hovered-text" : "",
    },
    characters.slice(0, visibleChars).map((char, index) => (
      <span
        key={`${shouldShowAltText}-${index}-${char}`}
        style={{
          display: "inline-block",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))
  );
}

