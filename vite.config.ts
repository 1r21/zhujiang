import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import svgr from '@honkhonk/vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  // ref: https://github.com/vitejs/vite/issues/1930
  const { VITE_API_HOST } = loadEnv(mode, process.cwd());
  
  return {
    define: {
      __API_HOST__: JSON.stringify(VITE_API_HOST),
    },
    plugins: [svelte()]
  }
})