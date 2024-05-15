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

<div class={clx('mx-auto', className)} {...props}>
	{@render children()}
</div>
