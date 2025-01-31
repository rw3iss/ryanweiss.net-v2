import { FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

interface OutputColumnProps {
    colors: { color: string, modifiedColor: string }[];
}

export const OutputColumn: FunctionalComponent<OutputColumnProps> = ({ colors }) => {
    const [activeTab, setActiveTab] = useState('swatches');

    const generateRandomWord = () => {
        const words = ["Hello", "World", "Color", "Sample", "Text", "Display", "View", "Edit", "Change", "Apply"];
        return words[Math.floor(Math.random() * words.length)];
    };

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
            </div>
            <div className="tab-content">
                {activeTab === 'swatches' ? (
                    <div className="color-swatches">
                        {colors.map((color, index) => (
                            <div key={index} className="color-swatch" style={{ backgroundColor: color.modifiedColor }}></div>
                        ))}
                    </div>
                ) : (
                    <div className="text-preview" style={{
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        padding: '10px',
                        fontFamily: 'monospace',
                        whiteSpace: 'pre-wrap',
                        overflowY: 'auto',
                        height: '100%'
                    }}>
                        {colors.map((color, index) => (
                            <div key={index} style={{ color: color.modifiedColor, marginBottom: '10px' }}>
                                {generateRandomWord()}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};