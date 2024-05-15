<script lang="ts">
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { clx } from '$lib/helpers'
	import Flex from './Flex.svelte'
	import Logo from './Logo.svelte'
	// import Right from './Right.svelte'
	// import { Avatar, Divider, Drawer, Dropdown } from 'react-daisyui'
	import MdArrowDown from 'svelte-material-icons/ArrowDown.svelte'
	import MdLogin from 'svelte-material-icons/Login.svelte'
	// import MdLogout from 'svelte-material-icons/Logout.svelte'
	import MdMenu from 'svelte-material-icons/Menu.svelte'

	let isSticky = $state(false)
	let pathname = $page.url.pathname
	let drawerLeftOPen = $state(false)
	let drawerRightOPen = $state(false)
	// Menu
	let menuAnchorEl = $state<null | HTMLElement>(null)
	let open = $derived(Boolean(menuAnchorEl))

	// let handleOpenMenu = (event) => {
	// 	menuAnchorEl = event.currentTarget
	// }
	let handleCloseMenu = () => {
		menuAnchorEl = null
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll)

		handleScroll()

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	const handleScroll = () => {
		if (window.scrollY > 64) {
			isSticky = true
		} else {
			isSticky = false
		}
	}
</script>

<div
	class={clx('pt-2 px-2 transition delay-50 sm:rounded-br-3xl sm:rounded-bl-3xl', {
		'bg-black/85 sticky top-0 z-[1000]': isSticky
	})}
>
	<Flex class="items-center">
		<Logo class="px-4 mt-3 w-44 mr-2 mb-auto" />

		<div class="px-2 hidden sm:block mb-auto ml-4 w-44">&nbsp;</div>
	</Flex>
</div>
<div class="">
	<!-- <div class="">
		<div class="">
			<button
				class={clx('btn btn-circle btn-primary', 'text-inherit')}
				aria-label="Open left menu"
				onclick={() => {
					drawerLeftOPen = true
					drawerRightOPen = true
				}}
			>
				<MdMenu />
			</button>

			{#if isLoggedIn}
				<div class="" onclick={() => (drawerRightOPen = true)}>
					<Avatar src={currentUser.avatarUrl} class="" />
					<MdArrowDown />
				</div>

				<button onclick={handleOpenMenu} class={clx('text-inherit')}>
					<Avatar src={currentUser.avatarUrl} class="" />
					<MdArrowDown />
				</button>
			{:else}
				<a
					href={`${R.pages.login}?returnTo=${pathname}`}
					class="no-underline btn btn-sm btn-secondary btn-outline text-inherit transform-none"
				>
					<MdLogin />
					<span class="text-sm sm:text-base">Log In</span>
				</a>
			{/if}
		</div>
	</div> -->

	<!-- Left Drawer -->
	<!---<Drawer side="left" open={drawerLeftOPen}>
        <div class="">
          <Left closeDrawerLeft={setDrawerLeftOpen} />
        </div>
      </Drawer> --->
	<!-- {#if isLoggedIn}
		<Drawer side="right" open={drawerRightOPen}>
			<div class="">{currentUser && <Right closeDrawerRight={setDrawerRightOpen} />}</div>
		</Drawer>

		<Dropdown.Details {open} onClose={handleCloseMenu} onclick={handleCloseMenu}>
			<Dropdown.Menu>
				<Dropdown.Item>
					<Link href={R.pages.account}>
						<Avatar src={currentUser.avatarUrl || ''} /> Account
					</Link>
				</Dropdown.Item>
			</Dropdown.Menu>

			<Divider />

			<Dropdown.Menu>
				<Dropdown.Item onclick={handleLogout}>
					<button class="transform-none btn-lg btn-outline">
						<MdLogout />
						Log out
					</button>
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown.Details>
	{/if} -->
</div>
