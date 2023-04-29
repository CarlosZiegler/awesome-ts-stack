import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		environment: 'node',
		setupFiles: ['./src/__tests__/vitest/setup-file.ts'],
		testTimeout: 5000,
		includeSource: ['src/**/*.{js,ts,tsx,jsx}'],
		logHeapUsage: true,
		coverage: {
			reporter: ['text', 'html'],
		},
		benchmark: {
			outputFile: './bench.json',
			reporters: ['json', 'default'],
		},
	},
	define: {
		'import.meta.vitest': true,
	},
});
