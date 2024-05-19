<script lang="ts">
	import '$lib/styles/app.css'
	import '@fontsource/roboto/300.css'
	import '@fontsource/roboto/400.css'
	import '@fontsource/roboto/500.css'
	import '@fontsource/roboto/700.css'
	import { inject } from '@vercel/analytics'

	import type { Snippet } from 'svelte'
	import Header from '$lib/components/Header.svelte'
	import { page } from '$app/stores'
	import Footer from '$lib/components/Footer.svelte'

	let { children }: { children: Snippet } = $props()

	if ($page.url.host === 'jgb.solutions') {
		inject()
	}
</script>

<main class="">
	<Header />

	<div class="bg-lightGrey h-screen">
		{@render children()}
	</div>

	<Footer />
</main>

<style>
	:global(body) {
		font-family: 'Roboto', sans-serif;
	}
</style>
