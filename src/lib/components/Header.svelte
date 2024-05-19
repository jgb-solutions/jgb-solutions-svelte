<script lang="ts">
	import Logo from './Logo.svelte'
	import { clx } from '$lib/helpers'
	import Container from './Container.svelte'
	import { menuItems } from '$lib/data.svelte'
	import MdMenu from 'svelte-material-icons/Menu.svelte'
	import MdClose from 'svelte-material-icons/Close.svelte'

	let isMenuOpen = $state(false)

	const handleOpenMenu = () => {
		isMenuOpen = true
	}

	const handleCloseMenu = () => {
		isMenuOpen = false
	}
</script>

{#snippet Menu()}
	<nav class="md:flex md:items-center md:mr-16 mb-8 md:mb-0">
		{#each Object.keys(menuItems).slice(0, 3) as menuName (menuName)}
			<a
				href={menuItems[menuName]}
				class="mr-8 block mb-4 md:mb-0 hover:border-b-2 w-fit border-black"
			>
				{menuName}
			</a>
		{/each}
	</nav>
	<a class="btn btn-primary" href={menuItems.Contact}>Let's talk</a>
{/snippet}

<header>
	<Container>
		<section class="flex items-center justify-between text-lg font-semibold py-4">
			<h1>
				<a href="/">
					<Logo class="w-64" />
				</a>
			</h1>

			<div class="md:hidden">
				<button onclick={handleOpenMenu}>
					<MdMenu size={36} />
				</button>
			</div>

			<div class="hidden md:flex items-center">
				{@render Menu()}
			</div>

			<div
				class={clx(
					'fixed md:hidden right-0 top-0 bottom-0 w-64 p-4 bg-gradient-to-r from-sitePurple to-sitePink text-white transition ease-in-out duration-300',
					{
						'translate-x-full': !isMenuOpen,
						'translate-x-0': isMenuOpen
					}
				)}
			>
				<button onclick={handleCloseMenu} class="absolute right-2 top-2">
					<MdClose size={36} />
				</button>

				<div class="text-2xl">
					{@render Menu()}
				</div>
			</div>
		</section>
	</Container>
</header>
