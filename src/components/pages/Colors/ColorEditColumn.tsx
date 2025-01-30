import { FunctionalComponent } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';
import ColorEdit from './ColorEdit';

interface ColorEditColumnProps {
    colors: { color: string, modifiedColor: string }[];
    onColorsChanged: (newColors: { color: string, modifiedColor: string }[]) => void;
}

const ColorEditColumn: FunctionalComponent<ColorEditColumnProps> = ({ colors, onColorsChanged }) => {
    const [modifiedColors, setModifiedColors] = useState(colors);

    useEffect(() => {
        // Reset modifiedColors to match incoming colors
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

    return (
        <div className="column ColorEditColumn">
            {modifiedColors.map((color, index) => (
                <ColorEdit
                    key={index}
                    color={color}
                    onChange={(newColor: string) => handleColorChange(index, newColor)}
                />
            ))}
            <div className="button-bar">
                <button onClick={handleApply}>Apply</button>
            </div>
        </div>
    );
};

export default ColorEditColumn;