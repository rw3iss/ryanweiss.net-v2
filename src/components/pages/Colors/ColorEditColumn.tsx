import { FunctionalComponent } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';
import { ColorEdit } from './ColorEdit'; // Assuming you have a separate ColorEdit.tsx file

interface ColorEditColumnProps {
    colors: { color: string, modifiedColor: string }[];
    onColorsChanged: (newColors: { color: string, modifiedColor: string }[]) => void;
}

export const ColorEditColumn: FunctionalComponent<ColorEditColumnProps> = ({ colors, onColorsChanged }) => {
    const [modifiedColors, setModifiedColors] = useState(colors);

    useEffect(() => {
        setModifiedColors(colors);
    }, [colors]);

    const handleColorChange = useCallback((index: number, newColor: string) => {
        setModifiedColors(prevColors =>
            prevColors.map((c, i) => i === index ? { ...c, modifiedColor: newColor } : c)
        );
    }, []);

    const handleApply = useCallback(() => {
        onColorsChanged(modifiedColors);
    }, [modifiedColors, onColorsChanged]);

    const hideOtherPickers = useCallback(() => {
        document.querySelectorAll('.color-picker .popup').forEach(popup => {
            const picker = (popup as any).picker; // VanillaPicker adds this property
            if (picker) picker.destroy();
        });
    }, []);

    return (
        <div className="column ColorEditColumn">
            <div className="color-list">
                {modifiedColors.map((color, index) => (
                    <ColorEdit
                        key={`index#${Math.random()}`}
                        color={color}
                        onChange={(newColor: string) => handleColorChange(index, newColor)}
                        hideOtherPickers={hideOtherPickers}
                    />
                ))}
            </div>
            <div className="button-bar">
                <button onClick={handleApply}>Apply</button>
            </div>
        </div>
    );
};