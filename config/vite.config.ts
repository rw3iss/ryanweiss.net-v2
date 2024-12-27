import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return defineConfig({
        root: resolve(__dirname, '../'),
        publicDir: resolve(__dirname, '../public'),
        logLevel: 'info',
        plugins: [
            tsconfigPaths({
                root: "../"
            }),
            // dts({
            //     tsconfigPath: '../tsconfig.json',
            //     exclude: [
            //         'node_modules'
            //     ],
            // }),
            react(),
            EnvironmentPlugin(['SITE_NAME', 'DEFAULT_TIMEZONE', 'API_URL', 'IDB_NAME', 'IDB_VERSION'])
        ],
        resolve: {
            alias: {
                '@public': resolve(__dirname, '../public'),
            },
        },
    })

}