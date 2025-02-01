import { h, FunctionalComponent } from 'preact';
import { useCallback } from 'preact/hooks';
import { ColorEdit } from './ColorEdit';

interface ColorEditColumnProps {
    colors: { id: number; color: string; modifiedColor: string }[];
    onColorsChanged: (newColors: { id: number; color: string; modifiedColor: string }[]) => void;
}

export const ColorEditColumn: FunctionalComponent<ColorEditColumnProps> = ({ colors, onColorsChanged }) => {
    const handleColorChange = useCallback((id: number, newColor: string) => {
        const newColors = colors.map(c =>
            c.id === id ? { ...c, modifiedColor: newColor } : c
        );
        onColorsChanged(newColors);
    }, [colors, onColorsChanged]);

    const hideOtherPickers = useCallback(() => {
        document.querySelectorAll('.color-picker .popup').forEach(popup => {
            const picker = (popup as any).picker; // VanillaPicker adds this property
            if (picker) picker.destroy();
        });
    }, []);

    return (
        <div className="column ColorEditColumn">
            <div className="color-list">
                {colors.map((color) => (
                    <ColorEdit
                        key={color.id}
                        color={color}
                        onChange={(newColor: string) => handleColorChange(color.id, newColor)}
                        hideOtherPickers={hideOtherPickers}
                    />
                ))}
            </div>
        </div>
    );
};