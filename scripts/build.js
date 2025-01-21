

const path = require("path");
const esbuild = require('esbuild');
const { globSync } = require('glob');
const envFilePlugin = require('esbuild-envfile-plugin');
const { getNormalizedEnvVars } = require("./utils/envUtils.js");
const dotenv = require('dotenv');
const postcssPresetEnv = require("postcss-preset-env");
const { sassPlugin } = require('esbuild-sass-plugin');
const { mkDirSync } = require("./utils/fileUtils");
const copyPlugin = require("./plugins/copyPlugin.ts");
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

// Config params (relative to where npm/script is called from):
const GLOBAL_NAME = "RyanWeiss";
const INPUT_DIR = './src';
const OUTPUT_DIR = './build';

const IS_DEV = process.env.NODE_ENV != 'production';

const NODE_ENV = (process.env.NODE_ENV || 'local');
dotenv.config({ path: `.env.${NODE_ENV}` });
const { define } = getNormalizedEnvVars();

const pluginCache = new Map();
const cwd = path.resolve('./');

const watchStyles = globSync('./src/styles/**/*.scss', { ignore: "node_modules/**" });

console.log('build.js node environment detected as: ' + NODE_ENV);



const buildConfig = {
    platform: "browser",
    entryPoints: [
        `${INPUT_DIR}/index.tsx`
    ],
    outdir: `${OUTPUT_DIR}`,
    bundle: true,
    format: "esm",
    jsxFactory: "h",
    inject: ["preact"],
    globalName: GLOBAL_NAME,
    loader: { // built-in loaders: js, jsx, ts, tsx, css, json, text, base64, dataurl, file, binary
        '.ttf': 'file',
        '.otf': 'file',
        '.woff': 'file',
        '.woff2': 'file',
        '.png': 'file',
        '.jpg': 'file',
        '.svg': 'file',
        '.gif': 'file',
        '.wav': 'file'
    },
    external: ['window', 'document'],
    assetNames: 'public/[name].[hash]',
    publicPath: "",
    tsconfig: "tsconfig.json",
    mainFields: ["browser", "module", "main"],
    plugins: [
        envFilePlugin,
        sassPlugin({
            cache: pluginCache,
            loadPaths: [`${cwd}`],
            filter: /\.scss$/,
            type: 'css',
            async transform(source) {
                const { css } = await postcss([autoprefixer, postcssPresetEnv({ stage: 0 })]).process(source);
                return { loader: "css", contents: css, watchFiles: watchStyles };
            }
        }),
        copyPlugin,
        {
            name: 'rebuild-notify',
            setup(build) {
                build.onEnd(result => {
                    console.log(`built, ${result.errors.length} errors`);
                })
            }
        }
    ],
    //write: false, // necessary for gzipPlugin
    define: { ...define, global: "window" },
    treeShaking: true,
    minify: NODE_ENV === 'production',
    sourcemap: false //opts.sourcemap ? true : false
}


async function build() {
    mkDirSync(OUTPUT_DIR);

    await esbuild
        .build(
            buildConfig
        )
        .catch((e) => {
            console.error(`Error building:`, e);
            process.exit(1)
        });

    console.log(`Build finished.`)
}

build();


