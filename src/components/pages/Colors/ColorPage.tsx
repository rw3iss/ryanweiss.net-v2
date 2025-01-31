import { FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';
import { ColorEditColumn } from './ColorEditColumn';
import { InputColumn } from './InputColumn';
import { OutputColumn } from './OutputColumn';

import "./ColorPage.scss";

interface ColorPageProps { }

export const ColorPage: FunctionalComponent<ColorPageProps> = () => {
    const [colors, setColors] = useState<{ color: string, modifiedColor: string }[]>([]);
    const [darkMode, setDarkMode] = useState(false);

    const handleColorsParsed = (parsedColors: { color: string, modifiedColor: string }[]) => {
        console.log(`colors`, parsedColors)
        setColors(parsedColors);
    };

    const handleColorsChanged = (newColors: { color: string, modifiedColor: string }[]) => {
        setColors(newColors);
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
            <ColorEditColumn colors={colors} onColorsChanged={handleColorsChanged} />
            <OutputColumn colors={colors} />
        </div>
    );
};