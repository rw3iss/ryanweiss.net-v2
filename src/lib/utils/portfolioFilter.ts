import { PortfolioItem, portfolioData } from '../../data/portfolioData';

export interface FilterOptions {
    tags?: string[];
    type?: 'fulltime' | 'freelance';
}

/**
 * Filter all portfolio items by tags and optionally by type
 * @param options - Filter options containing tags array and optional type
 * @returns Array of portfolio items that match the filter criteria
 */
export function filterPortfolioItems(options: FilterOptions): PortfolioItem[] {
    const { tags = [], type } = options;

    if (tags.length === 0 && !type) {
        return [];
    }

    // Collect all items from all rows
    const allItems = portfolioData.flatMap((row) => row.items);

    // Filter items
    return allItems.filter((item) => {
        // Check type filter if provided
        if (type && item.type !== type) {
            return false;
        }

        // Check if item has at least one of the selected tags
        if (tags.length > 0) {
            if (!item.tags || item.tags.length === 0) {
                return false;
            }
            return item.tags.some((tag) => tags.includes(tag));
        }

        return true;
    });
}

/**
 * Get all unique tags from all portfolio items
 * @returns Array of all unique tags
 */
export function getAllTags(): string[] {
    const allItems = portfolioData.flatMap((row) => row.items);
    const tagSet = new Set<string>();

    allItems.forEach((item) => {
        if (item.tags) {
            item.tags.forEach((tag) => tagSet.add(tag));
        }
    });

    return Array.from(tagSet).sort();
}
