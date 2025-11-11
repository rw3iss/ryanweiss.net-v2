import { useEffect, useState } from 'preact/hooks';
import { PortfolioItem } from '../../../data/portfolioData';
import './ItemDetailView.scss';

interface ItemDetailViewProps {
    item: PortfolioItem | null;
    onClose: () => void;
}

export const ItemDetailView = ({ item, onClose }: ItemDetailViewProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (item) {
            // Start opening animation
            setTimeout(() => setIsVisible(true), 50);
            // Start content reveal after zoom completes
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

                    {/* Hero section */}
                    <div className="item-detail-view__hero">
                        <div className="item-detail-view__hero-bg">
                            <div className="item-detail-view__hero-placeholder">{item.name.charAt(0)}</div>
                        </div>
                    </div>

                    {/* Content section */}
                    <div className="item-detail-view__body">
                        <div className="item-detail-view__header" style={{ animationDelay: '0.1s' }}>
                            <h1 className="item-detail-view__title">{item.name}</h1>
                        </div>

                        <div className="item-detail-view__meta" style={{ animationDelay: '0.2s' }}>
                            <p className="item-detail-view__description">{item.description}</p>
                            {item.tags && item.tags.length > 0 && (
                                <div className="item-detail-view__tags">
                                    {item.tags.map((tag) => (
                                        <span key={tag} className="item-detail-view__tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="item-detail-view__details" style={{ animationDelay: '0.3s' }}>
                            <h2>About</h2>
                            <p>{item.details}</p>
                        </div>

                        {item.media && item.media.length > 0 && (
                            <div className="item-detail-view__media" style={{ animationDelay: '0.4s' }}>
                                <h2>Media</h2>
                                <div className="item-detail-view__media-grid">
                                    {item.media.map((mediaItem, index) => (
                                        <div key={index} className="item-detail-view__media-item">
                                            <div className="item-detail-view__media-placeholder">
                                                {mediaItem.type === 'image' ? '🖼️' : '🎬'}
                                            </div>
                                            <p className="item-detail-view__media-description">
                                                {mediaItem.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
