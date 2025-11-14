import { useState } from 'preact/hooks';
import { portfolioData, PortfolioItem } from '../../../data/portfolioData';
import { BeltNavigator } from '../../shared/BeltNavigator/BeltNavigator';
import { ItemDetailView } from '../../shared/ItemDetailView/ItemDetailView';
import './style.scss';

const HomePage = () => {
	const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
	const [activeRowIndex, setActiveRowIndex] = useState(0);
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	// Sort portfolio data by order field to ensure correct display order
	const sortedPortfolioData = [...portfolioData].sort((a, b) => a.order - b.order);

	const handleItemClick = (item: PortfolioItem) => {
		setSelectedItem(item);
	};

	const handleCloseDetail = () => {
		setSelectedItem(null);
	};

	const handleRowChange = (index: number) => {
		setActiveRowIndex(index);
	};

	const handleTagsChange = (tags: string[]) => {
		setSelectedTags(tags);
	};

	const handleTagClick = (tag: string) => {
		// Close detail view
		setSelectedItem(null);

		// Toggle tag selection immediately
		const newTags = selectedTags.includes(tag)
			? selectedTags.filter(t => t !== tag)
			: [...selectedTags, tag];

		setSelectedTags(newTags);

		// Auto-navigate to SEARCH section if not already there
		if (activeRowIndex !== sortedPortfolioData.length) {
			handleRowChange(sortedPortfolioData.length);
		}
		// If already on search section, results will update automatically via useEffect in BeltNavigator
	};

	const handleRemoveTag = (tag: string) => {
		setSelectedTags(prev => prev.filter(t => t !== tag));
	};

	return (
		<div className="homepage">
			{/* Section navigation in upper left */}
			<div className="homepage__navigation">
				<div className="homepage__name">Ryan Weiss</div>
				<div className="homepage__section-links">
					{sortedPortfolioData.map((row, index) => (
						<button
							key={row.key}
							className={`homepage__section-link ${index === activeRowIndex ? 'homepage__section-link--active' : ''}`}
							onClick={() => handleRowChange(index)}>
							{row.label}
						</button>
					))}
					{/* SEARCH menu item - always visible */}
					<div className="homepage__search-section">
						<button
							className={`homepage__section-link ${activeRowIndex === sortedPortfolioData.length ? 'homepage__section-link--active' : ''}`}
							onClick={() => handleRowChange(sortedPortfolioData.length)}>
							SEARCH
						</button>
						{selectedTags.length > 0 && (
							<div className="homepage__selected-tags">
								{selectedTags.map(tag => (
									<span key={tag} className="homepage__tag">
										{tag}
										<button
											className="homepage__tag-remove"
											onClick={(e) => {
												e.stopPropagation();
												handleRemoveTag(tag);
											}}
											aria-label={`Remove ${tag}`}>
											×
										</button>
									</span>
								))}
							</div>
						)}
					</div>
				</div>
				<div className="homepage__section-title">
					{activeRowIndex < sortedPortfolioData.length
						? sortedPortfolioData[activeRowIndex].label
						: 'Search Results'}
				</div>
			</div>

			<div className="homepage__content">
				<BeltNavigator
					rows={sortedPortfolioData}
					onItemClick={handleItemClick}
					onRowChange={handleRowChange}
					activeRowIndex={activeRowIndex}
					selectedTags={selectedTags}
					onTagsChange={handleTagsChange}
					onCloseDetailView={handleCloseDetail}
				/>
			</div>

			<ItemDetailView
				item={selectedItem}
				onClose={handleCloseDetail}
				onTagClick={handleTagClick}
			/>
		</div>
	);
};

export default HomePage;
