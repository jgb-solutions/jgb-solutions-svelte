<script lang="ts">
	import { AppRoutes as R } from '$lib/data.svelte'
	import { clx } from '$lib/helpers'
	import { APP_NAME } from '$lib/constants'

	const whiteLogoUrl =
		'https://i0.wp.com/jgb.solutions/assets/images/logo-jgb-solutions-21k.png?&w=200'
	const blackLogoUrl =
		'https://i0.wp.com/files.jgb.solutions/jgb.solutions/Logo%20JGB%20Solutions-02.png?&w=200'

	let {
		size,
		class: className,
		...props
	}: {
		class?: string
		size?: number
	} = $props()

	let sizes = $state<{
		[key: string]: string | number
	}>({})

	$effect(() => {
		if (size) {
			sizes = {
				width: size,
				height: 'auto'
			}
		}
	})
</script>

<img
	class={clx('max-w-full inline-block', className)}
	{...props}
	width={`${sizes?.width}px`}
	height={`${sizes?.height}`}
	src={'/images/Logo-JGB-Solutions-500x110.png'}
	alt={APP_NAME}
/>
