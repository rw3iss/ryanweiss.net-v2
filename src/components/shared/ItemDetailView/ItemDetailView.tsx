import { useEffect, useState } from 'preact/hooks';
import { PortfolioItem } from '../../../data/portfolioData';
import { MediaCarousel } from '../MediaCarousel/MediaCarousel';
import './ItemDetailView.scss';

interface ItemDetailViewProps {
    item: PortfolioItem | null;
    onClose: () => void;
    onTagClick?: (tag: string) => void;
}

export const ItemDetailView = ({ item, onClose, onTagClick }: ItemDetailViewProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (item) {
            setTimeout(() => setIsVisible(true), 50);
            setTimeout(() => setShowContent(true), 800);
        } else {
            setShowContent(false);
            setIsVisible(false);
        }
    }, [item]);

    const handleClose = () => {
        setShowContent(false);
        setIsVisible(false);
        setTimeout(() => onClose(), 600);
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && item) {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [item]);

    if (!item) return null;

    const hasMedia = item.media && item.media.length > 0;
    const showCarousel = item.image || hasMedia;

    return (
        <div className={`item-detail-view ${isVisible ? 'item-detail-view--visible' : ''}`}>
            <div className="item-detail-view__backdrop" onClick={handleClose} />

            <div className="item-detail-view__container">
                <div className={`item-detail-view__content ${showContent ? 'item-detail-view__content--visible' : ''}`}>
                    {/* Close buttons */}
                    <button
                        className="item-detail-view__close item-detail-view__close--left"
                        onClick={handleClose}
                        title="Back">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M15 18L9 12L15 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <button
                        className="item-detail-view__close item-detail-view__close--right"
                        onClick={handleClose}
                        title="Close">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M18 6L6 18M6 6L18 18"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* Thumbnail at very top */}
                    {item.thumbnail && (
                        <div className="item-detail-view__thumbnail-bar">
                            <img
                                src={item.thumbnail}
                                alt={`${item.name} logo`}
                                className="item-detail-view__thumbnail-image"
                            />
                        </div>
                    )}

                    {/* Show carousel if we have image or media */}
                    {showCarousel ? (
                        <div className="item-detail-view__media-section">
                            <MediaCarousel
                                mainImage={item.image}
                                media={item.media || []}
                                isVisible={isVisible}
                                onClose={handleClose}
                            />
                        </div>
                    ) : (
                        /* Show large text banner if no images */
                        <div className="item-detail-view__name-banner">
                            <div className="item-detail-view__name-banner-text">
                                {item.name}
                            </div>
                        </div>
                    )}

                    {/* Content section */}
                    <div className="item-detail-view__body">
                        <div className="item-detail-view__header" style={{ animationDelay: '0.1s' }}>
                            <h1 className="item-detail-view__title">{item.name}</h1>

                            {/* Work metadata */}
                            {(item.position || item.dates || item.type) && (
                                <div className="item-detail-view__work-meta">
                                    {item.position && (
                                        <div className="item-detail-view__position">{item.position}</div>
                                    )}
                                    {item.dates && (
                                        <div className="item-detail-view__dates">{item.dates}</div>
                                    )}
                                    {item.type && (
                                        <div className={`item-detail-view__type item-detail-view__type--${item.type}`}>
                                            {item.type === 'fulltime' ? 'Full-time' : 'Freelance'}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Website URL */}
                            {item.url && (
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="item-detail-view__url"
                                >
                                    Visit Website
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            )}
                        </div>

                        <div className="item-detail-view__meta" style={{ animationDelay: '0.2s' }}>
                            <p className="item-detail-view__description">{item.description}</p>
                            {item.tags && item.tags.length > 0 && (
                                <div className="item-detail-view__tags">
                                    {item.tags.map((tag) => (
                                        <button
                                            key={tag}
                                            className="item-detail-view__tag"
                                            onClick={() => {
                                                if (onTagClick) {
                                                    onTagClick(tag);
                                                }
                                            }}>
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {item.details && (
                            <div className="item-detail-view__details" style={{ animationDelay: '0.3s' }}>
                                <h2>Details</h2>
                                <p>{item.details}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
