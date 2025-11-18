"use client"

import { useState, useEffect } from "react";
import styles from "./Gallery.module.css";

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
      <div className={styles.galleryContainer}>
        <div className={styles.galleryGrid}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.galleryThumbnail}
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
          className={styles.galleryModalOverlay}
          onClick={closeModal}
        >
          <div className={styles.galleryModalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.galleryModalClose} onClick={closeModal} aria-label="Close">
              ×
            </button>

            {selectedIndex > 0 && (
              <button
                className={styles.galleryModalNav + " " + styles.galleryModalPrev}
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                ‹
              </button>
            )}

            {selectedIndex < images.length - 1 && (
              <button
                className={`${styles.galleryModalNav} ${styles.galleryModalNext}`}
                onClick={goToNext}
                aria-label="Next image"
              >
                ›
              </button>
            )}

            <div className={styles.galleryModalImageContainer}>
              <img
                src={images[selectedIndex].src}
                alt={`Gallery image ${selectedIndex + 1}`}
                className={styles.galleryModalImage}
              />
            </div>

            <div className={styles.galleryModalCaption}>
              {images[selectedIndex].caption}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

