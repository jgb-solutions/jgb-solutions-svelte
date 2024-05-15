<script lang="ts">
	import { clx } from '$lib/helpers'

	import type { Snippet } from 'svelte'

	let {
		class: className,
		children
	}: {
		class?: string
		children: Snippet
	} = $props()
</script>

<main id="main-content" class={clx('mb-32', className)}>
	{@render children()}
</main>
