<script lang="ts">
	import { AppRoutes as R } from '$lib/routes'
	import { clx } from '$lib/helpers'

	let {
		class: className,
		...props
	}: {
		class?: string
	} = $props()
</script>

<a
	target="_blank"
	href={R.links.jgbSolutions}
	class={clx('mb-1 inline-block', className)}
	rel="noopener noreferrer"
	{...props}
>
	<img
		class="max-w-full w-52"
		src="/images/Logo-JGB-Solutions-500x110.png"
		alt="JGB Solutions logo"
	/>
</a>
