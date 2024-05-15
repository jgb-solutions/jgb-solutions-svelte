<script lang="ts">
	import PhotonImage from './PhotonImage.svelte'
	import styles from '$lib/styles/track-detail.styles.module.css'

	import type { Snippet } from 'svelte'

	let {
		image,
		title,
		children
	}: {
		image: string
		title: string
		children: Snippet
	} = $props()
</script>

<div class="sm:flex items-end bg-black/50 backdrop-blur-sm rounded-3xl relative sm:static">
	<PhotonImage
		class={styles.image}
		src={image}
		alt={title}
		photon={{
			ulb: true,
			lb: {
				width: 400,
				height: 400
			}
		}}
		{title}
	/>
	<div
		class="flex-1 flex sm:block justify-center sm:pb-4 sm:static absolute bottom-2 left-0 right-0 sm:bg-transparent bg-violet-800/85 mx-8 py-4 sm:m-0 sm:p-0 rounded-3xl sm:rounded-none"
	>
		{@render children()}
	</div>
</div>
