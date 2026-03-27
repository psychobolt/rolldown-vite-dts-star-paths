import { defineConfig } from 'vite';
import { dts } from 'rolldown-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: {
        'index': 'src/index.ts',
        'Button/index': 'src/Button/index.ts',
        'Header/index': 'src/Header/index.ts',
      },
      formats: ['es'],
    }
  },
  rolldownOptions: {
    output: {
      codeSplitting: {
        groups: [
          {
            name(id) {
              return id.replace(/^(.*src)[/\\]/, '').replace('.ts', '');
            },
          },
        ],
      }
    }
  }
});