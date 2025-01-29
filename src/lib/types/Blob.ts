import { v4 as uuid } from 'uuid';

export interface BlobContent {
    entries: any[];
}

export class Blob {
    id: string;
    title: string;
    dateUpdated: Date;
    content: BlobContent;
    type: string;

    constructor(
        params: {
            id?: string;
            title?: string;
            content?: BlobContent;
            dateUpdated?: Date;
            type?: string;
        } = {}
    ) {
        this.id = params.id || uuid();
        this.title = params.title || '';
        this.content = params.content || { entries: [] };
        this.dateUpdated = params.dateUpdated || new Date();
        this.type = params.type || 'blob';
    }
}