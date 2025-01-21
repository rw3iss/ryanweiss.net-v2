import { idbTables } from 'config/idb.config';
import { APP_ID } from 'env';
import { IndexedDBManager } from 'lib/IndexedDBManager';

class _Application {

    constructor() {
        // init globals and singletons
    }

    // Things to initialize before client can start...
    async init() {
        console.log(`Application.init()`)
        const dbManager = new IndexedDBManager(APP_ID, 1);
        if (idbTables) for (var t of idbTables) dbManager.addStore(t.name, t.indexes);
    }
}

const Application = new _Application();
export default Application;