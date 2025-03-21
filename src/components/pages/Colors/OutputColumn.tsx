import { ColorWithID } from 'components/pages/Colors/utils';
import { FunctionalComponent } from 'preact';
import { useCallback, useEffect, useMemo, useState } from 'preact/hooks';
import seedrandom from 'seedrandom';
import { parseColorsWithPosition, replaceColors } from './utils';

interface OutputColumnProps {
    colors: ColorWithID[];
    tokenizedText: string;
    importedFileName?: string;
}

export const OutputColumn: FunctionalComponent<OutputColumnProps> = ({ colors, tokenizedText, importedFileName }) => {

    const [activeTab, setActiveTab] = useState('swatches');
    const [outputTextModified, setOutputTextModified] = useState('');
    const [colorsWithPosition, setColorsWithPosition] = useState<ReturnType<typeof parseColorsWithPosition>>([]);
    const [showOriginal, setShowOriginal] = useState(false);
    const [showModified, setShowModified] = useState(true);

    const sessionSeed = useMemo(() => Math.random().toString(36).substring(7), []);
    const rng = useMemo(() => seedrandom(sessionSeed), [sessionSeed]);

    const generateRandomSentences = useMemo(() => {
        const sentences = [
            "The quick brown fox jumps.",
            "Now is the time for all.",
            "Pack my box with five.",
            "Sphinx of black quartz, judge.",
            "Razorback frogs level six.",
            "Waltz, nymph, for quick jigs.",
            "Five boxing wizards jump.",
            "Extra pluck and zeal from.",
            "Fredericka bought exquisite opal.",
            "The job requires young wage."
        ];
        return Array.from({ length: colors.length }, () => sentences[Math.floor(rng() * sentences.length)]);
    }, [colors.length, rng]);

    useEffect(() => {
        const parsedColors = parseColorsWithPosition(tokenizedText);
        setColorsWithPosition(parsedColors);
        const updatedColorsWithPosition = parsedColors.map(parsed => {
            const match = colors.find(c => c.color === parsed.color);
            return match ? { ...parsed, modifiedColor: match.modifiedColor } : parsed;
        });
        const modifiedText = replaceColors(tokenizedText, updatedColorsWithPosition);
        setOutputTextModified(modifiedText);
    }, [colors, tokenizedText]);

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

    const renderColumn = (isOriginal: boolean) => (
        <div className={activeTab === 'text' ? 'text-content' : 'column-content'} style={{ flex: 1, overflowY: 'auto' }}>
            {activeTab === 'swatches' ?
                colors.map((color, index) => (
                    <div key={index} className="color-swatch" style={{ backgroundColor: isOriginal ? color.color : color.modifiedColor }}></div>
                ))
                :
                colors.map((color, index) => (
                    <div key={index} style={{ color: isOriginal ? color.color : color.modifiedColor }}>
                        {generateRandomSentences[index]}
                    </div>
                ))
            }
        </div>
    );

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
                    className={activeTab === 'output' ? 'active' : ''}
                    onClick={() => setActiveTab('output')}
                    style={{ marginLeft: 'auto' }}
                >
                    Output
                </button>
            </div>
            <div className="tab-content" style={{ height: '100%', overflowY: 'auto' }}>
                {activeTab !== 'output' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div className="checkbox-container">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={showOriginal}
                                    onChange={() => setShowOriginal(!showOriginal)}
                                />
                                Original
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={showModified}
                                    onChange={() => setShowModified(!showModified)}
                                />
                                Modified
                            </label>
                        </div>
                        <div style={{ display: 'flex', flex: 1 }}>
                            {showOriginal && renderColumn(true)}
                            {showModified && renderColumn(false)}
                        </div>
                    </div>
                ) : (
                    <div className="output-preview" style={{ height: '100%' }}>
                        <textarea
                            value={outputTextModified}
                            readOnly
                            style={{ width: '100%', height: '100%', padding: 'var(--item-padding)' }}
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