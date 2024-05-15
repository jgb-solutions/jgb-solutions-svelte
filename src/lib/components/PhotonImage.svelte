<script lang="ts">
	import { clx } from '$lib/helpers'
	import { makePhotonUrl } from '$lib/photon'
	import type { PhotonInterface } from '$lib/photon'

	const {
		src,
		photon,
		class: className,
		...props
	}: {
		src: string
		title?: string
		alt?: string
		photon?: PhotonInterface
		class?: string
	} = $props()

	let cdnSource = $derived.by((): string => {
		if (photon) {
			photon.quality = photon.quality || 80

			return makePhotonUrl(photon, src.replace(/(^\w+:|^)\/\//, ''))
		}

		return src
	})
</script>

<img
	class={clx('rounded-2xl max-w-full', className)}
	loading="lazy"
	{...props}
	src={cdnSource}
	width={`${photon?.width}px`}
	height={`${photon?.height}px`}
/>
