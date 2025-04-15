import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
		globals: true,
    environment: 'jsdom',
		setupFiles: ["./src/setupTests.ts"],
    exclude: [...configDefaults.exclude, 'packages/template/*'],
  },
})