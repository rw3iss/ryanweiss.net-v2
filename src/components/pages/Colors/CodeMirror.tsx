import { FunctionalComponent } from 'preact';
import { useEffect } from 'preact/hooks';

interface CodeMirrorProps {
    initialDoc: string;
    onChange: (value: string) => void;
}

const CodeMirror: FunctionalComponent<CodeMirrorProps> = ({ initialDoc, onChange }) => {
    // const viewRef = useRef<HTMLTextAreaElement>(null);
    // const editorRef = useRef<EditorView | null>(null);

    useEffect(() => {
        console.log(`here`)
        const editor = CodeMirror.fromTextArea(document.getElementById("code-text"), {});
        console.log(`editor`, editor);

        // if (viewRef.current) {
        //     // const state = EditorState.create({
        //     //     doc: initialDoc,
        //     //     extensions: [basicSetup]
        //     // });
        //     const editor = new EditorView({
        //         extensions: minimalSetup,
        //         parent: viewRef.current
        //     });
        //     editorRef.current = editor;
        //     return () => editor.destroy();
        // }
    }, []);// [viewRef.current]);

    return <textarea id="code-text" />;
};

export default CodeMirror;