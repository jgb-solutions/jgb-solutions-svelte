<script lang="ts">
	import { AppRoutes as R } from '$lib/routes'
	import Thumbnail from './Thumbnail.svelte'

	import type { GenreWithTrackCount } from '$lib/interfaces'

	let {
		genre,
		...props
	}: {
		genre: GenreWithTrackCount
	} = $props()
</script>

<Thumbnail
	{...props}
	link={R.genre.detailPage(genre.id)}
	imageUrl={'/images/genres.jpg'}
	title={`${genre.name} (${genre.tracksCount}`}
	shouldOptimize={false}
	showPlayButton={true}
	titleInMiddle
	color="info"
/>
