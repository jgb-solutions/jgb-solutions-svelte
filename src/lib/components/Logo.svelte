<script lang="ts">
	import { AppRoutes as R } from '$lib/routes'
	import { clx } from '$lib/helpers'
	import { APP_NAME } from '$lib/constants'

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

<a href={R.pages.home} class={clx('block', className)} {...props}>
	<img
		class="max-w-full inline-block"
		width={`${sizes?.width}px`}
		height={`${sizes?.height}`}
		src="/images/Logo-JGB-Solutions-500x110.png"
		alt={APP_NAME}
	/>
</a>
