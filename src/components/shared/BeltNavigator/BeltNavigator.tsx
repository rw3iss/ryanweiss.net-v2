import { useState, useEffect, useRef } from 'preact/hooks';
import { PortfolioRow, PortfolioItem } from '../../../data/portfolioData';
import { CircularBelt } from '../CircularBelt/CircularBelt';
import './BeltNavigator.scss';

interface BeltNavigatorProps {
    rows: PortfolioRow[];
    onItemClick: (item: PortfolioItem) => void;
    onRowChange: (index: number) => void;
    activeRowIndex: number;
}

export const BeltNavigator = ({ rows, onItemClick, onRowChange, activeRowIndex: externalActiveRowIndex }: BeltNavigatorProps) => {
    const [activeRowIndex, setActiveRowIndex] = useState(externalActiveRowIndex);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const canGoUp = activeRowIndex > 0;
    const canGoDown = activeRowIndex < rows.length - 1;

    // Sync with external state
    useEffect(() => {
        setActiveRowIndex(externalActiveRowIndex);
    }, [externalActiveRowIndex]);

    const navigateUp = () => {
        if (!canGoUp || isTransitioning) return;
        setIsTransitioning(true);
        const newIndex = activeRowIndex - 1;
        setActiveRowIndex(newIndex);
        onRowChange(newIndex);
        setTimeout(() => setIsTransitioning(false), 800);
    };

    const navigateDown = () => {
        if (!canGoDown || isTransitioning) return;
        setIsTransitioning(true);
        const newIndex = activeRowIndex + 1;
        setActiveRowIndex(newIndex);
        onRowChange(newIndex);
        setTimeout(() => setIsTransitioning(false), 800);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isTransitioning) return;

            if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                navigateUp();
            } else if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                e.preventDefault();
                navigateDown();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeRowIndex, isTransitioning]);

    const calculateRowStyle = (index: number) => {
        const diff = index - activeRowIndex;
        // Center the active row by offsetting all rows
        const translateY = diff * 70 - 35; // Offset to center the active row
        const opacity = diff === 0 ? 1 : Math.max(0.15, 0.4 - Math.abs(diff) * 0.2);
        const scale = diff === 0 ? 1 : 0.85;
        const blur = Math.abs(diff) > 0 ? 8 : 0;

        return {
            transform: `translateY(calc(50vh + ${translateY}vh)) scale(${scale})`,
            opacity,
            filter: `blur(${blur}px)`,
            pointerEvents: diff === 0 ? ('auto' as const) : ('none' as const),
            zIndex: 100 - Math.abs(diff)
        };
    };

    return (
        <div className="belt-navigator" ref={containerRef}>
            <div className="belt-navigator__rows">
                {rows.map((row, index) => (
                    <div
                        key={row.key}
                        className={`belt-navigator__row ${
                            index === activeRowIndex ? 'belt-navigator__row--active' : ''
                        }`}
                        style={calculateRowStyle(index)}>
                        <CircularBelt
                            items={row.items}
                            label={row.label}
                            onItemClick={onItemClick}
                            isActive={index === activeRowIndex}
                        />
                    </div>
                ))}
            </div>

            {canGoUp && (
                <button
                    className="belt-navigator__arrow belt-navigator__arrow--up belt-navigator__arrow--fixed"
                    onClick={navigateUp}>
                    <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                        <path
                            d="M10 22 L30 8 L50 22"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            )}

            {canGoDown && (
                <button
                    className="belt-navigator__arrow belt-navigator__arrow--down belt-navigator__arrow--fixed"
                    onClick={navigateDown}>
                    <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                        <path
                            d="M10 8 L30 22 L50 8"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            )}

        </div>
    );
};
