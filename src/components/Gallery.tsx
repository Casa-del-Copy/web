"use client"

import { useState, useEffect } from "react";

interface GalleryImage {
  src: string;
  thumb?: string;
  caption: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowLeft" && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      } else if (e.key === "ArrowRight" && selectedIndex < images.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
    };

    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedIndex, images.length]);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <>
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-thumbnail"
              onClick={() => openModal(index)}
            >
              <img
                src={image.thumb || image.src}
                alt={`Gallery image ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="gallery-modal-overlay"
          onClick={closeModal}
        >
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal} aria-label="Close">
              ×
            </button>

            {selectedIndex > 0 && (
              <button
                className="gallery-modal-nav gallery-modal-prev"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                ‹
              </button>
            )}

            {selectedIndex < images.length - 1 && (
              <button
                className="gallery-modal-nav gallery-modal-next"
                onClick={goToNext}
                aria-label="Next image"
              >
                ›
              </button>
            )}

            <div className="gallery-modal-image-container">
              <img
                src={images[selectedIndex].src}
                alt={`Gallery image ${selectedIndex + 1}`}
                className="gallery-modal-image"
              />
            </div>

            <div className="gallery-modal-caption">
              {images[selectedIndex].caption}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-container {
          width: 100%;
          margin: 48px 0;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          max-width: 100%;
        }

        .gallery-thumbnail {
          position: relative;
          width: 100%;
          aspect-ratio: 920 / 1140;
          overflow: hidden;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
          background: #f0f0f0;
        }

        .gallery-thumbnail:hover {
          transform: scale(1.02);
          opacity: 0.9;
        }

        .gallery-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .gallery-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          overflow-y: auto;
        }

        .gallery-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .gallery-modal-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: transparent;
          border: none;
          color: white;
          font-size: 40px;
          cursor: pointer;
          line-height: 1;
          padding: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s ease;
          z-index: 1001;
        }

        .gallery-modal-close:hover {
          opacity: 0.7;
        }

        .gallery-modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          font-size: 48px;
          cursor: pointer;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.2s ease;
          z-index: 1001;
        }

        .gallery-modal-nav:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .gallery-modal-prev {
          left: -60px;
        }

        .gallery-modal-next {
          right: -60px;
        }

        .gallery-modal-image-container {
          max-width: 100%;
          max-height: 75vh;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .gallery-modal-image {
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
          border-radius: 8px;
        }

        .gallery-modal-caption {
          color: white;
          font-size: 1rem;
          line-height: 1.6;
          text-align: center;
          max-width: 600px;
          padding: 0 20px;
          white-space: pre-wrap;
        }

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
          }

          .gallery-modal-prev {
            left: 10px;
          }

          .gallery-modal-next {
            right: 10px;
          }
        }

        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 6px;
          }

          .gallery-modal-overlay {
            padding: 10px;
          }

          .gallery-modal-close {
            top: -30px;
            font-size: 32px;
            width: 32px;
            height: 32px;
          }

          .gallery-modal-nav {
            width: 40px;
            height: 40px;
            font-size: 36px;
          }

          .gallery-modal-prev {
            left: 5px;
          }

          .gallery-modal-next {
            right: 5px;
          }

          .gallery-modal-image-container {
            max-height: 60vh;
            margin-bottom: 16px;
          }

          .gallery-modal-caption {
            font-size: 0.9rem;
            padding: 0 10px;
          }
        }
      `}</style>
    </>
  );
}

