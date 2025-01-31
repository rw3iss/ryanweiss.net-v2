import { FunctionalComponent } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';
import { ColorEdit } from './ColorEdit';

interface ColorEditColumnProps {
    colors: { color: string, modifiedColor: string }[];
    onColorsChanged: (newColors: { color: string, modifiedColor: string }[]) => void;
}

export const ColorEditColumn: FunctionalComponent<ColorEditColumnProps> = ({ colors, onColorsChanged }) => {
    const [modifiedColors, setModifiedColors] = useState(colors);

    useEffect(() => {
        console.log(`colors change.`)
        setModifiedColors([...colors]);
    }, [colors]);

    const handleColorChange = useCallback((index: number, newColor: string) => {
        setModifiedColors(prevColors =>
            prevColors.map((c, i) => i === index ? { ...c, modifiedColor: newColor } : c)
        );
    }, []);

    const hideOtherPickers = useCallback(() => {
        // Hide all pickers by destroying them, they'll be recreated on next show
        document.querySelectorAll('.color-picker .popup').forEach(popup => {
            const picker = (popup as any).picker; // VanillaPicker adds this property
            if (picker) picker.destroy();
        });
    }, []);

    const handleApply = useCallback(() => {
        onColorsChanged(modifiedColors);
    }, [modifiedColors, onColorsChanged]);

    return (
        <div className="column ColorEditColumn">
            {modifiedColors.map((color, index) => (
                <ColorEdit
                    key={index}
                    color={color}
                    onChange={(newColor: string) => handleColorChange(index, newColor)}
                    hideOtherPickers={hideOtherPickers}
                />
            ))}
            <div className="button-bar">
                <button onClick={handleApply}>Apply</button>
            </div>
        </div>
    );
};