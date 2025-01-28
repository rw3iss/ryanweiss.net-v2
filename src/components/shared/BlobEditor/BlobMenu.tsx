const { h, render, Component } = window.preact;

export class BlobMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blobs: this.getAllBlobs()
        };
    }

    getAllBlobs() {
        const blobs = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const blobData = JSON.parse(localStorage.getItem(key));
            if (blobData) {
                blobs.push(blobData);
            }
        }
        return blobs;
    }

    handleChange(event) {
        const selectedBlobId = event.target.value;
        this.props.onBlobChange(selectedBlobId);
    }

    render() {
        return (
            h('select', { onChange: (e) => this.handleChange(e) },
                this.state.blobs.map(blob =>
                    h('option', { value: blob.id }, blob.title)
                )
            )
        );
    }
}