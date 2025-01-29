export class ApiClient {
    private baseUrl = 'your-api-endpoint-url'; // Replace with actual API endpoint

    public async fetchBlobs(): Promise<Blob[]> {
        const response = await fetch(`${this.baseUrl}/blobs`);
        return await response.json();
    }

    public async fetchBlob(id: string): Promise<Blob | null> {
        const response = await fetch(`${this.baseUrl}/blobs/${id}`);
        if (!response.ok) return null;
        return await response.json();
    }

    public async saveBlob(blob: Blob): Promise<void> {
        await fetch(`${this.baseUrl}/blobs/${blob.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blob)
        });
    }

    public async deleteBlob(id: string): Promise<void> {
        await fetch(`${this.baseUrl}/blobs/${id}`, { method: 'DELETE' });
    }
}