import { FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';
import { ColorEditColumn } from './ColorEditColumn';
import './ColorPage.scss';
import { InputColumn } from './InputColumn';
import { OutputColumn } from './OutputColumn';

interface ColorPageProps { }

export const ColorPage: FunctionalComponent<ColorPageProps> = () => {
    const [colors, setColors] = useState<{ color: string, modifiedColor: string }[]>([]);
    const [modifiedColors, setModifiedColors] = useState<{ color: string, modifiedColor: string }[]>([]);
    const [darkMode, setDarkMode] = useState(true);
    const [inputText, setInputText] = useState('');

    const handleColorsParsed = (parsedColors: { color: string, modifiedColor: string }[], text: string) => {
        setColors(parsedColors);
        setModifiedColors(parsedColors);
        setInputText(text);
    };

    const handleColorsChanged = (newColors: { color: string, modifiedColor: string }[]) => {
        setModifiedColors(newColors);
    };

    const handleDarkModeChange = (isDarkMode: boolean) => {
        setDarkMode(isDarkMode);
    };

    return (
        <div className={`ColorPage ${darkMode ? 'dark-mode' : ''}`}>
            <InputColumn
                onColorsParsed={handleColorsParsed}
                onDarkModeChange={handleDarkModeChange}
            />
            <ColorEditColumn colors={modifiedColors} onColorsChanged={handleColorsChanged} />
            <OutputColumn colors={modifiedColors} inputText={inputText} />
        </div>
    );
};