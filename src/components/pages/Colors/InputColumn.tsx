import { Config } from 'components/pages/Colors/Config';
import { FunctionalComponent } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import { parseAndTokenizeColors } from './utils';

interface InputColumnProps {
    onColorsParsed: (colors: { id: number; color: string; modifiedColor: string }[], tokenizedText: string) => void;
    config: {
        combineSimilar: boolean;
        colorMode: 'dark' | 'light';
        backgroundColor: string;
        fontColor: string;
    };
    onConfigChange: (newConfig: Partial<InputColumnProps['config']>) => void;
}

export const InputColumn: FunctionalComponent<InputColumnProps> = ({ onColorsParsed, config, onConfigChange }) => {
    const [text, setText] = useState('');
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

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
            const { colors, tokenizedText } = parseAndTokenizeColors(textareaContent, config.combineSimilar);
            onColorsParsed(colors, tokenizedText);
            localStorage.setItem('inputText', textareaContent);
        } else {
            onColorsParsed([], '');
        }
    }, [onColorsParsed, config.combineSimilar]);

    return (
        <div className="column InputColumn">
            <div className="button-bar top">
                <button onClick={() => document.getElementById('fileInput')?.click()}>Import File</button>
                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileImport} />
                <button onClick={handleClear}>Clear</button>
                <Config config={config} onConfigChange={onConfigChange} />
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