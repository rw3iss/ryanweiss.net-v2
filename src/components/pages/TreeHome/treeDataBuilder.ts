import { portfolioData, PortfolioItem } from '../../../data/portfolioData';

export interface TreeListItem {
    id: string;
    label: string;
    type: 'category' | 'item' | 'custom';
    data?: PortfolioItem;
    children?: TreeListItem[];
    customComponent?: any;
}

export const buildTreeData = (): TreeListItem[] => {
    // Extract all unique tags/categories from portfolio items
    const categoriesMap = new Map<string, PortfolioItem[]>();

    portfolioData.forEach(row => {
        row.items.forEach(item => {
            if (item.tags && item.tags.length > 0) {
                item.tags.forEach(tag => {
                    if (!categoriesMap.has(tag)) {
                        categoriesMap.set(tag, []);
                    }
                    // Avoid duplicates
                    const items = categoriesMap.get(tag)!;
                    if (!items.find(i => i.id === item.id)) {
                        items.push(item);
                    }
                });
            }
        });
    });

    // Convert to tree structure
    const treeData: TreeListItem[] = [];

    // Sort categories alphabetically
    const sortedCategories = Array.from(categoriesMap.keys()).sort();

    sortedCategories.forEach(category => {
        const items = categoriesMap.get(category)!;

        const categoryNode: TreeListItem = {
            id: `category-${category}`,
            label: category,
            type: 'category',
            children: items.map(item => ({
                id: item.id,
                label: item.name,
                type: 'item' as const,
                data: item,
                children: undefined
            }))
        };

        treeData.push(categoryNode);
    });

    return treeData;
};
