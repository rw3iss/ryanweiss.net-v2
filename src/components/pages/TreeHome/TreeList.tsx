import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { TreeListItem as TreeListItemType } from './treeDataBuilder';
import './TreeList.scss';

interface TreeListProps {
    items: TreeListItemType[];
    depth?: number;
    onItemSelect?: (item: TreeListItemType, depth: number, itemId: string) => void;
    isClosing?: boolean;
    selectedPath?: string[];
}

export const TreeList = ({
    items,
    depth = 0,
    onItemSelect,
    isClosing = false,
    selectedPath = []
}: TreeListProps) => {
    const [animatedItems, setAnimatedItems] = useState<Set<string>>(new Set());
    const listRef = useRef<HTMLDivElement>(null);

    // Get the selected item ID at this depth
    const selectedItemId = selectedPath[depth] || null;

    // Animate items in sequence when list is shown
    useEffect(() => {
        if (isClosing) return;

        const timeouts: number[] = [];
        items.forEach((item, index) => {
            const timeout = window.setTimeout(() => {
                setAnimatedItems(prev => new Set([...prev, item.id]));
            }, index * 50); // 50ms delay between each item
            timeouts.push(timeout);
        });

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, [items, isClosing]);

    const handleItemClick = (item: TreeListItemType) => {
        if (onItemSelect) {
            onItemSelect(item, depth, item.id);
        }
    };

    return (
        <div
            className={`tree-list ${isClosing ? 'tree-list--closing' : 'tree-list--opening'}`}
            ref={listRef}
            style={{ '--depth': depth } as any}>
            <div className="tree-list__items">
                {items.map(item => {
                    const isAnimated = animatedItems.has(item.id);
                    const isSelected = selectedItemId === item.id;
                    const hasChildren = item.children && item.children.length > 0;

                    return (
                        <div key={item.id} className="tree-list__item-wrapper">
                            <div
                                className={`tree-list__item ${isAnimated ? 'tree-list__item--animated' : ''} ${isSelected ? 'tree-list__item--selected' : ''} ${hasChildren ? 'tree-list__item--has-children' : ''}`}
                                onClick={() => handleItemClick(item)}>
                                <span className="tree-list__item-label">{item.label}</span>
                                {hasChildren && (
                                    <span className="tree-list__item-arrow">›</span>
                                )}
                            </div>

                            {/* Render child list if this item is selected and has children */}
                            {isSelected && hasChildren && (
                                <TreeList
                                    items={item.children!}
                                    depth={depth + 1}
                                    onItemSelect={onItemSelect}
                                    selectedPath={selectedPath}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
