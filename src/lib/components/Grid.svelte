<script lang="ts">
	import { clx } from '$lib/helpers'

	import type { Snippet } from 'svelte'

	let {
		class: className,
		children,
		gap,
		...props
	}: {
		children: Snippet
		gap?: number
		class?: string
	} = $props()
</script>

<div
	class={clx(
		`grid grid-cols-12`,
		{
			'gap-0': gap === 0,
			'gap-1': gap === 1,
			'gap-2': gap === 2,
			'gap-3': gap === 3,
			'gap-4': gap === 4,
			'gap-5': gap === 5,
			'gap-6': gap === 6,
			'gap-7': gap === 7,
			'gap-8': gap === 8,
			'gap-9': gap === 9,
			'gap-10': gap === 10,
			'gap-11': gap === 11,
			'gap-12': gap === 12
		},
		className
	)}
	{...props}
>
	{@render children()}
</div>
