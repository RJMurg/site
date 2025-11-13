import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [enhancedImages(), tailwindcss(), sveltekit()],
	test: {
		coverage: {
			reporter: ['json-summary'],
			reportOnFailure: true
		},
		projects: [
			{
				extends: './vite.config.ts',
				plugins: [svelteTesting()],
				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['tests/unit/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**', '.svelte-kit/**', 'build/**', 'node_modules/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['tests/unit/**/*.{test,spec}.{js,ts}'],
					exclude: [
						'src/**/*.svelte.{test,spec}.{js,ts}',
						'.svelte-kit/**',
						'build/**',
						'node_modules/**'
					]
				}
			}
		]
	}
});
