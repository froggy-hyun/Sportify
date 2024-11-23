import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import VitePluginHtmlEnv from 'vite-plugin-html-env';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePluginHtmlEnv({
      compiler: true,
    }),
  ],
});
