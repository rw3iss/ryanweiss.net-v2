import { PastePlugin } from 'components/shared/BlobEditor/plugins/PastePlugin';
import { TabPlugin } from 'components/shared/BlobEditor/plugins/TabPlugin';
import { ToolbarPlugin } from 'components/shared/BlobEditor/plugins/ToolbarPlugin';
import { useEffect, useRef, useState } from 'preact/hooks';
import { Blob, BlobContent } from 'types/Blob';
import { throttle } from 'utils/throttle';
import { BlobService } from './lib/BlobService'; // Assuming BlobService is in this path
import { WEditor } from './lib/WEditor';
import { DragDropPlugin } from './plugins/DragDropPlugin.ts';
import './styles/BlobEditor.scss';

interface Props {
    blob?: Blob;
}

export const BlobEditor: FunctionComponent<Props> = ({ blob: initialBlob }) => {
    const [currentBlob, setCurrentBlob] = useState<Blob | null>(initialBlob || null);
    const editorRef = useRef<WEditor | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const blobService = new BlobService();

    useEffect(() => {
        const initBlob = async () => {
            if (!initialBlob) {
                try {
                    const blobs = await blobService.listBlobs();
                    const mostRecentBlob = blobs.reduce((latest, current) =>
                        !latest || (current.dateUpdated > latest.dateUpdated) ? current : latest,
                        null as Blob | null
                    );
                    if (mostRecentBlob) {
                        setCurrentBlob(mostRecentBlob);
                    } else {
                        // If no blobs exist, create a new one
                        setCurrentBlob(new Blob({}));
                    }
                } catch (error) {
                    console.error('Failed to load blobs:', error);
                    // Handle error case, maybe set a default or empty blob
                    setCurrentBlob(new Blob({}));
                }
            }
        };
        initBlob();
    }, [initialBlob]);

    useEffect(() => {
        if (currentBlob && containerRef.current && !editorRef.current) {
            editorRef.current = new WEditor(
                containerRef.current,
                currentBlob,
                onContentChanged,
                [
                    new ToolbarPlugin(),
                    new TabPlugin(),
                    new DragDropPlugin(),
                    new PastePlugin()
                ]
            );
        }
    }, [currentBlob]);

    const saveBlob = (blob: Blob) => {
        blobService.saveBlob(blob);
    };

    //const saveBlobThrottled = useRef(throttle(saveBlob, 1000)).current;

    // this method will be
    const onContentChanged = (content: BlobContent) => {
        if (currentBlob) {
            currentBlob.content = content;
            currentBlob.dateUpdated = new Date();
            saveBlob(currentBlob);
            setCurrentBlob({ ...currentBlob }); // Shallow copy to trigger re-render
        }
    };

    const handleTitleChange = (e: Event) => {
        if (e.target instanceof HTMLInputElement && currentBlob) {
            currentBlob.title = e.target.value;
            currentBlob.dateUpdated = new Date();
            saveBlob(currentBlob);
            setCurrentBlob({ ...currentBlob });
        }
    };

    if (!currentBlob) {
        return <p class="error-message">Loading...</p>;
    }

    return (
        <div class="blob-editor" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h2>Blob Editor</h2>
            <input
                type="text"
                value={currentBlob.title}
                onChange={handleTitleChange}
                class="blob-title"
            />
            <div ref={containerRef} class="wysiwyg-container" style={{ flexGrow: 1 }}></div>
        </div>
    );
};