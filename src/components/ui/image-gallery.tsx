"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ImageGalleryProps } from "@/types";

const ImageGallery = ({ images, altPrefix = "Image" }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Calculate visible images based on screen size (1 on mobile, 2 on md+)
  const visibleImages = images.slice(currentIndex, currentIndex + itemsPerPage);
  const hasNext = currentIndex + itemsPerPage < images.length;
  const hasPrev = currentIndex > 0;

  // Disable scroll when fullscreen is open
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFullscreen]);

  // Responsive itemsPerPage (match Tailwind's `md` breakpoint: 768px)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => {
      const newItems = mq.matches ? 2 : 1;
      setItemsPerPage(() => {
        setCurrentIndex((ci) => Math.min(ci, Math.max(0, images.length - newItems)));
        return newItems;
      });
    };

    update();
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, [images.length]);

  const handleNext = () => {
    if (hasNext) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (hasPrev) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const openFullscreen = (index: number) => {
    setFullscreenIndex(currentIndex + index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const handleFullscreenNext = () => {
    setFullscreenIndex((prev) => (prev + 1) % images.length);
  };

  const handleFullscreenPrev = () => {
    setFullscreenIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index: number) => {
    if (isFullscreen) {
      setFullscreenIndex(index);
    } else {
      // Adjust currentIndex to show the clicked image while respecting itemsPerPage
      const maxStart = Math.max(0, images.length - itemsPerPage);
      const newStart = Math.min(index, maxStart);
      setCurrentIndex(newStart);
    }
  };

  if (images.length === 0) return null;

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="space-y-6">
          {/* Main Gallery Grid */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="grid grid-cols-1 gap-6 transition-all duration-500 ease-in-out md:grid-cols-2">
              {visibleImages.map((image, index) => (
                <div
                  key={currentIndex + index}
                  className="border-gray/70 group relative h-[300px] cursor-pointer overflow-hidden border md:h-[400px]"
                  onClick={() => openFullscreen(index)}
                >
                  <Image
                    src={image}
                    alt={`${altPrefix} ${currentIndex + index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                </div>
              ))}
            </div>

            {/* Navigation Buttons - Show on hover inside images */}
            {images.length > itemsPerPage && isHovered && (
              <>
                {/* Previous Button */}
                {hasPrev && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="hover:border-primary hover:text-primary absolute top-1/2 left-4 z-10 -translate-y-1/2 border border-white/20 bg-black/70 p-3 text-white transition-all hover:bg-black/90"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                )}

                {/* Next Button */}
                {hasNext && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="hover:border-primary hover:text-primary absolute top-1/2 right-4 z-10 -translate-y-1/2 border border-white/20 bg-black/70 p-3 text-white transition-all hover:bg-black/90"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                )}
              </>
            )}
          </div>

          {/* Thumbnail Navigation */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`relative h-16 w-16 shrink-0 border-2 transition-all md:h-20 md:w-20 ${
                    index >= currentIndex && index < currentIndex + itemsPerPage
                      ? "border-primary"
                      : "border-gray/50 hover:border-gray"
                  }`}
                >
                  <Image src={image} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          {/* Close Button */}
          <button
            onClick={closeFullscreen}
            className="hover:text-primary absolute top-4 right-4 z-10 p-2 text-white transition-colors md:top-8 md:right-8"
            aria-label="Close fullscreen"
          >
            <X size={32} />
          </button>

          {/* Main Image */}
          <div className="relative flex h-full w-full items-center justify-center p-4 md:p-16">
            <div className="relative h-full max-h-[80vh] w-full max-w-6xl">
              <Image
                src={images[fullscreenIndex]}
                alt={`${altPrefix} ${fullscreenIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handleFullscreenPrev}
            className="hover:text-primary border-gray/30 hover:border-primary absolute top-1/2 left-4 -translate-y-1/2 border bg-black/50 p-3 text-white transition-colors md:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={handleFullscreenNext}
            className="hover:text-primary border-gray/30 hover:border-primary absolute top-1/2 right-4 -translate-y-1/2 border bg-black/50 p-3 text-white transition-colors md:right-8"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 left-1/2 flex max-w-[90vw] -translate-x-1/2 gap-2 overflow-x-auto pb-2 md:bottom-8">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`relative h-12 w-12 shrink-0 border-2 transition-all md:h-16 md:w-16 ${
                  index === fullscreenIndex ? "border-primary" : "border-gray/50 hover:border-gray"
                }`}
              >
                <Image src={image} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
