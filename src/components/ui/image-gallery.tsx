'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ImageGalleryProps } from '@/types';

const ImageGallery = ({ images, altPrefix = 'Image' }: ImageGalleryProps) => {
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
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isFullscreen]);

    // Responsive itemsPerPage (match Tailwind's `md` breakpoint: 768px)
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mq = window.matchMedia('(min-width: 768px)');
        const update = () => {
            const newItems = mq.matches ? 2 : 1;
            setItemsPerPage(() => {
                setCurrentIndex(ci => Math.min(ci, Math.max(0, images.length - newItems)));
                return newItems;
            });
        };

        update();
        if (mq.addEventListener) mq.addEventListener('change', update);
        else mq.addListener(update);

        return () => {
            if (mq.removeEventListener) mq.removeEventListener('change', update);
            else mq.removeListener(update);
        };
    }, [images.length]);

    const handleNext = () => {
        if (hasNext) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (hasPrev) {
            setCurrentIndex(prev => prev - 1);
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
        setFullscreenIndex(prev => (prev + 1) % images.length);
    };

    const handleFullscreenPrev = () => {
        setFullscreenIndex(prev => (prev - 1 + images.length) % images.length);
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
            <section className="w-full max-w-7xl mx-auto px-6 py-12">
                <div className="space-y-6">
                    {/* Main Gallery Grid */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ease-in-out">
                            {visibleImages.map((image, index) => (
                                <div
                                    key={currentIndex + index}
                                    className="relative h-[300px] md:h-[400px] border border-gray/70 overflow-hidden cursor-pointer group"
                                    onClick={() => openFullscreen(index)}
                                >
                                    <Image
                                        src={image}
                                        alt={`${altPrefix} ${currentIndex + index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
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
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 border border-white/20 hover:border-primary text-white hover:text-primary p-3 transition-all z-10"
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
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 border border-white/20 hover:border-primary text-white hover:text-primary p-3 transition-all z-10"
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
                                    className={`relative w-16 h-16 md:w-20 md:h-20 shrink-0 border-2 transition-all ${index >= currentIndex && index < currentIndex + itemsPerPage
                                        ? 'border-primary'
                                        : 'border-gray/50 hover:border-gray'
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Fullscreen Modal */}
            {isFullscreen && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
                    {/* Close Button */}
                    <button
                        onClick={closeFullscreen}
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-primary transition-colors p-2 z-10"
                        aria-label="Close fullscreen"
                    >
                        <X size={32} />
                    </button>

                    {/* Main Image */}
                    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-16">
                        <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
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
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-3 bg-black/50 border border-gray/30 hover:border-primary"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={handleFullscreenNext}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-3 bg-black/50 border border-gray/30 hover:border-primary"
                        aria-label="Next image"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Thumbnail Strip */}
                    <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] pb-2">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => handleThumbnailClick(index)}
                                className={`relative w-12 h-12 md:w-16 md:h-16 shrink-0 border-2 transition-all ${index === fullscreenIndex
                                    ? 'border-primary'
                                    : 'border-gray/50 hover:border-gray'
                                    }`}
                            >
                                <Image
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageGallery;