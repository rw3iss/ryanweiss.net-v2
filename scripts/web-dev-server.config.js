// import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

//export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
module.exports = ({
    open: '/',
    rootDir: './', // cwd
    watch: true,//!hmr,
    hmr: true,
    /** Resolve bare module imports */
    nodeResolve: {
        exportConditions: ['browser', 'development'],
    },

    /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
    // esbuildTarget: 'auto'

    /** Set appIndex to enable SPA routing */
    appIndex: './index.html',

    plugins: [
        /** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
        // hmr && hmrPlugin({ exclude: ['**/*/node_modules/**/*'], presets: [presets.litElement] }),
    ],

    // See documentation for all available options
});
