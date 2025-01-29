import LocalStorageFallback from 'local-storage-fallback';

export class CacheService {
    private storage: LocalStorageFallback;
    private prefix: string;

    constructor(prefix: string) {
        this.storage = LocalStorageFallback;
        this.prefix = prefix;
    }

    public get<T>(key: string): T | null {
        const item = this.storage.getItem(this.getKey(key));
        return item ? JSON.parse(item) : null;
    }

    public set<T>(key: string, value: T): void {
        this.storage.setItem(this.getKey(key), JSON.stringify(value));
    }

    public remove(key: string): void {
        this.storage.removeItem(this.getKey(key));
    }

    public getAll<T>(): T[] {
        const items = [];
        for (let i = 0; i < this.storage.length; i++) {
            const key = this.storage.key(i);
            if (key && key.startsWith(this.prefix)) {
                items.push(JSON.parse(this.storage.getItem(key) || '{}'));
            }
        }
        return items;
    }

    public setAll<T>(items: T[]): void {
        items.forEach(item => {
            if ('id' in item) {
                this.set((item as any).id, item);
            }
        });
    }

    public clear(): void {
        this.getAll().forEach((_, index) => {
            const key = this.storage.key(index);
            if (key && key.startsWith(this.prefix)) {
                this.storage.removeItem(key);
            }
        });
    }

    private getKey(key: string): string {
        return `${this.prefix}:${key}`;
    }
}