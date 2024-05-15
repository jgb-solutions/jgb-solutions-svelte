<script lang="ts">
	import { clx } from '$lib/helpers'

	let {
		class: className,
		size = 100
	}: {
		class?: string
		size?: number
	} = $props()
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	class={clx('bg-none', className)}
	preserveAspectRatio="xMidYMid"
	viewBox="0 0 100 100"
>
	<path fill="#cd1b54" d="M90.004 51.834a40 40 0 00-80 .332 40 42-.238 0180-.332">
		<animateTransform
			attributeName="transform"
			begin="0s"
			calcMode="linear"
			dur="1s"
			keyTimes="0;1"
			repeatCount="indefinite"
			type="rotate"
			values="0 50 51;360 50 51"
		/>
	</path>
</svg>
