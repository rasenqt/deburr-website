import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Sostituisci 'nome-tua-repository' con il nome esatto della tua repository GitHub
  // Esempio: se la repo è 'deburr-sito', scrivi: base: '/deburr-sito/',
  base: '/nome-tua-repository/', 
});