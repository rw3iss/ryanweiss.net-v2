import { useEffect, useRef, useState } from 'preact/hooks';
import { PortfolioItem } from '../../../data/portfolioData';
import './CircularBelt.scss';

interface CircularBeltProps {
    items: PortfolioItem[];
    label: string;
    onItemClick: (item: PortfolioItem) => void;
    isActive: boolean;
}

export const CircularBelt = ({ items, label, onItemClick, isActive }: CircularBeltProps) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollIntervalRef = useRef<number>();
    const mouseXRef = useRef(0);

    const itemWidth = 400; // Width of each item
    const itemSpacing = 50; // Space between items
    const totalItemWidth = itemWidth + itemSpacing;
    const maxScroll = items.length * totalItemWidth;

    useEffect(() => {
        return () => {
            stopScrolling();
        };
    }, []);

    const startScrolling = (speed: number) => {
        if (scrollIntervalRef.current) return;

        setIsScrolling(true);
        scrollIntervalRef.current = window.setInterval(() => {
            setScrollPosition((prev) => {
                const newPos = prev + speed;
                // Wrap around infinitely
                if (newPos < 0) return maxScroll + newPos;
                if (newPos > maxScroll) return newPos - maxScroll;
                return newPos;
            });
        }, 16);
    };

    const stopScrolling = () => {
        if (scrollIntervalRef.current) {
            clearInterval(scrollIntervalRef.current);
            scrollIntervalRef.current = undefined;
        }
        setIsScrolling(false);
    };

    const calculateItemStyle = (index: number, itemId: string) => {
        const windowWidth = window.innerWidth;
        const centerX = windowWidth / 2;

        // Calculate position with infinite scroll
        let basePosition = index * totalItemWidth - scrollPosition;

        // Wrap items for infinite scroll
        while (basePosition < -totalItemWidth * 2) {
            basePosition += maxScroll;
        }
        while (basePosition > windowWidth + totalItemWidth * 2) {
            basePosition -= maxScroll;
        }

        const itemCenterX = basePosition + itemWidth / 2;
        const distanceFromCenter = itemCenterX - centerX;
        const normalizedDistance = distanceFromCenter / (windowWidth / 2);

        // Check if this item is being hovered
        const isHovered = hoveredItemId === itemId;

        // Calculate skew and scale based on distance from center
        const skewY = isHovered ? 0 : normalizedDistance * 15; // No skew when hovered
        const rotateY = isHovered ? 0 : normalizedDistance * -20; // No rotation when hovered
        const scale = isHovered ? 1.05 : 1 - Math.abs(normalizedDistance) * 0.3; // Slightly larger when hovered
        const opacity = isHovered ? 1 : Math.max(0.3, 1 - Math.abs(normalizedDistance) * 0.6); // Min opacity 0.3 for visibility

        // Calculate z-index so center items and hovered items are on top
        const zIndex = isHovered ? 200 : Math.max(10, Math.round(100 - Math.abs(distanceFromCenter)));

        return {
            transform: `translateX(${basePosition}px) scale(${Math.max(scale, 0.5)}) skewY(${skewY}deg) perspective(1000px) rotateY(${rotateY}deg)`,
            opacity,
            zIndex,
            transformStyle: 'preserve-3d' as const,
            transition: isHovered ? 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'all 0.16s linear'
        };
    };

    // Create multiple copies of items for seamless infinite scroll
    const renderItems = () => {
        const rendered = [];
        const copies = 3; // Render 3 copies of the items

        for (let copy = 0; copy < copies; copy++) {
            items.forEach((item, index) => {
                const actualIndex = index + copy * items.length;
                const style = calculateItemStyle(actualIndex, item.id);

                rendered.push(
                    <div
                        key={`${item.id}-${copy}`}
                        className="circular-belt__item"
                        style={style}
                        onMouseEnter={() => {
                            setHoveredItemId(item.id);
                            stopScrolling(); // Stop auto-scrolling when hovering over an item
                        }}
                        onMouseLeave={() => {
                            setHoveredItemId(null);
                        }}
                        onClick={() => onItemClick(item)}>
                        <div className="circular-belt__item-inner">
                            <div className="circular-belt__item-image">
                                <div className="circular-belt__item-image-placeholder">
                                    <span>{item.name.charAt(0)}</span>
                                </div>
                            </div>
                            <div className="circular-belt__item-content">
                                <h3 className="circular-belt__item-title">{item.name}</h3>
                                <p className="circular-belt__item-description">{item.description}</p>
                                {item.tags && item.tags.length > 0 && (
                                    <div className="circular-belt__item-tags">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="circular-belt__item-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            });
        }

        return rendered;
    };

    return (
        <div
            className={`circular-belt ${isActive ? 'circular-belt--active' : ''}`}
            ref={containerRef}
            data-label={label}>
            <div className="circular-belt__items">{renderItems()}</div>

            {/* Hover zones for scrolling */}
            <div
                className="circular-belt__scroll-zone circular-belt__scroll-zone--left"
                onMouseEnter={() => {
                    if (isActive) {
                        startScrolling(-8);
                    }
                }}
                onMouseLeave={stopScrolling}
            />
            <div
                className="circular-belt__scroll-zone circular-belt__scroll-zone--right"
                onMouseEnter={() => {
                    if (isActive) {
                        startScrolling(8);
                    }
                }}
                onMouseLeave={stopScrolling}
            />

            <div className="circular-belt__edge-fade circular-belt__edge-fade--left" />
            <div className="circular-belt__edge-fade circular-belt__edge-fade--right" />
        </div>
    );
};
