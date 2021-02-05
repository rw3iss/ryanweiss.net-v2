import { proxy } from './proxyState';

export function history() {
    let state = proxy({ currentRoute: '' })

    this.push = function(url) {
        // trigger
    }

    
}