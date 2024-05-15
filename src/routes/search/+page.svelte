<script lang="ts">
	import { clx, getTitle } from '$lib/helpers'
	import Seo from '$lib/components/SEO.svelte'
	import Grid from '$lib/components/Grid.svelte'
	import MdApps from 'svelte-material-icons/Apps.svelte'
	import MdAlbum from 'svelte-material-icons/Album.svelte'
	import { searchState } from '$lib/store/searchStore.svelte'
	import MdMusicNote from 'svelte-material-icons/Music.svelte'
	import MdPersonPinCircle from 'svelte-material-icons/Account.svelte'

	let title = $state('Search for music, artists and albums')
	let tracks = $derived(searchState.results.tracks)
	let artists = $derived(searchState.results.artists)
	let albums = $derived(searchState.results.albums)

	$effect(() => {
		if (searchState.searchTerm) {
			title = getTitle(searchState.searchTerm, {
				tracks,
				artists,
				albums
			})

			document.title = title
		}
	})
	let selectedTab = $state<'all' | 'tracks' | 'artists' | 'albums'>('all')

	let handleTabChange = (tab: typeof selectedTab) => {
		selectedTab = tab
		console.log('tab selected', tab)
	}

	const allTabs = $derived.by(() => [
		{
			icon: AppIcon,
			label: `All (${tracks.length + artists.length + albums.length})`,
			type: 'all' as typeof selectedTab
		},
		{
			icon: MusicIcon,
			label: `Tracks (${tracks.length})`,
			type: 'tracks' as typeof selectedTab
		},
		{
			icon: PersonIcon,
			label: `Artists (${artists.length})`,
			type: 'artists' as typeof selectedTab
		},
		{
			icon: AlbumIcon,
			label: `Albums (${albums.length})`,
			type: 'albums' as typeof selectedTab
		}
	])
</script>

{#snippet AppIcon()}
	<MdApps />
{/snippet}
{#snippet MusicIcon()}
	<MdMusicNote />
{/snippet}
{#snippet PersonIcon()}
	<MdPersonPinCircle />
{/snippet}
{#snippet AlbumIcon()}
	<MdAlbum />
{/snippet}

<Seo {title} description={title} />

<div role="tablist" class="tabs tabs-bordered max-w-fit">
	{#each allTabs as { icon, label, type }, index (type)}
		<button
			role="tab"
			class={clx('tab', {
				'tab-active': type === selectedTab
			})}
			onclick={() => {
				if (type === selectedTab) return

				handleTabChange(type)
			}}
			tabindex={index}
		>
			{#if icon}
				<span class="mr-2"> {@render icon()}</span>
				{label}
			{/if}
		</button>
	{/each}
</div>

<!-- {#if selectedTab === 'all'}
	{#if !!tracks.length && selectedTab === 'all'}
		<div class="mb-6">
			<HeaderTitle text="Tracks" class="text-xs mb-2 mt-2">
				<MdMusicNote />
			</HeaderTitle>
			{@render TracksTab(tracks)}
		</div>
	{/if}

	{#if !!artists.length}
		<div class="mb-6">
			<HeaderTitle text="Artists" class="text-xs mb-2">
				<MdPersonPinCircle />
			</HeaderTitle>
			{@render ArtistsTab(artists)}
		</div>
	{/if}

	{#if !!albums.length}
		<div>
			<HeaderTitle text="Albums" class="text-xs mb-2">
				<MdAlbum />
			</HeaderTitle>
			{@render AlbumsTab(albums)}
		</div>
	{/if}
{/if} -->

<!-- {#if selectedTab === 'tracks'}
	<div class="mt-3">
		{@render TracksTab(tracks)}
	</div>
{/if}

{#if selectedTab === 'artists'}
	<div class="mt-3">
		{@render ArtistsTab(artists)}
	</div>
{/if}

{#if selectedTab === 'albums'}
	<div class="mt-3">
		{@render AlbumsTab(albums)}
	</div>
{/if} -->
