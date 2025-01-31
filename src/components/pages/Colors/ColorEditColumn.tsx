import { FunctionalComponent } from 'preact';
import { useCallback } from 'preact/hooks';
import { ColorEdit } from './ColorEdit';

interface ColorEditColumnProps {
    colors: { color: string, modifiedColor: string }[];
    onColorsChanged: (newColors: { color: string, modifiedColor: string }[]) => void;
}

export const ColorEditColumn: FunctionalComponent<ColorEditColumnProps> = ({ colors, onColorsChanged }) => {
    const handleColorChange = useCallback((index: number, newColor: string) => {
        const newColors = colors.map((c, i) =>
            i === index ? { ...c, modifiedColor: newColor } : c
        );
        onColorsChanged(newColors); // Immediately update colors without an apply button
    }, [colors, onColorsChanged]);

    return (
        <div className="column ColorEditColumn">
            <div className="color-list">
                {colors.map((color, index) => (
                    <ColorEdit
                        key={`index#${Math.random()}`}
                        color={color}
                        onChange={(newColor: string) => handleColorChange(index, newColor)}
                        hideOtherPickers={() => { }} // Empty function since no other pickers to hide
                    />
                ))}
            </div>
        </div>
    );
};