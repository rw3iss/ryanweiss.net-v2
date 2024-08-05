const { getNormalizedEnvVars } = require("./utils/envUtils");
const transformHtmlTemplatePlugin = require("./plugins/transformHtmlTemplatePlugin");
const dotenv = require('dotenv');

// Config params (relative to where npm/script is called from):
const GLOBAL_NAME = 'RyanWeiss';
const INPUT_DIR = './src';
const OUTPUT_DIR = './build';
const TARGET = 'esnext';

const IS_DEV = process.env.NODE_ENV != 'production';
const WATCH = process.argv[process.argv.length - 1] == '--watch';

const NODE_ENV = (process.env.NODE_ENV || 'local');
dotenv.config({ path: `.env.${NODE_ENV}` });
const { define, defineNoQuotes } = getNormalizedEnvVars();

const clients = [];

const liveReload = {
    name: 'liveReload',
    setup(build) {
        build.onEnd((result) => {
            clients.forEach((res) => res.write("data: update\n\n"));
            clients.length = 0;
        })
    }
}


export const HTML_BUILD_CONFIG = {
    entryPoints: [`${INPUT_DIR}/index.html`],
    outfile: `${OUTPUT_DIR}/index.html`,
    target: TARGET,
    logLevel: 'info',
    bundle: false,
    // loader: { // built-in loaders: js, jsx, ts, tsx, css, json, text, base64, dataurl, file, binary
    //     '.html': 'file'
    // },
    define,
    plugins: [transformHtmlTemplatePlugin]
};