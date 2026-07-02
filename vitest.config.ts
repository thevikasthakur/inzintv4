import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

// Root Vitest config. Pure-data tests run in a node environment (no DOM).
// The `@/*` -> `./src/*` alias mirrors tsconfig `paths` so tests can import
// modules the same way the app does, without pulling in an extra plugin dep.
export default defineConfig({
  test: {
    environment: 'node',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
