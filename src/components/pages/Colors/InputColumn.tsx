import { FunctionalComponent } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';
import { parseColors } from './utils';

interface InputColumnProps {
    onColorsParsed: (colors: { color: string, modifiedColor: string }[]) => void;
    onDarkModeChange: (isDarkMode: boolean) => void; // Added prop
}

export const InputColumn: FunctionalComponent<InputColumnProps> = ({ onColorsParsed, onDarkModeChange }) => {
    const [text, setText] = useState('');
    const [combineSimilar, setCombineSimilar] = useState(false);

    const [fileName, setFileName] = useState<string | undefined>(undefined);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedText = localStorage.getItem('inputText');
        if (savedText) {
            setText(savedText);
            handleParseColors();
        }
    }, []);

    const handleFileImport = useCallback((event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target && target.files && target.files[0]) {
            const file = target.files[0]; setFileName
            setFileName(file.name); // Save the file name
            const reader = new FileReader();
            reader.onload = (e) => {
                const fileContent = e.target!.result as string;
                setText(fileContent);
                localStorage.setItem('inputText', fileContent);
            };
            reader.readAsText(file);
        }
    }, []);

    const handleParseColors = useCallback(() => {
        const textareaContent = (document.querySelector('textarea') as HTMLTextAreaElement).value;
        if (textareaContent.trim() !== '') {
            setText(textareaContent);
            const colors = parseColors(textareaContent, combineSimilar);
            onColorsParsed(colors, textareaContent, fileName); // Pass text and fileName
            localStorage.setItem('inputText', textareaContent);
        } else {
            onColorsParsed([], textareaContent, fileName);
        }
    }, [onColorsParsed, combineSimilar, fileName]);


    const handleClear = useCallback(() => {
        setText('');
        localStorage.setItem('inputText', '');
    }, []);

    return (
        <div className="column InputColumn">
            <div className="button-bar top">
                <button onClick={() => document.getElementById('fileInput')?.click()}>Import File</button>
                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileImport} />
                <button onClick={handleClear}>Clear</button>
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
                        checked={darkMode}
                        onChange={(e) => {
                            const isDarkMode = e.target.checked;
                            setDarkMode(isDarkMode);
                            onDarkModeChange(isDarkMode); // Call the prop with the new dark mode state
                        }}
                    />
                    Dark Mode
                </label>
            </div>
            <textarea
                value={text}
            />
            <div className="button-bar bottom">
                <button onClick={handleParseColors}>Parse Colors</button>
            </div>
        </div>
    );
};