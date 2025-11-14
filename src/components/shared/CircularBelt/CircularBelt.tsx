import { useEffect, useRef, useState } from 'preact/hooks';
import { PortfolioItem } from '../../../data/portfolioData';
import './CircularBelt.scss';

interface CircularBeltProps {
	items: PortfolioItem[];
	label: string;
	onItemClick: (item: PortfolioItem) => void;
	isActive: boolean;
	scrollToItemId?: string | null;
	trackScrollPercent?: number; // Control scroll from external track (0-1)
	infiniteScroll?: boolean; // Enable infinite scrolling (default: false)
	onTagClick?: (tag: string) => void; // Optional handler for tag clicks
}

export const CircularBelt = ({ items, label, onItemClick, isActive, scrollToItemId, trackScrollPercent, infiniteScroll = false, onTagClick }: CircularBeltProps) => {
	const [currentPageIndex, setCurrentPageIndex] = useState(0); // Current centered card
	const [isScrolling, setIsScrolling] = useState(false);
	const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollIntervalRef = useRef<number>();
	const mouseXRef = useRef(0);
	const scrollAccumulatorRef = useRef(0); // Accumulate scroll delta for paging
	const hoverPageIntervalRef = useRef<number>(); // Interval for continuous paging on hover

	// Touch controls
	const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
	const touchVelocityRef = useRef(0);
	const momentumAnimationRef = useRef<number>();
	const lastTouchXRef = useRef(0);
	const lastTouchTimeRef = useRef(0);

	const itemWidth = 400; // Width of each item
	const itemSpacing = 50; // Space between items
	const totalItemWidth = itemWidth + itemSpacing;
	const maxScroll = items.length * totalItemWidth;

	// Calculate scroll position based on current page
	const scrollPosition = currentPageIndex * totalItemWidth;

	useEffect(() => {
		return () => {
			stopScrolling();
			if (momentumAnimationRef.current) {
				cancelAnimationFrame(momentumAnimationRef.current);
			}
			if (hoverPageIntervalRef.current) {
				clearInterval(hoverPageIntervalRef.current);
			}
		};
	}, []);

	// Sync page index with external track control
	useEffect(() => {
		if (trackScrollPercent !== undefined && isActive) {
			// Calculate which item index this percentage represents
			const itemIndex = Math.round(trackScrollPercent * items.length);
			// Clamp to valid range
			const clampedIndex = Math.max(0, Math.min(items.length - 1, itemIndex));
			setCurrentPageIndex(clampedIndex);
		}
	}, [trackScrollPercent, isActive, items.length]);

	// Scroll to specific item when requested (page to that item)
	useEffect(() => {
		if (scrollToItemId && isActive) {
			const itemIndex = items.findIndex((item) => item.id === scrollToItemId);
			if (itemIndex !== -1) {
				setCurrentPageIndex(itemIndex);
			}
		}
	}, [scrollToItemId, isActive, items]);

	const startScrolling = (speed: number) => {
		if (scrollIntervalRef.current) return;

		setIsScrolling(true);
		scrollIntervalRef.current = window.setInterval(() => {
			setScrollPosition((prev) => {
				const newPos = prev + speed;
				if (infiniteScroll) {
					// Wrap around infinitely
					if (newPos < 0) return maxScroll + newPos;
					if (newPos > maxScroll) return newPos - maxScroll;
					return newPos;
				} else {
					// Stop at boundaries
					return Math.max(0, Math.min(maxScroll, newPos));
				}
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

	// Touch event handlers for mobile
	const handleTouchStart = (e: TouchEvent) => {
		if (!isActive) return;

		const touch = e.touches[0];
		touchStartRef.current = {
			x: touch.clientX,
			y: touch.clientY,
			time: Date.now()
		};
		lastTouchXRef.current = touch.clientX;
		lastTouchTimeRef.current = Date.now();
		touchVelocityRef.current = 0;

		// Stop any ongoing momentum
		if (momentumAnimationRef.current) {
			cancelAnimationFrame(momentumAnimationRef.current);
			momentumAnimationRef.current = undefined;
		}
		stopScrolling();
	};

	const handleTouchMove = (e: TouchEvent) => {
		if (!isActive || !touchStartRef.current) return;

		const touch = e.touches[0];
		const currentTime = Date.now();
		const deltaX = touch.clientX - lastTouchXRef.current;
		const deltaTime = currentTime - lastTouchTimeRef.current;

		// Prevent default to avoid page scrolling
		const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);
		const deltaXAbs = Math.abs(touch.clientX - touchStartRef.current.x);

		// Only prevent default if horizontal swipe is dominant
		if (deltaXAbs > deltaY) {
			e.preventDefault();
		}

		// Calculate velocity for momentum
		if (deltaTime > 0) {
			touchVelocityRef.current = deltaX / deltaTime;
		}

		// Update scroll position (inverted for natural feel)
		setScrollPosition((prev) => {
			const newPos = prev - deltaX;
			if (infiniteScroll) {
				// Wrap around infinitely
				if (newPos < 0) return maxScroll + newPos;
				if (newPos > maxScroll) return newPos - maxScroll;
				return newPos;
			} else {
				// Stop at boundaries
				return Math.max(0, Math.min(maxScroll, newPos));
			}
		});

		lastTouchXRef.current = touch.clientX;
		lastTouchTimeRef.current = currentTime;
	};

	const handleTouchEnd = (e: TouchEvent) => {
		if (!isActive || !touchStartRef.current) return;

		const touchDuration = Date.now() - touchStartRef.current.time;
		const velocity = touchVelocityRef.current;

		touchStartRef.current = null;

		// Apply momentum if swipe was fast enough
		if (Math.abs(velocity) > 0.5 && touchDuration < 300) {
			applyMomentum(velocity * 1000); // Scale velocity
		}
	};

	const applyMomentum = (initialVelocity: number) => {
		let velocity = initialVelocity;
		const friction = 0.95; // Deceleration factor
		const minVelocity = 0.5; // Stop when velocity is very low

		const animate = () => {
			velocity *= friction;

			if (Math.abs(velocity) < minVelocity) {
				momentumAnimationRef.current = undefined;
				return;
			}

			setScrollPosition((prev) => {
				const newPos = prev - velocity * 0.016; // Assuming 60fps
				if (infiniteScroll) {
					// Wrap around infinitely
					if (newPos < 0) return maxScroll + newPos;
					if (newPos > maxScroll) return newPos - maxScroll;
					return newPos;
				} else {
					// Stop at boundaries
					const clampedPos = Math.max(0, Math.min(maxScroll, newPos));
					// If we hit a boundary, stop the momentum
					if (clampedPos === 0 || clampedPos === maxScroll) {
						if (momentumAnimationRef.current) {
							cancelAnimationFrame(momentumAnimationRef.current);
							momentumAnimationRef.current = undefined;
						}
					}
					return clampedPos;
				}
			});

			momentumAnimationRef.current = requestAnimationFrame(animate);
		};

		animate();
	};

	// Add touch event listeners
	useEffect(() => {
		const container = containerRef.current;
		if (!container || !isActive) return;

		container.addEventListener('touchstart', handleTouchStart, { passive: false });
		container.addEventListener('touchmove', handleTouchMove, { passive: false });
		container.addEventListener('touchend', handleTouchEnd);

		return () => {
			container.removeEventListener('touchstart', handleTouchStart);
			container.removeEventListener('touchmove', handleTouchMove);
			container.removeEventListener('touchend', handleTouchEnd);
		};
	}, [isActive, maxScroll]);

	const calculateItemStyle = (index: number, itemId: string) => {
		const windowWidth = window.innerWidth;
		const centerX = windowWidth / 2;

		// Calculate centering offset so first card centers when scrolled all the way left
		const centeringOffset = centerX - itemWidth / 2;

		// Calculate position with centering offset
		let basePosition = index * totalItemWidth - scrollPosition + centeringOffset;

		if (infiniteScroll) {
			// Wrap items for infinite scroll
			while (basePosition < -totalItemWidth * 2) {
				basePosition += maxScroll;
			}
			while (basePosition > windowWidth + totalItemWidth * 2) {
				basePosition -= maxScroll;
			}
		}

		const itemCenterX = basePosition + itemWidth / 2;
		const distanceFromCenter = itemCenterX - centerX;
		const normalizedDistance = distanceFromCenter / (windowWidth / 2);

		// Check if this item is being hovered
		const isHovered = hoveredItemId === itemId;

		// Check if this is the centered/active card
		const isCentered = Math.abs(normalizedDistance) < 0.1; // Consider centered if very close to center

		// Calculate skew and scale based on distance from center
		const skewY = isCentered || isHovered ? 0 : normalizedDistance * 15;
		const rotateY = isCentered || isHovered ? 0 : normalizedDistance * -20;

		// Scale: Centered card is MUCH larger (1.8x), others scale down based on distance
		let scale: number;
		if (isCentered) {
			scale = 1.8; // Centered card is 1.8x larger
		} else if (isHovered) {
			scale = 1.05;
		} else {
			scale = 0.7 - Math.abs(normalizedDistance) * 0.3; // Other cards are smaller
		}

		// Fade out cards that are far from center more aggressively
		const opacity = isCentered || isHovered ? 1 : Math.max(0, 1 - Math.abs(normalizedDistance) * 1.2);

		// Calculate z-index so centered and hovered items are on top
		const zIndex = isCentered ? 300 : isHovered ? 200 : Math.max(10, Math.round(100 - Math.abs(distanceFromCenter)));

		// Move centered card up so its bottom aligns with the belt bottom
		// Card height is 500px, we want to move it up by about 100px to align bottom
		const translateY = isCentered ? -100 : 0;

		return {
			transform: `translateX(${basePosition}px) translateY(${translateY}px) scale(${Math.max(scale, 0.4)}) skewY(${skewY}deg) perspective(1000px) rotateY(${rotateY}deg)`,
			opacity,
			zIndex,
			transformStyle: 'preserve-3d' as const,
			// Quick, snappy transitions for paging effect
			transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
		};
	};

	// Create multiple copies of items for seamless infinite scroll (or single copy if not infinite)
	const renderItems = () => {
		const rendered = [];
		const copies = infiniteScroll ? 3 : 1; // Render 3 copies for infinite scroll, 1 for normal

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
						onWheel={(e) => {
							if (isActive) {
								e.preventDefault();
								e.stopPropagation();
								// Convert React event to native event for handleWheel
								handleWheel(e.nativeEvent);
							}
						}}
						onClick={() => onItemClick(item)}>
						<div className="circular-belt__item-inner">
							{/* Logo floats at top if it exists */}
							{item.thumbnail && (
								<div className="circular-belt__item-logo">
									<img
										src={item.thumbnail}
										alt={`${item.name} logo`}
										className="circular-belt__item-logo-img"
									/>
								</div>
							)}

							<div className="circular-belt__item-image">
								{item.image ? (
									<img
										src={item.image}
										alt={item.name}
										className="circular-belt__item-image-img"
									/>
								) : (
									<div className="circular-belt__item-image-placeholder">
										<span>{item.name.charAt(0)}</span>
									</div>
								)}
							</div>
							<div className="circular-belt__item-content">
								<h3 className="circular-belt__item-title">{item.name}</h3>
								<p className="circular-belt__item-description">{item.description}</p>
								{item.tags && item.tags.length > 0 && (
									<div className="circular-belt__item-tags">
										{item.tags.map((tag) => (
											<button
												key={tag}
												className="circular-belt__item-tag"
												onClick={(e) => {
													e.stopPropagation();
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
						</div>
					</div>
				);
			});
		}

		return rendered;
	};

	// Handle wheel events for paging
	const handleWheel = (e: WheelEvent) => {
		if (!isActive || isScrolling) return;

		// Accumulate scroll delta
		scrollAccumulatorRef.current += e.deltaX + e.deltaY;

		// Page when accumulated scroll exceeds threshold
		const threshold = 50;
		if (Math.abs(scrollAccumulatorRef.current) > threshold) {
			const direction = scrollAccumulatorRef.current > 0 ? 1 : -1;
			const newIndex = currentPageIndex + direction;

			// Clamp to valid range
			if (newIndex >= 0 && newIndex < items.length) {
				setIsScrolling(true);
				setCurrentPageIndex(newIndex);
				scrollAccumulatorRef.current = 0;

				// Reset scrolling flag after animation
				setTimeout(() => setIsScrolling(false), 250);
			} else {
				scrollAccumulatorRef.current = 0;
			}
		}
	};

	// Add wheel event listener to backdrop - prevents events from bubbling when cards animate
	const backdropRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const backdrop = backdropRef.current;
		if (!backdrop || !isActive) return;

		const wheelHandler = (e: WheelEvent) => {
			// Always prevent default when over the belt backdrop
			e.preventDefault();
			e.stopPropagation();
			handleWheel(e);
		};

		backdrop.addEventListener('wheel', wheelHandler, { passive: false });

		return () => {
			backdrop.removeEventListener('wheel', wheelHandler);
		};
	}, [isActive, currentPageIndex, isScrolling, items.length]);

	return (
		<div
			className={`circular-belt ${isActive ? 'circular-belt--active' : ''}`}
			ref={containerRef}
			data-label={label}>
			{/* Backdrop for stable wheel event catching */}
			<div className="circular-belt__wheel-backdrop" ref={backdropRef} />

			<div className="circular-belt__items">{renderItems()}</div>

			{/* Hover zones for continuous paging navigation */}
			<div
				className="circular-belt__scroll-zone circular-belt__scroll-zone--left"
				onMouseEnter={() => {
					if (!isActive) return;
					// Clear any existing interval
					if (hoverPageIntervalRef.current) {
						clearInterval(hoverPageIntervalRef.current);
					}
					// Page immediately
					setCurrentPageIndex(prev => Math.max(0, prev - 1));
					// Then page every 500ms while hovering
					hoverPageIntervalRef.current = window.setInterval(() => {
						setCurrentPageIndex(prev => {
							const newIndex = Math.max(0, prev - 1);
							if (newIndex === prev) {
								// Hit the boundary, stop interval
								if (hoverPageIntervalRef.current) {
									clearInterval(hoverPageIntervalRef.current);
								}
							}
							return newIndex;
						});
					}, 500);
				}}
				onMouseLeave={() => {
					if (hoverPageIntervalRef.current) {
						clearInterval(hoverPageIntervalRef.current);
					}
				}}
			/>
			<div
				className="circular-belt__scroll-zone circular-belt__scroll-zone--right"
				onMouseEnter={() => {
					if (!isActive) return;
					// Clear any existing interval
					if (hoverPageIntervalRef.current) {
						clearInterval(hoverPageIntervalRef.current);
					}
					// Page immediately
					setCurrentPageIndex(prev => Math.min(items.length - 1, prev + 1));
					// Then page every 500ms while hovering
					hoverPageIntervalRef.current = window.setInterval(() => {
						setCurrentPageIndex(prev => {
							const newIndex = Math.min(items.length - 1, prev + 1);
							if (newIndex === prev) {
								// Hit the boundary, stop interval
								if (hoverPageIntervalRef.current) {
									clearInterval(hoverPageIntervalRef.current);
								}
							}
							return newIndex;
						});
					}, 500);
				}}
				onMouseLeave={() => {
					if (hoverPageIntervalRef.current) {
						clearInterval(hoverPageIntervalRef.current);
					}
				}}
			/>

			<div className="circular-belt__edge-fade circular-belt__edge-fade--left" />
			<div className="circular-belt__edge-fade circular-belt__edge-fade--right" />
		</div>
	);
};
