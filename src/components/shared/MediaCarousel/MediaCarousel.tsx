import { useEffect, useRef, useState } from 'preact/hooks';
import { MediaItem } from '../../../data/portfolioData';
import './MediaCarousel.scss';

interface MediaCarouselProps {
    mainImage?: string;
    media: MediaItem[];
    isVisible: boolean;
    onClose?: () => void;
}

export const MediaCarousel = ({ mainImage, media, isVisible, onClose }: MediaCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
    const touchStartRef = useRef<{ x: number; time: number } | null>(null);

    // Build all media items (main image first, then media array)
    const allMedia: (MediaItem | { url: string; type: 'image'; description: string })[] = [];

    if (mainImage) {
        allMedia.push({ url: mainImage, type: 'image', description: 'Main image' });
    }

    allMedia.push(...media);

    // Stop all videos when closing or changing slides
    useEffect(() => {
        if (!isVisible) {
            // Stop all videos when modal is closed
            videoRefs.current.forEach((video) => {
                video.pause();
                video.currentTime = 0;
            });
        }
    }, [isVisible]);

    useEffect(() => {
        // Pause all videos except the current one
        videoRefs.current.forEach((video, index) => {
            if (index !== currentIndex) {
                video.pause();
            }
        });
    }, [currentIndex]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            videoRefs.current.forEach((video) => {
                video.pause();
                video.currentTime = 0;
            });
        };
    }, []);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? allMedia.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === allMedia.length - 1 ? 0 : prev + 1));
    };

    const handleThumbnailClick = (index: number) => {
        setCurrentIndex(index);
    };

    // Touch handlers for swipe navigation
    const handleTouchStart = (e: TouchEvent) => {
        touchStartRef.current = {
            x: e.touches[0].clientX,
            time: Date.now()
        };
    };

    const handleTouchEnd = (e: TouchEvent) => {
        if (!touchStartRef.current) return;

        const touchEnd = e.changedTouches[0].clientX;
        const deltaX = touchEnd - touchStartRef.current.x;
        const deltaTime = Date.now() - touchStartRef.current.time;

        // Swipe detection (min 50px movement, max 300ms)
        if (Math.abs(deltaX) > 50 && deltaTime < 300) {
            if (deltaX > 0) {
                handlePrevious();
            } else {
                handleNext();
            }
        }

        touchStartRef.current = null;
    };

    const registerVideoRef = (index: number, el: HTMLVideoElement | null) => {
        if (el) {
            videoRefs.current.set(index, el);
        } else {
            videoRefs.current.delete(index);
        }
    };

    if (allMedia.length === 0) {
        return null;
    }

    const currentItem = allMedia[currentIndex];
    const showThumbnails = allMedia.length > 1;

    return (
        <div className="media-carousel">
            <div
                className="media-carousel__main"
                onTouchStart={handleTouchStart as any}
                onTouchEnd={handleTouchEnd as any}>
                {currentItem.type === 'image' ? (
                    <img
                        src={currentItem.url}
                        alt={currentItem.description || 'Media item'}
                        className="media-carousel__image"
                    />
                ) : (
                    <video
                        ref={(el) => registerVideoRef(currentIndex, el)}
                        src={currentItem.url}
                        className="media-carousel__video"
                        controls
                        playsInline
                    />
                )}

                {allMedia.length > 1 && (
                    <div className="media-carousel__description">
                        {currentItem.description || `${currentIndex + 1} / ${allMedia.length}`}
                    </div>
                )}
            </div>

            {/* Navigation arrows - only show if more than 1 item */}
            {allMedia.length > 1 && (
                <div className="media-carousel__controls">
                    <button
                        className="media-carousel__arrow media-carousel__arrow--left"
                        onClick={handlePrevious}
                        title="Previous">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M15 18L9 12L15 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <div className="media-carousel__indicator">
                        {currentIndex + 1} / {allMedia.length}
                    </div>

                    <button
                        className="media-carousel__arrow media-carousel__arrow--right"
                        onClick={handleNext}
                        title="Next">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9 18L15 12L9 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            )}

            {/* Thumbnail sidebar - only show if more than 1 item */}
            {showThumbnails && (
                <div className="media-carousel__thumbnails">
                    {allMedia.map((item, index) => (
                        <div
                            key={index}
                            className={`media-carousel__thumbnail ${
                                index === currentIndex ? 'media-carousel__thumbnail--active' : ''
                            }`}
                            onClick={() => handleThumbnailClick(index)}>
                            {item.type === 'image' ? (
                                <img
                                    src={item.url}
                                    alt={item.description || `Thumbnail ${index + 1}`}
                                    className="media-carousel__thumbnail-image"
                                />
                            ) : (
                                <div className="media-carousel__thumbnail-video">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
