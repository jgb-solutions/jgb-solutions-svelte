<script lang="ts">
	import { AppRoutes as R } from '$lib/routes'
	import { clx } from '$lib/helpers'
	import { page } from '$app/stores'
	import type { Snippet } from 'svelte'

	let {
		class: className,
		shouldAuth = false,
		href,
		children,
		onclick,
		...props
	}: {
		class?: string
		shouldAuth?: boolean
		href: string
		children: Snippet
		onclick?: () => void
	} = $props()

	let isActive = $derived($page.url.pathname.includes(href))
</script>

<a
	{onclick}
	{href}
	class={clx(
		'mb-1 no-underline hover:text-[#cd1b54] link',
		'font-bold uppercase hover:bg-black/50',
		{
			'text-white': !isActive,
			'text-[#cd1b54] bg-black/85': isActive
		},
		className
	)}
	{...props}
>
	{@render children()}
</a>
