import { ColorWithID } from 'components/pages/Colors/utils';
import { FunctionalComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { ColorEditColumn } from './ColorEditColumn';
import './ColorPage.scss';
import { InputColumn } from './InputColumn';
import { OutputColumn } from './OutputColumn';

interface ColorPageProps { }

export const ColorPage: FunctionalComponent<ColorPageProps> = () => {
    const [colors, setColors] = useState<ColorWithID[]>([]);
    const [modifiedColors, setModifiedColors] = useState<ColorWithID[]>([]);
    const [tokenizedText, setTokenizedText] = useState('');
    const [config, setConfig] = useState({
        combineSimilar: false,
        colorMode: 'dark',
        backgroundColorLight: '#f4f4f4', // Default light background
        backgroundColorDark: '#123',     // Default dark background
        fontColorLight: '#333',           // Default light text color
        fontColorDark: '#fed',            // Default dark text color
    });

    useEffect(() => {
        const savedConfig = localStorage.getItem('config');
        if (savedConfig) {
            setConfig(JSON.parse(savedConfig));
        }
    }, []);

    const handleColorsParsed = (parsedColors: ColorWithID[], text: string) => {
        setColors(parsedColors);
        setModifiedColors(parsedColors);
        setTokenizedText(text);
    };

    const handleColorsChanged = (newColors: { id: number; color: string; modifiedColor: string }[]) => {
        setModifiedColors(newColors);
    };

    const handleConfigChange = (newConfig: Partial<typeof config>) => {
        setConfig(prev => ({ ...prev, ...newConfig }));
        localStorage.setItem('config', JSON.stringify({ ...config, ...newConfig }));
    };

    return (
        <div
            className={`ColorPage ${config.colorMode === 'dark' ? 'dark-mode' : ''}`}
            style={{
                backgroundColor: config.colorMode == 'dark' ? config.backgroundColorDark : config.backgroundColorLight,
                color: config.colorMode == 'dark' ? config.fontColorDark : config.fontColorLight
            }}
        >
            <InputColumn
                onColorsParsed={handleColorsParsed}
                config={config}
                onConfigChange={handleConfigChange}
            />
            <ColorEditColumn colors={modifiedColors} onColorsChanged={handleColorsChanged} />
            <OutputColumn colors={modifiedColors} tokenizedText={tokenizedText} />
        </div>
    );
};