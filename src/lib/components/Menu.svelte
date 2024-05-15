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

<ul class={clx('menu rounded-box py-0', className)} {...props}>
	{@render children()}
</ul>
