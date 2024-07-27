import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tsconfigPaths({
            loose: true
        }),
        react(),
        EnvironmentPlugin(['SITE_NAME', 'DEFAULT_TIMEZONE', 'API_URL'])
    ]
})
