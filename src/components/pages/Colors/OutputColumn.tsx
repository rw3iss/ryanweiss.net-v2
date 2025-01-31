import { FunctionalComponent } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';
import { formatColor } from './utils'; // Import the new function

interface OutputColumnProps {
    colors: { color: string, modifiedColor: string }[];
    inputText: string;
    importedFileName?: string;
}

export const OutputColumn: FunctionalComponent<OutputColumnProps> = ({ colors, inputText, importedFileName }) => {
    const [activeTab, setActiveTab] = useState('swatches');
    const [outputText, setOutputText] = useState('');

    useEffect(() => {
        let modifiedText = inputText;
        colors.forEach(({ color, modifiedColor }) => {
            const formattedColor = formatColor(color, modifiedColor);
            const regex = new RegExp(color, 'g'); // Global replace
            modifiedText = modifiedText.replace(regex, formattedColor);
        });
        setOutputText(modifiedText);
    }, [colors, inputText]);


    const generateRandomWord = () => {
        const words = ["Hello", "World", "Color", "Sample", "Text", "Display", "View", "Edit", "Change", "Apply"];
        return Array.from({ length: colors.length }, () => words[Math.floor(rng() * words.length)]);
    }

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
    }, [outputText, importedFileName]);

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
                    <div className="color-swatches color-list">
                        {colors.map((color, index) => (
                            <div key={index} className="color-swatch" style={{ backgroundColor: color.modifiedColor }}></div>
                        ))}
                    </div>
                ) : activeTab === 'text' ? (
                    <div className="text-preview">
                        {colors.map((color, index) => (
                            <div key={index} style={{ color: color.modifiedColor }}>
                                {generateRandomWord()}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="output-preview">
                        <textarea
                            value={outputText}
                            readOnly
                        />
                        <div className="button-bar">
                            <button onClick={handleSave}>Save</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};