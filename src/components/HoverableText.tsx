"use client"

import { useState, createElement, useEffect, useMemo, useRef, CSSProperties } from "react";

export default function HoverableText({ tag, children, hoverText, style }: {
  tag: "a" | "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: React.ReactNode;
  hoverText?: string;
  style?: CSSProperties | undefined;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [visibleChars, setVisibleChars] = useState(0);
  const isInitialRender = useRef(true);

  const displayText = isHovered && hoverText ? hoverText : children;

  const textString = useMemo(() => {
    if (typeof displayText === "string") return displayText;
    if (typeof displayText === "number") return String(displayText);
    // For ReactNode, try to extract text content
    return String(displayText);
  }, [displayText]);

  const characters = textString.split("");

  useEffect(() => {
    // If this is the initial render and we're not hovering, show all characters immediately
    if (isInitialRender.current && !isHovered) {
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
  }, [textString, isHovered, characters.length]);

  return createElement(
    tag,
    {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      style,
      className: isHovered ? "hovered-text" : "",
    },
    characters.slice(0, visibleChars).map((char, index) => (
      <span
        key={`${isHovered}-${index}-${char}`}
        style={{
          display: "inline-block",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))
  );
}

