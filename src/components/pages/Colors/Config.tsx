import { FunctionalComponent } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import VanillaPicker from 'vanilla-picker';
import { Dropdown } from './Dropdown';

export interface Config {
    combineSimilar: boolean;
    colorMode: 'dark' | 'light';
    backgroundColorLight: string;
    backgroundColorDark: string;
    fontColorLight: string;
    fontColorDark: string;
}

interface ConfigProps {
    config: Config;
    onConfigChange: (newConfig: Partial<ConfigProps['config']>) => void;
}

export const Config: FunctionalComponent<ConfigProps> = ({ config, onConfigChange }) => {
    const [tempConfig, setTempConfig] = useState(config); // Temporary config for unsaved changes
    const [backgroundPicker, setBackgroundPicker] = useState<VanillaPicker | null>(null);
    const [textPicker, setTextPicker] = useState<VanillaPicker | null>(null);
    const backgroundSwatchRef = useRef<HTMLDivElement>(null);
    const textSwatchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Reset tempConfig when dropdown opens
        setTempConfig(config);

        if (backgroundSwatchRef.current && !backgroundPicker) {
            const newPicker = new VanillaPicker({
                parent: backgroundSwatchRef.current,
                color: tempConfig.colorMode === 'dark' ? tempConfig.backgroundColorDark : tempConfig.backgroundColorLight,
                popup: 'bottom',
                editor: true,
                onChange: (color: { hex: string }) => {
                    setTempConfig(prev => ({
                        ...prev,
                        [prev.colorMode === 'dark' ? 'backgroundColorDark' : 'backgroundColorLight']: color.hex
                    }));
                },
                onDone: (color: { hex: string }) => {
                    setTempConfig(prev => ({
                        ...prev,
                        [prev.colorMode === 'dark' ? 'backgroundColorDark' : 'backgroundColorLight']: color.hex
                    }));
                }
            });
            setBackgroundPicker(newPicker);
        } else if (backgroundPicker) {
            backgroundPicker.setColor(tempConfig.colorMode === 'dark' ? tempConfig.backgroundColorDark : tempConfig.backgroundColorLight);
        }

        if (textSwatchRef.current && !textPicker) {
            const newTextPicker = new VanillaPicker({
                parent: textSwatchRef.current,
                color: tempConfig.colorMode === 'dark' ? tempConfig.fontColorDark : tempConfig.fontColorLight,
                popup: 'bottom',
                editor: true,
                onChange: (color: { hex: string }) => {
                    setTempConfig(prev => ({
                        ...prev,
                        [prev.colorMode === 'dark' ? 'fontColorDark' : 'fontColorLight']: color.hex
                    }));
                },
                onDone: (color: { hex: string }) => {
                    setTempConfig(prev => ({
                        ...prev,
                        [prev.colorMode === 'dark' ? 'fontColorDark' : 'fontColorLight']: color.hex
                    }));
                }
            });
            setTextPicker(newTextPicker);
        } else if (textPicker) {
            textPicker.setColor(tempConfig.colorMode === 'dark' ? tempConfig.fontColorDark : tempConfig.fontColorLight);
        }

        return () => {
            backgroundPicker?.destroy();
            textPicker?.destroy();
        };
    }, [config, tempConfig]);

    const handleCombineSimilarChange = useCallback((e: Event) => {
        setTempConfig(prev => ({ ...prev, combineSimilar: (e.target as HTMLInputElement).checked }));
    }, []);

    const handleColorModeChange = useCallback((e: Event) => {
        const isDark = (e.target as HTMLInputElement).checked;
        setTempConfig(prev => ({ ...prev, colorMode: isDark ? 'dark' : 'light' }));
    }, []);

    const handleSave = useCallback(() => {
        onConfigChange(tempConfig);
        // Assuming there's a way to close the dropdown from here,
        // like passing down a close function from Dropdown
    }, [tempConfig, onConfigChange]);

    const handleCancel = useCallback(() => {
        // Close dropdown without saving changes
        // This would typically involve calling a close method from Dropdown
    }, []);

    return (
        <Dropdown onClose={handleCancel}>  // Assuming Dropdown component can take an onClose prop
            <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                <label>
                    <input
                        type="checkbox"
                        checked={tempConfig.combineSimilar}
                        onChange={handleCombineSimilarChange}
                    />
                    Combine Similar
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={tempConfig.colorMode === 'dark'}
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
                            backgroundColor: tempConfig.colorMode === 'dark' ? tempConfig.backgroundColorDark : tempConfig.backgroundColorLight,
                            marginLeft: '10px',
                            cursor: 'pointer'
                        }}
                        onClick={() => backgroundPicker?.show()}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <span>Text Color</span>
                    <div
                        ref={textSwatchRef}
                        style={{
                            color: tempConfig.colorMode === 'dark' ? tempConfig.fontColorDark : tempConfig.fontColorLight,
                            marginLeft: '10px',
                            cursor: 'pointer'
                        }}
                    >
                        Sample
                    </div>
                    <button
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            color: 'inherit',
                            fontSize: 'inherit'
                        }}
                        onClick={() => textPicker?.show()}
                    >
                        Sample
                    </button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>
        </Dropdown>
    );
};