import EventBus from 'eventbusjs';
import { Blob } from 'types/Blob';
import { ApiClient } from './ApiClient';
import { CacheService } from './CacheService';

export class BlobService {
    private apiClient: ApiClient;
    private cacheService: CacheService;
    private eventBus = EventBus;

    constructor() {
        this.apiClient = new ApiClient();
        this.cacheService = new CacheService('blobService');
    }

    public async listBlobs(): Promise<Blob[]> {
        let blobs = this.cacheService.getAll<Blob>();
        if (!blobs || blobs.length === 0) {
            blobs = await this.apiClient.fetchBlobs();
            this.cacheService.setAll(blobs);
        }
        return blobs;
    }

    public async getBlob(id: string): Promise<Blob | null> {
        let blob = this.cacheService.get<Blob>(id);
        if (!blob) {
            blob = await this.apiClient.fetchBlob(id);
            if (blob) {
                this.cacheService.set(id, blob);
            }
        }
        return blob;
    }

    public async saveBlob(blob: Blob): Promise<void> {
        await this.apiClient.saveBlob(blob);
        this.cacheService.set(blob.id, blob);
        this.notifyEvent('blobUpdated', blob);
    }

    public async deleteBlob(id: string): Promise<void> {
        await this.apiClient.deleteBlob(id);
        this.cacheService.remove(id);
        this.notifyEvent('blobDeleted', { id });
    }

    private notifyEvent(eventType: string, data: any) {
        this.eventBus.dispatch(eventType, data);
    }

    public clear(): void {
        this.cacheService.clear();
    }
}