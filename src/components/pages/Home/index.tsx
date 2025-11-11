import { useState } from 'preact/hooks';
import { MysticalBackground } from '../../shared/MysticalBackground/MysticalBackground';
import { BeltNavigator } from '../../shared/BeltNavigator/BeltNavigator';
import { ItemDetailView } from '../../shared/ItemDetailView/ItemDetailView';
import { portfolioData, PortfolioItem } from '../../../data/portfolioData';
import './style.scss';

const HomePage = () => {
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
    const [activeRowIndex, setActiveRowIndex] = useState(0);

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

    return (
        <div className="homepage">
            <MysticalBackground />

            {/* Section navigation in upper left */}
            <div className="homepage__navigation">
                <div className="homepage__section-title">{sortedPortfolioData[activeRowIndex].label}</div>
                <div className="homepage__section-links">
                    {sortedPortfolioData.map((row, index) => (
                        <button
                            key={row.key}
                            className={`homepage__section-link ${
                                index === activeRowIndex ? 'homepage__section-link--active' : ''
                            }`}
                            onClick={() => handleRowChange(index)}>
                            {row.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="homepage__content">
                <BeltNavigator
                    rows={sortedPortfolioData}
                    onItemClick={handleItemClick}
                    onRowChange={handleRowChange}
                    activeRowIndex={activeRowIndex}
                />
            </div>

            <ItemDetailView item={selectedItem} onClose={handleCloseDetail} />
        </div>
    );
};

export default HomePage;
