"use client"

// import Slider from "react-slick";
import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Gallery.module.css";
import { useIsMobile } from "../hooks/use-media-query";

interface GalleryImage {
  src: string;
  thumb?: string;
  caption: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Gallery({ images }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();

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

  // Carousel navigation functions with infinite loop
  const goToNextCarousel = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPreviousCarousel = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleCarouselNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    goToNextCarousel();
    // Reset timer on manual navigation - pause briefly then resume
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 100);
  };

  const handleCarouselPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    goToPreviousCarousel();
    // Reset timer on manual navigation - pause briefly then resume
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 100);
  };


  // Modal navigation functions (preserved)
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

  // Calculate visible images count
  const visibleCount = isMobile ? 2 : 5;

  // Auto-slide effect
  useEffect(() => {
    if (isPaused || images.length === 0) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      goToNextCarousel();
    }, 10000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused, images.length, goToNextCarousel]);

  // Calculate translateX offset for sliding
  // Using CSS calc based on flex-basis: each item is (100% - gap) / visibleCount
  // We slide by one item width + gap
  const getTranslateX = () => {
    if (images.length === 0) return 0;
    // For desktop: item width is calc((100% - 48px) / 5), gap is 12px
    // For mobile: item width is calc((100% - 6px) / 2), gap is 6px
    // We'll use CSS custom property to pass the current index
    return currentIndex;
  };

  return (
    <>
      <div
        className={styles.galleryContainer}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={styles.galleryCarousel}>
          <button
            className={`${styles.galleryCarouselNav} ${styles.galleryCarouselPrev}`}
            onClick={handleCarouselPrev}
            aria-label="Previous images"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <polyline points="15 6 9 12 15 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className={styles.galleryCarouselWrapper}>
            <div
              className={styles.galleryCarouselTrack}
              style={{
                '--current-index': getTranslateX(),
              } as React.CSSProperties}
            >
              {/* Render all images for sliding */}
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

          <button
            className={`${styles.galleryCarouselNav} ${styles.galleryCarouselNext}`}
            onClick={handleCarouselNext}
            aria-label="Next images"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <polyline points="9 6 15 12 9 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={`Gallery image ${index + 1}`} />
            </div>
          </div>
          ))}
        </Slider> */}
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
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <polyline points="15 6 9 12 15 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}

            {selectedIndex < images.length - 1 && (
              <button
                className={`${styles.galleryModalNav} ${styles.galleryModalNext}`}
                onClick={goToNext}
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <polyline points="9 6 15 12 9 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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

