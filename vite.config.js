import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  devServer: {
    historyApiFallback: true
  },
  base: "/project_react_ghardaia_flacons/",
});