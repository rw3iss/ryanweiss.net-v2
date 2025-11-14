import { useEffect, useRef, useState } from 'preact/hooks';
import { PortfolioItem, PortfolioRow } from '../../../data/portfolioData';
import { CircularBelt } from '../CircularBelt/CircularBelt';
import { SectionBackground } from '../SectionBackground/SectionBackground';
import { ThumbnailPreview } from '../ThumbnailPreview/ThumbnailPreview';
import { TagSearchView } from '../TagSearchView/TagSearchView';
import { filterPortfolioItems } from '../../../lib/utils/portfolioFilter';
import './BeltNavigator.scss';

interface BeltNavigatorProps {
	rows: PortfolioRow[];
	onItemClick: (item: PortfolioItem) => void;
	onRowChange: (index: number) => void;
	activeRowIndex: number;
	selectedTags: string[];
	onTagsChange: (tags: string[]) => void;
	onCloseDetailView?: () => void;
}

const SECTION_THEMES: Array<'space' | 'nebula' | 'ocean' | 'cosmic'> = ['space', 'nebula', 'ocean', 'cosmic'];

export const BeltNavigator = ({ rows, onItemClick, onRowChange, activeRowIndex, selectedTags, onTagsChange, onCloseDetailView }: BeltNavigatorProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [currentSection, setCurrentSection] = useState(0);
	const isScrollingRef = useRef(false);
	const scrollTimeoutRef = useRef<number>();
	const [viewedSections, setViewedSections] = useState<Set<number>>(new Set()); // Track viewed sections
	const [scrollToItemId, setScrollToItemId] = useState<string | null>(null);
	const [beltScrollPercents, setBeltScrollPercents] = useState<Map<number, number>>(new Map()); // Track scroll position per section
	const [isLoadingSearch, setIsLoadingSearch] = useState(false);
	const [searchResults, setSearchResults] = useState<PortfolioItem[]>([]);
	const [isFadingOut, setIsFadingOut] = useState(false);
	const previousResultsRef = useRef<PortfolioItem[]>([]);

	// Create dynamic search row
	const searchRow: PortfolioRow | null = selectedTags.length > 0 ? {
		key: 'search',
		label: 'Search Results',
		order: rows.length,
		items: searchResults
	} : null;

	// Combine regular rows with search row
	const allRows = searchRow ? [...rows, searchRow] : rows;

	// Handle scroll events with debouncing
	const handleScroll = (event: WheelEvent) => {
		event.preventDefault();

		if (isScrollingRef.current) return;

		const delta = event.deltaY;
		const direction = delta > 0 ? 1 : -1;
		const newSection = currentSection + direction;

		// Allow scrolling to search section (rows.length)
		if (newSection >= 0 && newSection <= rows.length) {
			isScrollingRef.current = true;
			setCurrentSection(newSection);
			onRowChange(newSection);

			// Scroll to section
			const container = containerRef.current;
			if (container) {
				const targetScroll = newSection * window.innerHeight;
				container.scrollTo({
					top: targetScroll,
					behavior: 'smooth'
				});
			}

			// Reset scrolling flag after animation
			setTimeout(() => {
				isScrollingRef.current = false;
			}, 600); // Fast animation - 600ms
		}
	};

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		container.addEventListener('wheel', handleScroll, { passive: false });

		return () => {
			container.removeEventListener('wheel', handleScroll);
		};
	}, [currentSection, rows.length]);

	// Sync with external activeRowIndex changes (from nav clicks)
	useEffect(() => {
		if (activeRowIndex !== currentSection) {
			setCurrentSection(activeRowIndex);
			const container = containerRef.current;
			if (container) {
				const targetScroll = activeRowIndex * window.innerHeight;
				container.scrollTo({
					top: targetScroll,
					behavior: 'smooth'
				});
			}
		}
	}, [activeRowIndex]);

	// Keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isScrollingRef.current) return;

			if (e.key === 'ArrowDown' || e.key === 'PageDown') {
				e.preventDefault();
				// Allow navigating to search section (rows.length)
				const newSection = Math.min(currentSection + 1, rows.length);
				if (newSection !== currentSection) {
					setCurrentSection(newSection);
					onRowChange(newSection);
					isScrollingRef.current = true;
					setTimeout(() => (isScrollingRef.current = false), 600);
				}
			} else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
				e.preventDefault();
				const newSection = Math.max(currentSection - 1, 0);
				if (newSection !== currentSection) {
					setCurrentSection(newSection);
					onRowChange(newSection);
					isScrollingRef.current = true;
					setTimeout(() => (isScrollingRef.current = false), 600);
				}
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [currentSection, rows.length]);

	// Mark section as viewed AFTER animations have time to complete
	useEffect(() => {
		// Calculate animation duration: estimate 20 items max at 150ms each = 3000ms
		// Add buffer of 500ms to be safe
		const animationDuration = 1500;

		// Only delay if section hasn't been viewed yet
		if (!viewedSections.has(currentSection)) {
			const timeout = setTimeout(() => {
				setViewedSections((prev) => new Set([...prev, currentSection]));
			}, animationDuration);

			return () => clearTimeout(timeout);
		}
	}, [currentSection]);

	// Handler for thumbnail click - scroll to item in carousel
	const handleScrollToItem = (itemId: string) => {
		setScrollToItemId(itemId);
		// Reset after a delay to allow re-triggering
		setTimeout(() => setScrollToItemId(null), 700);
	};

	// Handler for track scroll - update belt position
	const handleTrackScroll = (scrollPercent: number) => {
		setBeltScrollPercents((prev) => {
			const newMap = new Map(prev);
			newMap.set(currentSection, scrollPercent);
			return newMap;
		});
	};

	// Handle tag search
	const handleTagSearch = (tags: string[]) => {
		// Close any open detail views
		if (onCloseDetailView) {
			onCloseDetailView();
		}

		// Show loading state
		setIsLoadingSearch(true);

		// Simulate async search (you can make this actually async if needed)
		setTimeout(() => {
			const filtered = filterPortfolioItems({ tags });
			setSearchResults(filtered);
			onTagsChange(tags);
			setIsLoadingSearch(false);

			// Scroll to search section (always at rows.length)
			const searchIndex = rows.length;
			setCurrentSection(searchIndex);
			onRowChange(searchIndex);

			const container = containerRef.current;
			if (container) {
				const targetScroll = searchIndex * window.innerHeight;
				container.scrollTo({
					top: targetScroll,
					behavior: 'smooth'
				});
			}
		}, 300);
	};

	// Effect to filter items when tags change
	useEffect(() => {
		if (selectedTags.length > 0) {
			const isOnSearchSection = currentSection === rows.length;

			// Only fade out if we're already on the search section with previous results
			if (previousResultsRef.current.length > 0 && isOnSearchSection) {
				setIsFadingOut(true);

				// Wait for fade out animation to complete
				setTimeout(() => {
					const filtered = filterPortfolioItems({ tags: selectedTags });
					setSearchResults(filtered);
					previousResultsRef.current = filtered;
					setIsFadingOut(false);
				}, 300); // Fade out duration
			} else {
				// If not on search section or no previous results, update immediately
				const filtered = filterPortfolioItems({ tags: selectedTags });
				setSearchResults(filtered);
				previousResultsRef.current = filtered;
				setIsFadingOut(false);
			}
		} else {
			// No tags selected, clear results
			previousResultsRef.current = [];
			setSearchResults([]);
			setIsFadingOut(false);
		}
	}, [selectedTags, currentSection]);

	return (
		<div className="belt-navigator" ref={containerRef}>
			{/* Loading overlay */}
			{isLoadingSearch && (
				<div className="belt-navigator__loading">
					<div className="belt-navigator__loading-spinner"></div>
					<p className="belt-navigator__loading-text">Searching...</p>
				</div>
			)}

			{/* Regular rows */}
			{rows.map((row, index) => (
				<div key={row.key} className="belt-navigator__section" data-index={index}>
					<SectionBackground theme={SECTION_THEMES[index % SECTION_THEMES.length]} />
					<div className="belt-navigator__section-content">
						<CircularBelt
							items={row.items}
							label={row.label}
							onItemClick={onItemClick}
							isActive={index === currentSection}
							scrollToItemId={index === currentSection ? scrollToItemId : null}
							trackScrollPercent={beltScrollPercents.get(index)}
							onTagClick={(tag) => {
								if (onCloseDetailView) {
									onCloseDetailView();
								}
								const newTags = selectedTags.includes(tag) ? selectedTags.filter(t => t !== tag) : [...selectedTags, tag];
								handleTagSearch(newTags);
							}}
						/>
					</div>

					{/* Show thumbnail preview for active section */}
					{index === currentSection && (
						<ThumbnailPreview
							items={row.items}
							onItemClick={onItemClick}
							onScrollToItem={handleScrollToItem}
							hasBeenViewed={viewedSections.has(index)}
							onTrackScroll={handleTrackScroll}
							beltScrollPercent={beltScrollPercents.get(index)}
						/>
					)}
				</div>
			))}

			{/* Search section - always in DOM */}
			<div key="search" className="belt-navigator__section" data-index={rows.length}>
				<SectionBackground theme={SECTION_THEMES[rows.length % SECTION_THEMES.length]} />
				<div className={`belt-navigator__section-content ${isFadingOut ? 'belt-navigator__section-content--fading' : ''}`}>
					{/* Show belt with results if tags are selected and results exist */}
					{selectedTags.length > 0 && searchResults.length > 0 && (
						<CircularBelt
							items={searchResults}
							label="Search Results"
							onItemClick={onItemClick}
							isActive={currentSection === rows.length}
							scrollToItemId={currentSection === rows.length ? scrollToItemId : null}
							trackScrollPercent={beltScrollPercents.get(rows.length)}
							onTagClick={(tag) => {
								if (onCloseDetailView) {
									onCloseDetailView();
								}
								const newTags = selectedTags.includes(tag) ? selectedTags.filter(t => t !== tag) : [...selectedTags, tag];
								handleTagSearch(newTags);
							}}
						/>
					)}
				</div>

				{/* Show thumbnail preview when there are results and section is active */}
				{currentSection === rows.length && searchResults.length > 0 && (
					<ThumbnailPreview
						items={searchResults}
						onItemClick={onItemClick}
						onScrollToItem={handleScrollToItem}
						hasBeenViewed={viewedSections.has(rows.length)}
						onTrackScroll={handleTrackScroll}
						beltScrollPercent={beltScrollPercents.get(rows.length)}
					/>
				)}

				{/* Tag search view - always show when section is active */}
				{currentSection === rows.length && (
					<div className="belt-navigator__search-overlay">
						<TagSearchView
							selectedTags={selectedTags}
							onTagClick={(tag) => {
								// Toggle tag and immediately update search results
								const newTags = selectedTags.includes(tag)
									? selectedTags.filter(t => t !== tag)
									: [...selectedTags, tag];
								onTagsChange(newTags);
							}}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
