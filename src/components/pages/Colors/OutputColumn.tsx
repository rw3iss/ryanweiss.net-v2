import { FunctionalComponent } from 'preact';
import { useCallback, useEffect, useMemo, useState } from 'preact/hooks';
import seedrandom from 'seedrandom';
import { parseColorsWithPosition, replaceColors } from './utils';

interface OutputColumnProps {
    colors: { color: string, modifiedColor: string }[];
    inputText: string;
    importedFileName?: string;
}

export const OutputColumn: FunctionalComponent<OutputColumnProps> = ({ colors, inputText, importedFileName }) => {
    const [activeTab, setActiveTab] = useState('swatches');
    const [outputTextModified, setOutputTextModified] = useState('');
    const [colorsWithPosition, setColorsWithPosition] = useState<ReturnType<typeof parseColorsWithPosition>>([]);

    const sessionSeed = useMemo(() => Math.random().toString(36).substring(7), []);
    const rng = useMemo(() => seedrandom(sessionSeed), [sessionSeed]);

    const generateRandomWords = useMemo(() => {
        const words = ["Hello", "World", "Color", "Sample", "Text", "Display", "View", "Edit", "Change", "Apply"];
        return Array.from({ length: colors.length }, () => words[Math.floor(rng() * words.length)]);
    }, [colors.length, rng]);

    useEffect(() => {
        const parsedColors = parseColorsWithPosition(inputText);
        setColorsWithPosition(parsedColors);
        const updatedColorsWithPosition = parsedColors.map(parsed => {
            const match = colors.find(c => c.color === parsed.color);
            return match ? { ...parsed, modifiedColor: match.modifiedColor } : parsed;
        });
        const modifiedText = replaceColors(inputText, updatedColorsWithPosition);
        setOutputTextModified(modifiedText);
    }, [colors, inputText]);

    const handleSave = useCallback(() => {
        const blob = new Blob([outputTextModified], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);

        let fileName = 'output.txt';
        if (importedFileName) {
            fileName = importedFileName.replace(/\.[^/.]+$/, "") + '_modified.txt';
        }

        link.download = fileName;
        link.click();
        URL.revokeObjectURL(link.href);
    }, [outputTextModified, importedFileName]);

    return (
        <div className="column OutputColumn">
            <div className="tab-bar">
                <button
                    className={activeTab === 'swatches' ? 'active' : ''}
                    onClick={() => setActiveTab('swatches')}
                >
                    Swatches
                </button>
                <button
                    className={activeTab === 'text' ? 'active' : ''}
                    onClick={() => setActiveTab('text')}
                >
                    Text
                </button>
                <button
                    className={activeTab === 'original' ? 'active' : ''}
                    onClick={() => setActiveTab('original')}
                >
                    Original
                </button>
                <button
                    className={activeTab === 'output' ? 'active' : ''}
                    onClick={() => setActiveTab('output')}
                    style={{ marginLeft: 'auto' }}
                >
                    Output
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 'swatches' ? (
                    <div className="color-swatches color-list" style={{ display: 'flex' }}>
                        {colors.map((color, index) => (
                            <div key={index} className="color-swatch" style={{ backgroundColor: color.modifiedColor, marginBottom: 0 }}></div>
                        ))}
                    </div>
                ) : activeTab === 'text' || activeTab === 'original' ? (
                    <div className="text-preview" style={{ flex: 1, overflowY: 'auto' }}>
                        {colors.map((color, index) => (
                            <div key={index} style={{
                                color: activeTab === 'original' ? color.color : color.modifiedColor,
                                padding: '5px 0 2px 0'
                            }}>
                                {generateRandomWords[index]}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="output-preview">
                        <textarea
                            value={outputTextModified}
                            readOnly
                            style={{ flex: 1, width: '100%', padding: 'var(--item-padding)' }}
                        />
                    </div>
                )}
            </div>
            <div className="button-bar">
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};