import { basicSetup } from '@codemirror/basic-setup';
import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/legacy-modes/mode/javascript';
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { FunctionalComponent } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';

interface OutputColumnProps {
    colors: { color: string; modifiedColor: string }[];
}

const OutputColumn: FunctionalComponent<OutputColumnProps> = ({ colors }) => {
    const [activeTab, setActiveTab] = useState<'swatches' | 'text'>('swatches');
    const editorRef = useRef<EditorView | null>(null);
    const parentRef = useRef<HTMLDivElement | null>(null);

    const updateTextOutput = useCallback(() => {
        if (editorRef.current) {
            const text = colors.map(c => `Color: ${c.modifiedColor}`).join('\n\n');
            editorRef.current.dispatch({
                changes: {
                    from: 0,
                    to: editorRef.current.state.doc.length,
                    insert: text
                }
            });
        }
    }, [colors]);

    useEffect(() => {
        if (parentRef.current && activeTab === 'text' && !editorRef.current) {
            const startState = EditorState.create({
                doc: '',
                extensions: [
                    basicSetup,
                    EditorView.editable.of(false), // Make the editor read-only
                    StreamLanguage.define(javascript)
                ]
            });

            const view = new EditorView({
                state: startState,
                parent: parentRef.current
            });

            editorRef.current = view;

            return () => {
                view.destroy();
            };
        }
    }, [activeTab]);

    useEffect(() => {
        if (activeTab === 'text') {
            updateTextOutput();
        }
    }, [colors, activeTab, updateTextOutput]);

    return (
        <div style={{ flex: '1 1 33%', display: 'flex', flexDirection: 'column' }}>
            <div>
                <button onClick={() => setActiveTab('swatches')}>Swatches</button>
                <button onClick={() => setActiveTab('text')}>Text</button>
            </div>
            {activeTab === 'swatches' ? (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {colors.map((color, index) => (
                        <div key={index} style={{ backgroundColor: color.modifiedColor, height: 'auto', minHeight: '20px', flex: 1 }}></div>
                    ))}
                </div>
            ) : (
                <div ref={parentRef} style={{ flex: '1', width: '100%', height: '100%' }}></div>
            )}
        </div>
    );
};

export default OutputColumn;