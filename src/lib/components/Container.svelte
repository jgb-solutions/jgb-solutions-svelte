<script lang="ts">
	import { clx } from '$lib/helpers'

	import type { Snippet } from 'svelte'

	let {
		class: className,
		children,
		...props
	}: {
		class?: string
		children: Snippet
	} = $props()
</script>

<div class={clx('max-w-7xl mx-auto px-4', className)} {...props}>
	{@render children()}
</div>
