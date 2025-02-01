import { h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';
import { InputColumn } from './InputColumn';
import { ColorEditColumn } from './ColorEditColumn';
import { OutputColumn } from './OutputColumn';
import './ColorPage.scss';

interface ColorPageProps { }

export const ColorPage: FunctionalComponent<ColorPageProps> = () => {
    const [colors, setColors] = useState<{ id: number; color: string; modifiedColor: string }[]>([]);
    const [modifiedColors, setModifiedColors] = useState<{ id: number; color: string; modifiedColor: string }[]>([]);
    const [darkMode, setDarkMode] = useState(true);
    const [tokenizedText, setTokenizedText] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('#f4f4f4');

    const handleColorsParsed = (parsedColors: { id: number; color: string; modifiedColor: string }[], text: string) => {
        setColors(parsedColors);
        setModifiedColors(parsedColors);
        setTokenizedText(text);
    };

    const handleColorsChanged = (newColors: { id: number; color: string; modifiedColor: string }[]) => {
        setModifiedColors(newColors);
    };

    const handleDarkModeChange = (isDarkMode: boolean) => {
        setDarkMode(isDarkMode);
    };

    const handleBackgroundColorChange = (color: string) => {
        setBackgroundColor(color);
        // Here you might want to update the CSS variable or apply the color change to the DOM
        document.documentElement.style.setProperty('--background-color', color);
    };

    return (
        <div
            className={`ColorPage ${darkMode ? 'dark-mode' : ''}`}
            style={{ backgroundColor: backgroundColor }} // Inline style for dynamic background color
        >
            <InputColumn
                onColorsParsed={handleColorsParsed}
                onDarkModeChange={handleDarkModeChange}
                onBackgroundColorChange={handleBackgroundColorChange}
            />
            <ColorEditColumn colors={modifiedColors} onColorsChanged={handleColorsChanged} />
            <OutputColumn colors={modifiedColors} tokenizedText={tokenizedText} />
        </div>
    );
};