import { FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

interface OutputColumnProps {
    colors: { color: string; modifiedColor: string }[];
}

const OutputColumn: FunctionalComponent<OutputColumnProps> = ({ colors }) => {
    const [activeTab, setActiveTab] = useState<'swatches' | 'text'>('swatches');

    return (
        <div class="column OutputColumn">
            <div class="tab-bar">
                <button class={activeTab === 'swatches' ? 'active' : ''} onClick={() => setActiveTab('swatches')}>
                    Swatches
                </button>
                <button class={activeTab === 'text' ? 'active' : ''} onClick={() => setActiveTab('text')}>
                    Text
                </button>
            </div>
            <div class="tab-content">
                {activeTab === 'swatches' ? (
                    <div class="color-swatches">
                        {colors.map((color, index) => (
                            <div key={index} style={{ backgroundColor: color.modifiedColor }}></div>
                        ))}
                    </div>
                ) : (
                    <div class="text-preview">
                        <textarea readOnly value={colors.map(c => c.modifiedColor).join('\n\n')} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default OutputColumn;