import queryString from "query-string";
import ApiService from "./ApiService";
import IDbOrCacheStore from "lib/cache/IDbOrCacheStore";

let EntriesCache: IDbOrCacheStore = undefined;//new Cache();


class DataService {

    private cache: IDbOrCacheStore = undefined;

    constructor() {
        this.cache = new IDbOrCacheStore('entries', {
            indexes: [{ name: 'id', key: 'id', params: { unique: true } }]
        });

        //idb.open(process.env.IDB_NAME || 'app_db');
    }

    public entryCacheKey = (type?, id?) => {
        return `entries${type ? `_${type}` : ''}${id ? `_${id}` : ''}`;
    };

    public getEntries = async (params: any = {}) => {
        const type = params?.type;
        const id = params?.id;
        let entries;

        if (this.cache) entries = await this.cache.get(this.entryCacheKey(type, id));

        if (!entries) {
            console.log(`getEntries()`, params);
            const url = `${process.env.API_URL}/entries`;//${Object.keys(params).length ? `?${queryString.stringify(params)}` : ''}}`;
            const r = await ApiService.get(url);
            if (r.success && r.response) {
                const entries = r.response.entries;
                this._sortAndCacheEntries(entries);
                return type ? entries.filter((e: any) => e.type == type) : entries;
            }
        }
        return entries;
    }

    public getEntryBySlug = async (slug: string) => {
        let entries = await this.getEntries();
        return entries.find(e => e.slug == slug);
    }

    private _sortAndCacheEntries = (entries) => {
        if (!entries || !this.cache) return;
        const entriesByType = {};
        entries.forEach(e => {
            const tEntries = entriesByType[e.type] || [];
            tEntries.push(e);
            entriesByType[e.type] = tEntries;

        });

        Object.keys(entriesByType).forEach(async t => {
            await this.cache.set(this.entryCacheKey(t), entriesByType[t]);
        });

    }
}

export default DataService;// new DataService();