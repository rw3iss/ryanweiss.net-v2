import { FunctionalComponent } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import VanillaPicker from 'vanilla-picker';
import { Dropdown } from './Dropdown';

interface ConfigProps {
    config: {
        combineSimilar: boolean;
        colorMode: 'dark' | 'light';
        backgroundColor: string;
        fontColor: string;
    };
    onConfigChange: (newConfig: Partial<ConfigProps['config']>) => void;
}

export const Config: FunctionalComponent<ConfigProps> = ({ config, onConfigChange }) => {
    const [colorPicker, setColorPicker] = useState<VanillaPicker | null>(null);
    const backgroundSwatchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (backgroundSwatchRef.current && !colorPicker) {
            const newPicker = new VanillaPicker({
                parent: backgroundSwatchRef.current,
                color: config.backgroundColor,
                popup: 'bottom',
                editor: true,
                onChange: (color: { hex: string }) => {
                    // Preview the color change
                },
                onDone: (color: { hex: string }) => {
                    onConfigChange({ backgroundColor: color.hex, colorMode: 'dark' }); // Assuming dark mode when changing background color
                }
            });
            setColorPicker(newPicker);
        } else if (colorPicker) {
            colorPicker.setColor(config.backgroundColor);
        }

        return () => {
            if (colorPicker) {
                colorPicker.destroy();
            }
        };
    }, [config.backgroundColor, onConfigChange, colorPicker]);

    const handleCombineSimilarChange = useCallback((e: Event) => {
        onConfigChange({ combineSimilar: (e.target as HTMLInputElement).checked });
    }, [onConfigChange]);

    const handleColorModeChange = useCallback((e: Event) => {
        const isDark = (e.target as HTMLInputElement).checked;
        onConfigChange({ colorMode: isDark ? 'dark' : 'light' });
    }, [onConfigChange]);

    return (
        <Dropdown>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                <label>
                    <input
                        type="checkbox"
                        checked={config.combineSimilar}
                        onChange={handleCombineSimilarChange}
                    />
                    Combine Similar
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={config.colorMode === 'dark'}
                        onChange={handleColorModeChange}
                    />
                    Dark Mode
                </label>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <span>Background Color</span>
                    <div
                        ref={backgroundSwatchRef}
                        style={{
                            width: '24px',
                            height: '24px',
                            backgroundColor: config.backgroundColor,
                            marginLeft: '10px',
                            cursor: 'pointer'
                        }}
                        onClick={() => colorPicker?.show()}
                    />
                </div>
            </div>
        </Dropdown>
    );
};