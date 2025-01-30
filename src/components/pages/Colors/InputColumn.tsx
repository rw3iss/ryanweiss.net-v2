import { FunctionalComponent } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';
import { parseColors } from './utils';

interface InputColumnProps {
    onColorsParsed: (colors: { color: string, modifiedColor: string }[]) => void;
}

const InputColumn: FunctionalComponent<InputColumnProps> = ({ onColorsParsed }) => {
    const [text, setText] = useState('');
    const [combineSimilar, setCombineSimilar] = useState(false);

    const handleFileImport = useCallback((event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target && target.files && target.files[0]) {
            const file = target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const fileContent = e.target!.result as string;
                setText(fileContent);
                localStorage.setItem('inputText', fileContent);
            };
            reader.readAsText(file);
        }
    }, []);

    const handleClear = useCallback(() => {
        setText('');
        localStorage.setItem('inputText', '');
    }, []);

    const handleParseColors = useCallback(() => {
        const textareaContent = (document.querySelector('textarea') as HTMLTextAreaElement).value;
        if (textareaContent.trim() !== '') {
            setText(textareaContent);
            const colors = parseColors(textareaContent, combineSimilar);
            onColorsParsed(colors); // This updates the parent's state
            localStorage.setItem('inputText', textareaContent);
        }
    }, [onColorsParsed, combineSimilar]);

    useEffect(() => {
        const savedText = localStorage.getItem('inputText');
        if (savedText && savedText.trim() !== '') {
            setText(savedText);
            handleParseColors(); // Parse the saved text if it exists
        }
    }, []); // Load saved text only once on mount

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

export default InputColumn;