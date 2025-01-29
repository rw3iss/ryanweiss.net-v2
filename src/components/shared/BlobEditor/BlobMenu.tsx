import { useEffect, useState } from "preact/hooks";

export function BlobMenu({ onBlobChange }) {
    const [blobs, setBlobs] = useState([]);

    function getAllBlobs() {
        const _blobs = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const blobData = JSON.parse(localStorage.getItem(key));
            if (blobData) {
                _blobs.push(blobData);
            }
        }
        setBlobs(_blobs);
    }

    useEffect(() => {
        getAllBlobs();
    }, []);


    function handleChange(event) {
        const selectedBlobId = event.target.value;
        onBlobChange(selectedBlobId);
    }

    return (
        <select onChange={handleChange}>
            {blobs.map(blob =>
                <option value={blob.id}>{blob.title}</option>
            )}
        </select>
    )
}