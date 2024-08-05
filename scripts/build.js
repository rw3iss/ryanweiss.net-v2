const fs = require('fs');

// This file uses the esbuild api to bundle the frontend client, and output it to ./build

// built-in loaders:
// (js, jsx, ts, tsx, css, json, text, base64, dataurl, file, binary)

//"build": "esbuild src/index.tsx --bundle --jsx-factory=h --inject:src/lib/h.ts --loader:.ttf=file --outfile=build/app.js && cp src/index.html build/",

function build() {
    if (!fs.existsSync('build'))
        fs.mkdirSync('build');

    require('esbuild').build({
        entryPoints: ['src/index.tsx'],
        outfile: 'build/app.js',
        bundle: true,
        jsxFactory: "h",
        loader: {
            '.ttf': 'file',
            '.otf': 'file'
        },
        //inject: ["node_modules/preact/dist/preact.min.js"],
        //minify: true,
        define: { "process.env.NODE_ENV": "\"development\"" },
        plugins: [scssPlugin, copyPlugin],
        target: 'esnext',
        //pubicPath: '',
        sourcemap: true
    })
        .then(r => { console.log("Build succeeded.") })
        .catch((e) => {
            //console.log("ERROR", e.message);
            process.exit(1)
        })
}

// TODO: use serve() api:
// https://esbuild.github.io/api/#serve

let scssPlugin = {
    name: 'scss',
    setup(build) {
        const fs = require('fs');
        const sass = require('node-sass');
        const aliasImporter = require("node-sass-alias-importer");
        const path = require('path');

        build.onLoad({ filter: /\.(scss)$/ }, async (args) => {
            let filePath = path.resolve(args.path);
            let data = await fs.promises.readFile(filePath, 'utf8')
            let contents = '';
            try {
                if (data) {
                    let result = sass.renderSync({
                        data,
                        includePaths: [], // todo: dynamically add global imports??
                        sourceComments: true,
                        sourceMap: true,
                        // s
                    });
                    contents = result.css;
                    //console.log("render result", result)
                }
                return {
                    contents: contents,
                    loader: 'css'
                };
            } catch (e) {
                //throw e;
                throw new Error("\n\nError rendering SCSS file:\n  " + filePath + " => \n\n" + e.formatted);//, { path: filePath });
            }
        })
    }
};

let copyPlugin = {
    name: 'copy',
    setup(build) {
        let fs = require('fs');
        // todo: pull config array of files/directories
        fs.copyFile('src/index.html', 'build/index.html', (err) => {
            if (err) throw err;
        });

        // todo: copy src/static folder to build/static... if it differs?
        // fs.copyFile('src/index.html', 'build/index.html', (err) => {
        //     if (err) throw err;
        // });
    }
}


// let definePlugin = {
//     name: 'define',
//     setup(build) {
//         let fs = require('fs');

//         build.onLoad({ filter: /\.(t|js)x?$/ }, async (args) => {
//             let text = await fs.promises.readFile(args.path, 'utf8')
//             return {
//                 contents: text,
//                 loader: 'js',
//             }
//         })

//         build.onLoad({ filter: /\.json$/ }, async (args) => {
//             let text = await fs.promises.readFile(args.path, 'utf8')
//             return {
//                 contents: JSON.stringify(text.split(/\s+/)),
//                 loader: 'json',
//             }
//         })
//     }
// };

// const aliases = {
//     styles: "src/styles/"
// }


build();