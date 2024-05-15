<script lang="ts">
	import { clx } from '$lib/helpers'
	import type { Snippet } from 'svelte'

	const {
		class: className,
		children,
		...props
	}: {
		class?: string
		children: Snippet
	} = $props()
</script>

<li class={className} {...props}>
	{@render children()}
</li>
