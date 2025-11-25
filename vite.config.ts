import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Impostando './' il sito funzionerà su qualsiasi repository GitHub 
  // senza bisogno di specificare il nome esatto.
  base: './', 
});