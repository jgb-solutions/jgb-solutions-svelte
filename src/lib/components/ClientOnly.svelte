<script lang="ts">
	import { onMount, type Snippet } from 'svelte'

	let {
		hydrated = false,
		children
	}: {
		hydrated?: boolean
		children: Snippet
	} = $props()

	onMount(() => {
		hydrated = true
	})
</script>

{#if hydrated}
	{@render children()}
{/if}
