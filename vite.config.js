import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react', 
        'react-dom',
        'sweetalert2',  // Add SweetAlert2 if it's causing issues
        'sweetalert2-react-content'  // Add SweetAlert2 React Content if it's causing issues
      ],
    },
  },
});
