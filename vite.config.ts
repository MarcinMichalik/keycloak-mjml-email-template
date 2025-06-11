import {defineConfig} from 'vite';
import mjmlPlugin from './plugins/vite.plugin.mjml';
import txtPlugin from './plugins/vite.plugins.txt';

export default defineConfig({
    plugins: [
        mjmlPlugin(),
        txtPlugin(),
    ]
});
