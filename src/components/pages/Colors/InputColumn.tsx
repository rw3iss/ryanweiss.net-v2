import { h, FunctionalComponent, Ref } from 'preact';
import { useState, useCallback, useEffect, useRef } from 'preact/hooks';
import { parseAndTokenizeColors } from './utils';
import { Dropdown } from './Dropdown';
import VanillaPicker from 'vanilla-picker';

interface InputColumnProps {
    onColorsParsed: (colors: { id: number; color: string; modifiedColor: string }[], tokenizedText: string) => void;
    onDarkModeChange: (isDarkMode: boolean) => void;
    onBackgroundColorChange: (color: string) => void;
}

export const InputColumn: FunctionalComponent<InputColumnProps> = ({ onColorsParsed, onDarkModeChange, onBackgroundColorChange }) => {
    const [text, setText] = useState('');
    const [combineSimilar, setCombineSimilar] = useState(false);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const backgroundColorPickerRef = useRef<VanillaPicker | null>(null);
    const [backgroundColor, setBackgroundColor] = useState('#f4f4f4'); // Default background color
    const backgroundSwatchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const savedText = localStorage.getItem('inputText');
        if (savedText) {
            setText(savedText);
        }
        if (textAreaRef.current) {
            textAreaRef.current.value = savedText || '';
        }
    }, []);

    const handleFileImport = useCallback((event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target && target.files && target.files[0]) {
            const file = target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const fileContent = e.target!.result as string;
                setText(fileContent);
                if (textAreaRef.current) {
                    textAreaRef.current.value = fileContent;
                }
                localStorage.setItem('inputText', fileContent);
            };
            reader.readAsText(file);
        }
    }, []);

    const handleClear = useCallback(() => {
        setText('');
        if (textAreaRef.current) {
            textAreaRef.current.value = '';
        }
        localStorage.setItem('inputText', '');
    }, []);

    const handleParseColors = useCallback(() => {
        const textareaContent = textAreaRef.current ? textAreaRef.current.value : '';
        if (textareaContent.trim() !== '') {
            setText(textareaContent);
            const { colors, tokenizedText } = parseAndTokenizeColors(textareaContent, combineSimilar);
            onColorsParsed(colors, tokenizedText);
            localStorage.setItem('inputText', textareaContent);
        } else {
            onColorsParsed([], '');
        }
    }, [onColorsParsed, combineSimilar]);

    useEffect(() => {
        if (backgroundSwatchRef.current && !backgroundColorPickerRef.current) {
            backgroundColorPickerRef.current = new VanillaPicker({
                parent: backgroundSwatchRef.current, // Use the swatch as the parent
                popup: 'bottom',
                color: backgroundColor,
                onChange: (color: { hex: string }) => {
                    // Update local state for preview
                    setBackgroundColor(color.hex);
                },
                onDone: (color: { hex: string }) => {
                    // Apply the color when 'OK' is clicked
                    onBackgroundColorChange(color.hex);
                }
            });
        }

        return () => {
            // Clean up the picker when the component unmounts or updates
            if (backgroundColorPickerRef.current) {
                backgroundColorPickerRef.current.destroy();
            }
        };
    }, [backgroundColor, onBackgroundColorChange]);

    const handleBackgroundColorClick = useCallback(() => {
        if (backgroundColorPickerRef.current) {
            backgroundColorPickerRef.current.show();
        }
    }, []);

    return (
        <div className="column InputColumn">
            <div className="button-bar top">
                <button onClick={() => document.getElementById('fileInput')?.click()}>Import File</button>
                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileImport} />
                <button onClick={handleClear}>Clear</button>
                <Dropdown>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                        <label>
                            <input
                                type="checkbox"
                                checked={combineSimilar}
                                onChange={(e) => setCombineSimilar(e.target.checked)}
                            />
                            Combine Similar
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={backgroundColor === '#012'} // Assuming dark mode uses this color
                                onChange={(e) => {
                                    const isDarkMode = e.target.checked;
                                    onDarkModeChange(isDarkMode);
                                    setBackgroundColor(isDarkMode ? '#012' : '#f4f4f4');
                                }}
                            />
                            Dark Mode
                        </label>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <span>Background Color</span>
                            <div
                                ref={backgroundSwatchRef} // Reference to the swatch
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    backgroundColor: backgroundColor,
                                    marginLeft: '10px',
                                    cursor: 'pointer'
                                }}
                                onClick={handleBackgroundColorClick}
                            />
                        </div>
                    </div>
                </Dropdown>
            </div>
            <textarea
                ref={textAreaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="button-bar bottom">
                <button onClick={handleParseColors}>Parse Colors</button>
            </div>
        </div>
    );
};