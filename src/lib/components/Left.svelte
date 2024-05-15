<script lang="ts">
	import { AppRoutes as R } from '$lib/routes'
	import NavLink from './NavLink.svelte'
	import MdAlbum from 'svelte-material-icons/Album.svelte'
	import MdApps from 'svelte-material-icons/Apps.svelte'
	import MdHome from 'svelte-material-icons/Home.svelte'
	import MdInfo from 'svelte-material-icons/Information.svelte'
	import MdMusicNote from 'svelte-material-icons/Music.svelte'
	import MdPersonPinCircle from 'svelte-material-icons/Account.svelte'
	import MdQueueMusic from 'svelte-material-icons/PlaylistMusic.svelte'
	import MenuItem from './MenuItem.svelte'
	import Menu from './Menu.svelte'
	import { clx } from '$lib/helpers'
	import { onMount } from 'svelte'

	let isSticky = $state(false)

	onMount(() => {
		window.addEventListener('scroll', handleScroll)

		handleScroll()

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	let {
		closeDrawerLeft,
		class: className
	}: {
		closeDrawerLeft?: (bool: boolean) => void
		class?: string
	} = $props()

	const handleScroll = () => {
		if (window.scrollY > 64) {
			isSticky = true
		} else {
			isSticky = false
		}
	}
	const closeDrawer = () => {
		if (closeDrawerLeft) {
			closeDrawerLeft(false)
		}
	}

	const pagesMenu = [{ name: 'Home', to: R.pages.home, icon: MdHome }]
</script>

<div
	class={clx(className, {
		'sticky top-24 z-[1000] block': isSticky
	})}
>
	<Menu class="mb-4">
		{#each pagesMenu as { to, icon: Icon, name } (to)}
			<MenuItem>
				<NavLink href={to} onclick={closeDrawer}>
					<Icon />
					{name}
				</NavLink>
			</MenuItem>
		{/each}
	</Menu>
</div>
