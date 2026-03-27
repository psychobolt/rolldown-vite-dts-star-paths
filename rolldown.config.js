import { defineConfig } from 'rolldown';
import { dts } from 'rolldown-plugin-dts';

export default defineConfig({
  input: {
    'index': 'src/index.ts',
    'Button/index': 'src/Button/index.ts',
    'Header/index': 'src/Header/index.ts',
  },
  plugins: [dts()],
  output: {
    cleanDir: true,
    dir: 'dist',
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
});