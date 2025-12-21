"use client"

import { useRef, useEffect } from "react";
import Gallery from "./Gallery";
import styles from "./Project.module.css";
import {useMediaQuery} from "@/hooks/use-media-query";

interface GalleryImage {
  src: string;
  thumb?: string;
  caption: string;
}

interface ProjectProps {
  projectLinks: {title: string, url: string}[];
  videoUrl: string;
  heading: string;
  paragraph: string;
  position?: "left" | "right";
  galleryImages?: GalleryImage[];
}

export default function Project({ projectLinks, videoUrl, heading, paragraph, position = "right", galleryImages }: ProjectProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 639px)');

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              // Autoplay may fail due to browser policies
              console.log("Autoplay prevented:", error);
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of video is visible
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.project}>
      <div
        ref={containerRef}
        className={`${styles.videoTextContainer} ${position === "left" ? styles.left : styles.right}`}
      >
        {isMobile && (
          <h3 className={styles.projectHeading}>{heading}</h3>
        )}

        <div className={styles.videoWrapper}>
          {/* Phone Frame */}
          <div className={styles.phoneFrame}>
            {/* Screen */}
            <div className={styles.phoneScreen}>
              <video
                ref={videoRef}
                src={videoUrl}
                playsInline
                muted
                loop
                className={styles.phoneVideo}
                controls
                controlsList="nodownload noremoteplayback noplaybackrate"
              />
            </div>
          </div>
        </div>

        <div className={styles.textContent}>
          {!isMobile && (
            <h3 className={styles.projectHeading}>{heading}</h3>
          )}

          <p className={styles.projectParagraph}>{paragraph}</p>

          {projectLinks.map((link) => (
            <div key={link.title}>
              <br />
              <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                {link.title}
              </a>
            </div>
          ))}
        </div>
      </div>

      {galleryImages && galleryImages.length > 0 && (
        <Gallery images={isMobile ? galleryImages.slice(0, 4) : galleryImages} />
      )}
    </div>
  );
}
