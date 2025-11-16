"use client"

import { useRef, useEffect } from "react";
import Gallery from "./Gallery";

interface GalleryImage {
  src: string;
  thumb?: string;
  caption: string;
}

interface ProjectProps {
  videoUrl: string;
  heading: string;
  paragraph: string;
  position?: "left" | "right";
  galleryImages?: GalleryImage[];
}

export default function Project({ videoUrl, heading, paragraph, position = "right", galleryImages }: ProjectProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
        threshold: 0.5, // Trigger when 50% of video is visible
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="project-container"
        style={{
          display: "flex",
          flexDirection: position === "left" ? "row-reverse" : "row",
          gap: "144px",
          alignItems: "flex-start",
          margin: "72px auto",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {/* Video Container with Phone Mask */}
        <div className="video-wrapper">
          {/* Phone Frame */}
          <div className="phone-frame">
            {/* Notch */}
            <div className="phone-notch" />

            {/* Screen */}
            <div className="phone-screen">
              <video
                ref={videoRef}
                src={videoUrl}
                playsInline
                muted
                loop
                className="phone-video"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-content">
          <h2 className="project-heading">{heading}</h2>
          <p className="project-paragraph">{paragraph}</p>
        </div>
      </div>

      {galleryImages && galleryImages.length > 0 && (
        <Gallery images={galleryImages} />
      )}

      {/* Responsive styles */}
      <style jsx>{`
        .project-container {
          display: flex;
          gap: 48px;
          align-items: center;
          margin: 72px 0;
          max-width: 1300px;
          width: 100%;
        }

        .video-wrapper {
          flex: 0 0 auto;
          width: 100%;
          max-width: 400px;
          position: relative;
        }

        .phone-frame {
          position: relative;
          padding: 12px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          border-radius: 32px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(255, 255, 255, 0.1);
        }

        .phone-notch {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 24px;
          background: #1a1a1a;
          border-radius: 0 0 16px 16px;
          z-index: 10;
        }

        .phone-screen {
          position: relative;
          width: 100%;
          aspect-ratio: 9 / 16;
          border-radius: 24px;
          overflow: hidden;
          background: #000;
        }

        .phone-video {
          width: 376px;
          height: 668px;
          object-fit: cover;
          display: block;
        }

        .text-content {
          flex: 1 1 auto;
          padding: 24px;
        }

        .project-heading {
          font-size: 2.2rem;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -1px;
          margin-bottom: 12px;
        }

        .project-paragraph {
          font-size: 1.15rem;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .project-container {
            flex-direction: column !important;
            gap: 32px !important;
          }
          .video-wrapper {
            max-width: 350px !important;
          }
          .project-heading {
            font-size: 1.8rem !important;
          }
          .project-paragraph {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 640px) {
          .video-wrapper {
            max-width: 280px !important;
          }
          .phone-frame {
            padding: 8px !important;
            border-radius: 24px !important;
          }
          .phone-screen {
            border-radius: 18px !important;
          }
          .phone-notch {
            width: 100px !important;
            height: 20px !important;
          }
          .project-heading {
            font-size: 1.5rem !important;
            margin-bottom: 8px !important;
          }
          .project-paragraph {
            font-size: 0.95rem !important;
          }
          .text-content {
            padding: 16px !important;
          }
        }
      `}</style>
    </>
  );
}
