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

<div class={clx(`flex flex-row`, className)}>
	{@render children()}
</div>
