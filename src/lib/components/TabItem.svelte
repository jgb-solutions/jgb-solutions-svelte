<script lang="ts">
	import type { Snippet } from 'svelte'

	let {
		label,
		selected,
		children
	}: {
		label: string
		selected: string
		children: Snippet
	} = $props()
</script>

{#if label === selected}
	{@render children()}
{/if}
