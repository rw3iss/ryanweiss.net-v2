import { Blob } from 'components/shared/BlobEditor/Blob';
import { BlobMenu } from 'components/shared/BlobEditor/BlobMenu';
import { WYSIWYGEditor } from 'components/shared/BlobEditor/Editor';
import { useEffect } from 'preact/hooks';
import { v4 as uuidv4 } from 'uuid';

const BlobEditor = (props) => {

    useEffect(() => {
        console.log(`BE`)

        const initialBlob = new Blob(uuidv4(), 'blob', 'Initial Title', [
            {
                type: 'div',
                attributes: { class: 'div-class' },
                children: 'Some text'
            },
            {
                type: 'ul',
                attributes: { class: 'ul-class' },
                children: [
                    {
                        type: 'li',
                        attributes: { class: 'li-class' },
                        children: 'some text'
                    }
                ]
            }
        ]);

        const editor = new WYSIWYGEditor(document.getElementById('editor-container'), initialBlob);
        console.log(`editor`, editor)
        window.editor = editor;

    }, [])

    function onBlobChange(b) {
        console.log(`change blob`, b)
        window.editor.loadBlob(b);
    }

    return (
        <>
            <BlobMenu onBlobChange={onBlobChange} />

            <div id="editor-container">

                EDITOR

            </div>
        </>
    );
};

export default BlobEditor;

