// InputColumn.tsx
import { FunctionalComponent } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import CodeMirror from './CodeMirror';

interface InputColumnProps {
    onColorsParsed: (colors: { color: string, modifiedColor: string }[]) => void;
}

const InputColumn: FunctionalComponent<InputColumnProps> = ({ onColorsParsed }) => {
    const [text, setText] = useState('');

    const handleFileImport = useCallback((event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target && target.files && target.files[0]) {
            const file = target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                setText(e.target!.result as string);
            };
            reader.readAsText(file);
        }
    }, []);

    const handleClear = useCallback(() => {
        setText('');
    }, []);

    const handleParseColors = useCallback(() => {
        const regex = /(#[0-9A-Fa-f]{3,8}|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(0(\.\d+)?|1(\.0+)?)\s*\))/g;
        const colors: { color: string; modifiedColor: string }[] = [];
        let match;

        while ((match = regex.exec(text)) !== null) {
            if (!colors.some(color => color.color === match[0])) {
                colors.push({ color: match[0], modifiedColor: match[0] });
            }
        }

        onColorsParsed(colors);
    }, [text, onColorsParsed]);

    return (
        <div style={{ flex: '1 1 33%', display: 'flex', flexDirection: 'column' }}>
            <div>
                <button onClick={() => document.getElementById('fileInput')?.click()}>Import File</button>
                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileImport} />
                <button onClick={handleClear}>Clear</button>
            </div>
            <CodeMirror
                initialDoc={text}
                onChange={(value) => setText(value)}
            />
            <div>
                <button onClick={handleParseColors}>Parse Colors</button>
            </div>
        </div>
    );
};

export default InputColumn;