"use client"

import Slider from "react-slick";
import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Gallery.module.css";
import { useIsMobile } from "../hooks/use-media-query";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useIsMobile();
  let sliderRef = useRef<any>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  // Modal navigation functions (preserved)
  const goToPrevGalleryItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : images.length - 1);
    }
  };

  const goToNextGalleryItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex < images.length - 1 ? selectedIndex + 1 : 0);
    }
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

  // Auto-slide effect
  //   const goToNextSlide = useCallback(() => {
  //   if (selectedIndex !== null) {
  //     setSelectedIndex(selectedIndex < images.length - 1 ? selectedIndex + 1 : 0);
  //   }
  // }, [selectedIndex, images.length]);

  // useEffect(() => {
  //   if (isPaused || images.length === 0) {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //       intervalRef.current = null;
  //     }
  //     return;
  //   }

  //   intervalRef.current = setInterval(() => {
  //     goToNextSlide();
  //   }, 3000);

  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //       intervalRef.current = null;
  //     }
  //   };
  // }, [isPaused, images.length, goToNextSlide]);

  const goToNextSlide = () => {
    (sliderRef as any).slickNext();
  };

  const goToPrevSlide = () => {
    (sliderRef as any).slickPrev();
  };

  const registerSliderRef = (slider: any) => {
    sliderRef = slider;
  };

  const sliderSettings = {
    className: "center",
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    pauseOnHover: true,
    arrows: false,
    swipeToSlide: true,
    draggable: false,
  };

  return (
    <>
      <div className={styles.sliderContainer}>
        <button
          className={`${styles.sliderNav} ${styles.sliderPrev}`}
          onClick={goToPrevSlide}
          aria-label="Previous images"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <polyline points="15 6 9 12 15 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <Slider
          {...sliderSettings}
          ref={registerSliderRef}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.sliderItem}
              onClick={() => openModal(index)}
            >
              <img src={image.thumb} alt={`Gallery image ${index + 1}`} className={styles.sliderImage} />
            </div>
          ))}
        </Slider>

        <button
          className={`${styles.sliderNav} ${styles.sliderNext}`}
          onClick={goToNextSlide}
          aria-label="Next images"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <polyline points="9 6 15 12 9 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
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

            <button
              className={styles.galleryModalNav + " " + styles.galleryModalPrev}
              onClick={goToPrevGalleryItem}
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <polyline points="15 6 9 12 15 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              className={`${styles.galleryModalNav} ${styles.galleryModalNext}`}
              onClick={goToNextGalleryItem}
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <polyline points="9 6 15 12 9 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

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

