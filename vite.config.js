import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'sweetalert2',
        'sweetalert2-react-content'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          sweetalert2: 'Swal',
          'sweetalert2-react-content': 'SwalReactContent'
        }
      }
    },
  },
});
