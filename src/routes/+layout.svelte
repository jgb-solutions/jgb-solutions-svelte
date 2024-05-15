<script lang="ts">
	import '$lib/styles/app.css'
	import '@fontsource/roboto/300.css'
	import '@fontsource/roboto/400.css'
	import '@fontsource/roboto/500.css'
	import '@fontsource/roboto/700.css'
	import { inject } from '@vercel/analytics'

	import type { Snippet } from 'svelte'
	import Header from '$lib/components/Header.svelte'
	import Flex from '$lib/components/Flex.svelte'
	import Left from '$lib/components/Left.svelte'
	import Content from '$lib/components/Content.svelte'
	import { page } from '$app/stores'

	let { children }: { children: Snippet } = $props()

	if ($page.url.host === 'jgb.solutions') {
		inject()
	}
</script>

<main class="max-w-[1000px] mx-auto">
	{@render children()}
</main>

<style>
	:global(body) {
		font-family: 'Roboto', sans-serif;
	}
</style>
