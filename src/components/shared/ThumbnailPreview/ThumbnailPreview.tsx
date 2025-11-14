import { useEffect, useRef, useState } from 'preact/hooks';
import { PortfolioItem } from '../../../data/portfolioData';
import './ThumbnailPreview.scss';

interface ThumbnailPreviewProps {
	items: PortfolioItem[];
	onItemClick: (item: PortfolioItem) => void;
	onScrollToItem: (itemId: string) => void;
	hasBeenViewed: boolean;
	onTrackScroll?: (scrollPercent: number) => void;
	beltScrollPercent?: number;
}

// Configuration
const THUMBNAIL_SIZE = 80;
const THUMBNAIL_GAP = 50;
const SEQUENTIAL_DELAY = 300;
const SEQUENTIAL_ITEM_DELAY = 40;
const SCROLL_ZONE_WIDTH = 150;
const AUTO_SCROLL_SPEED = 4;

export const ThumbnailPreview = ({
	items,
	onItemClick,
	onScrollToItem,
	hasBeenViewed,
	onTrackScroll,
	beltScrollPercent = 0
}: ThumbnailPreviewProps) => {
	const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
	const [trackScrollPosition, setTrackScrollPosition] = useState(0);
	const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
	const [isHoveringTrack, setIsHoveringTrack] = useState(false);
	const [mouseX, setMouseX] = useState(0);

	const trackRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollIntervalRef = useRef<number>();
	const animationTimeoutsRef = useRef<number[]>([]);

	useEffect(() => {
		return () => {
			animationTimeoutsRef.current.forEach(clearTimeout);
			if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
		};
	}, []);

	// Sequential animation from left to right
	useEffect(() => {
		animationTimeoutsRef.current.forEach(clearTimeout);
		animationTimeoutsRef.current = [];

		if (!hasBeenViewed) {
			items.forEach((_, index) => {
				const timeout = window.setTimeout(() => {
					setVisibleItems((prev) => {
						const newSet = new Set(prev);
						newSet.add(index);
						return newSet;
					});
				}, SEQUENTIAL_DELAY + index * SEQUENTIAL_ITEM_DELAY);
				animationTimeoutsRef.current.push(timeout);
			});
		} else {
			setTimeout(() => {
				const allIndexes = new Set(items.map((_, index) => index));
				setVisibleItems(allIndexes);
			}, SEQUENTIAL_DELAY);
		}

		return () => {
			animationTimeoutsRef.current.forEach(clearTimeout);
			animationTimeoutsRef.current = [];
		};
	}, [hasBeenViewed, items.length]);

	const handleThumbnailClick = (item: PortfolioItem) => {
		onScrollToItem(item.id);
		setTimeout(() => {
			onItemClick(item);
		}, 300);
	};

	// When hovering a specific thumbnail, scroll belt to center that item
	const handleThumbnailHover = (index: number) => {
		setHoveredItemIndex(index);

		// Calculate scroll percentage for this item
		// This maps directly to belt positioning: targetPos = scrollPercent * maxScroll
		// where maxScroll = items.length * totalItemWidth
		// So to center item at index i: scrollPercent = i / items.length
		const scrollPercent = index / items.length;

		// Notify parent to update belt scroll
		if (onTrackScroll) {
			onTrackScroll(scrollPercent);
		}
	};

	const handleThumbnailLeave = () => {
		// Don't clear immediately, keep last position
	};

	const handleTrackMouseMove = (e: MouseEvent) => {
		if (!trackRef.current || !containerRef.current) return;

		const trackRect = trackRef.current.getBoundingClientRect();
		const relativeX = e.clientX - trackRect.left;

		// Update mouse position for glow
		setMouseX(relativeX);

		// Auto-scroll the thumbnail track itself if near edges
		const container = containerRef.current;
		const maxScroll = container.scrollWidth - container.clientWidth;

		if (maxScroll > 0) {
			if (relativeX < SCROLL_ZONE_WIDTH && container.scrollLeft > 0) {
				startAutoScroll(-AUTO_SCROLL_SPEED);
			} else if (relativeX > trackRect.width - SCROLL_ZONE_WIDTH && container.scrollLeft < maxScroll) {
				startAutoScroll(AUTO_SCROLL_SPEED);
			} else {
				stopAutoScroll();
			}
		}
	};

	const handleTrackMouseEnter = () => {
		setIsHoveringTrack(true);
	};

	const handleTrackMouseLeave = () => {
		setIsHoveringTrack(false);
		setHoveredItemIndex(null);
		stopAutoScroll();
	};

	const handleTrackWheel = (e: WheelEvent) => {
		e.preventDefault();
		if (!containerRef.current) return;

		// Scroll horizontally with mouse wheel
		const scrollSpeed = 2; // Multiplier for faster scrolling
		containerRef.current.scrollLeft += e.deltaY * scrollSpeed;
	};

	const startAutoScroll = (speed: number) => {
		if (scrollIntervalRef.current) return;

		scrollIntervalRef.current = window.setInterval(() => {
			if (containerRef.current) {
				containerRef.current.scrollLeft += speed;
			}
		}, 16);
	};

	const stopAutoScroll = () => {
		if (scrollIntervalRef.current) {
			clearInterval(scrollIntervalRef.current);
			scrollIntervalRef.current = undefined;
		}
	};

	const handleTrackScroll = () => {
		if (containerRef.current) {
			setTrackScrollPosition(containerRef.current.scrollLeft);
		}
	};

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;

		track.addEventListener('mousemove', handleTrackMouseMove as any);
		track.addEventListener('mouseenter', handleTrackMouseEnter);
		track.addEventListener('mouseleave', handleTrackMouseLeave);
		track.addEventListener('wheel', handleTrackWheel as any, { passive: false });

		return () => {
			track.removeEventListener('mousemove', handleTrackMouseMove as any);
			track.removeEventListener('mouseenter', handleTrackMouseEnter);
			track.removeEventListener('mouseleave', handleTrackMouseLeave);
			track.removeEventListener('wheel', handleTrackWheel as any);
		};
	}, [items.length]);

	// Calculate glow position based on mouse position
	const getGlowStyle = () => {
		if (!isHoveringTrack) {
			return { opacity: 0 };
		}

		const glowWidth = 400;
		const glowHeight = THUMBNAIL_SIZE + 40;

		return {
			opacity: 0.6,
			left: `${mouseX}px`,
			top: '50%',
			transform: 'translate(-50%, -50%)',
			width: `${glowWidth}px`,
			height: `${glowHeight}px`
		};
	};

	return (
		<div className="thumbnail-preview" ref={trackRef}>
			{/* Glow indicator */}
			<div className="thumbnail-preview__glow" style={getGlowStyle()} />

			{/* Edge fade masks */}
			<div className="thumbnail-preview__fade thumbnail-preview__fade--left" />
			<div className="thumbnail-preview__fade thumbnail-preview__fade--right" />

			{/* Scrollable container */}
			<div
				className="thumbnail-preview__container"
				ref={containerRef}
				onScroll={handleTrackScroll}>
				<div className="thumbnail-preview__track">
					{items.map((item, index) => {
						const isVisible = visibleItems.has(index);

						return (
							<div
								key={item.id}
								className={`thumbnail-preview__item ${hoveredItemIndex === index ? 'thumbnail-preview__item--active' : ''
									}`}
								style={{
									width: `${THUMBNAIL_SIZE}px`,
									height: `${THUMBNAIL_SIZE}px`,
									opacity: isVisible ? 1 : 0,
									transform: isVisible
										? 'translateY(0) scale(1)'
										: 'translateY(20px) scale(0.8)',
									transition: 'opacity 0.3s ease, transform 0.3s ease'
								}}
								onClick={() => handleThumbnailClick(item)}
								onMouseEnter={() => handleThumbnailHover(index)}
								onMouseLeave={handleThumbnailLeave}>
								<div className="thumbnail-preview__item-inner">
									{item.thumbnail ? (
										<img
											src={item.thumbnail}
											alt={item.name}
											className="thumbnail-preview__item-image"
										/>
									) : (
										<div className="thumbnail-preview__item-placeholder">
											<span>
												{item.name
													.split(' ')
													.map((word) => word.charAt(0))
													.join('')}
											</span>
										</div>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
