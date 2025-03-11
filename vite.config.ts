import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  // base: process.env.VITE_SITE_URL + '/',
  plugins: [react(), svgrPlugin()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
  },
  server: {
    // historyApiFallback: true,
  },
});
