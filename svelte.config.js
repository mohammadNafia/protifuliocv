import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
}
import adapterStatic from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

export default {
    kit: {
        adapter: adapterStatic(),
        paths: {
            base: dev ? '' : '/protifuliocv'
        }
    }
};
