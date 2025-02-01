import { FunctionalComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { ColorEditColumn } from './ColorEditColumn';
import './ColorPage.scss';
import { InputColumn } from './InputColumn';
import { OutputColumn } from './OutputColumn';

interface ColorPageProps { }

export const ColorPage: FunctionalComponent<ColorPageProps> = () => {
    const [colors, setColors] = useState<{ id: number; color: string; modifiedColor: string }[]>([]);
    const [modifiedColors, setModifiedColors] = useState<{ id: number; color: string; modifiedColor: string }[]>([]);
    const [tokenizedText, setTokenizedText] = useState('');
    const [config, setConfig] = useState({
        combineSimilar: false,
        colorMode: 'dark',
        backgroundColor: '#123',
        fontColor: '#fed'
    });

    useEffect(() => {
        const savedConfig = localStorage.getItem('config');
        if (savedConfig) {
            setConfig(JSON.parse(savedConfig));
        }
    }, []);

    const handleColorsParsed = (parsedColors: { id: number; color: string; modifiedColor: string }[], text: string) => {
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
                backgroundColor: config.backgroundColor,
                color: config.fontColor
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