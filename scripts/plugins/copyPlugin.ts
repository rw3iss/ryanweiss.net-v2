import path from 'path';

// todo: integrate somehow
const OUTPUT_DIR = './build';

// copyPlugin.ts
// Copy some stuff, anything, after build, if needed.
module.exports = {
    name: 'copy',
    setup(build) {
        const fse = require('fs-extra');

        // copy index.html
        // THIS IS HANDLED SEPARATELY NOW, for templating.
        fse.copySync(path.resolve('./src/index.html'), path.resolve(`${OUTPUT_DIR}/index.html`), { overwrite: true });

        // copy static folder to build.
        // and copy the adtrack library to main url suffix for brevity.
        try {
            fse.copySync(path.resolve('./src/static'), path.resolve(`${OUTPUT_DIR}/static`), { overwrite: true });
            fse.copySync(path.resolve('./src/static/favicon.ico'), path.resolve(`${OUTPUT_DIR}/favicon.ico`), { overwrite: true });
        } catch (e) {
            console.error('error: ', e);
        }
    }
};
