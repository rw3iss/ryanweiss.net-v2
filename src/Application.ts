import { idbTables } from 'config/idb.config';
import { APP_ID } from 'env';
import { IndexedDBManager } from 'lib/IndexedDBManager';
import AudioManager from './lib/AudioManager.js';
import { DebugPanel, DebugPanelLogModule } from './lib/utils/debug/DebugPanel';
import { addLogModule } from './lib/utils/logging.js';

class _Application {

    constructor() {
        // init globals and singletons
    }

    // Things to initialize before client can start...
    // Don't take too long... App waits for this method until it mounts.
    async init() {
        //console.log(`Application.init()`)
        const dbManager = new IndexedDBManager(APP_ID, 1);
        if (idbTables) for (var t of idbTables) dbManager.addStore(t.name, t.indexes);

        AudioManager.register('hover', '/public/sounds/click.wav');
        AudioManager.register('click', '/public/sounds/cool-click.wav');

        // addLogModule(new DebugPanelLogModule({ show: true }));
    }
}

const Application = new _Application();
export default Application;