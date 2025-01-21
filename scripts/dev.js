
const fs = require("fs");
const path = require("path");
const esbuild = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
//const postCssPlugin = require("esbuild-plugin-postcss2");
//const autoprefixer = require("autoprefixer");
const { getNormalizedEnvVars } = require("./utils/envUtils");
const { mkDirSync } = require("./utils/fileUtils");
const dotenv = require('dotenv');
//const postcss = require("postcss");
//const postcssPresetEnv = require("postcss-preset-env");
//const sassPlugin = require("esbuild-plugin-sass");
const { sassPlugin } = require('esbuild-sass-plugin');
const scssPlugin = require('./plugins/scssPlugin');
const transformHtmlTemplatePlugin = require("./plugins/transformHtmlTemplatePlugin");
const copyPlugin = require("./plugins/copyPlugin");
const { createServer } = require("http");
const { HTML_BUILD_CONFIG } = require("./buildConfig");
//const gzipPlugin = require('@luncheon/esbuild-plugin-gzip');

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

console.log('build.js node environment detected as: ' + NODE_ENV);
///////////////////////////////////////////////////////////////////////////////

const pluginCache = new Map();
const CWD = path.resolve('./');

const clients = [];

// const liveReload = {
//     name: 'liveReload',
//     setup: (build) => {
//         build.onEnd(result => {
//             clients.forEach((res) => res.write("data: update\n\n"));
//             clients.length = 0;
//         });
//     }
// };

// Main bundling function.
async function dev() {
    mkDirSync(OUTPUT_DIR);

    // build/copy html file/template:
    // await esbuild.build(HTML_BUILD_CONFIG);

    let ctx = await esbuild
        .context({
            platform: "browser",
            entryPoints: [
                `${INPUT_DIR}/index.tsx`,
                //`${INPUT_DIR}/components/style.scss`,
                //`${INPUT_DIR}/styles/app.scss`
            ],
            //entryFile: `${INPUT_DIR}/index.tsx`,
            //outfile: `${OUTPUT_DIR}/app.js`,
            outdir: `${OUTPUT_DIR}`,
            target: 'esnext',
            globalName: GLOBAL_NAME,
            loader: { // built-in loaders: js, jsx, ts, tsx, css, json, text, base64, dataurl, file, binary
                '.ttf': 'file',
                '.otf': 'file',
                '.woff': 'file',
                '.woff2': 'file',
                '.png': 'file',
                '.gif': 'file',
                '.jpg': 'file',
                '.svg': 'file',
                //'.scss': 'file'
            },
            external: ['window', 'document'],
            assetNames: 'static/[name].[hash]',
            tsconfig: "tsconfig.json",
            mainFields: ["browser", "module", "main"],
            plugins: [
                //nodeExternalsPlugin(),
                scssPlugin,
                sassPlugin({
                    cache: pluginCache,
                    // importMapper: (path) => {
                    //     //console.log(`import`, path);
                    //     return path.replace(/(src\/styles\/includes)/g, `./src/styles/includes.scss`);
                    // },
                    loadPaths: [`${CWD}`],
                    // precompile: (source, pathname) => {
                    //     const basedir = path.dirname(pathname);
                    //     return source.replace(/(src\/styles\/includes)/g, `${CWD}/src/styles/includes.scss`);
                    // }
                }),
                copyPlugin,
                // gzipPlugin({
                //     uncompressed: true,
                //     gzip: true,
                //     brotli: true,
                //     onEnd: ({ outputFiles }) => {
                //         // outputFiles.forEach(({ path, contents }) => {})
                //     }
                // })
            ],
            //write: false, // necessary for gzipPlugin
            define: { ...define, global: "window" },
            bundle: true,
            treeShaking: false,
            minify: NODE_ENV === 'production',
            sourcemap: IS_DEV ? true : false
        })
        .catch(() => process.exit(1));

    await ctx.watch()
        .catch(() => process.exit(1));

    console.log(`\nServing frontend build/ ...`);
    let { host, port } = await ctx.serve({
        servedir: 'build',
        fallback: 'build/index.html',
        // keyfile: 'config/certs/blobs.key',
        // certfile: 'config/certs/blobs.cert'
    })
        .catch(() => process.exit(1));

    console.log(`Frontend served at: http://localhost:${port}`)

}

dev();