<script lang="ts">
	import { clx } from '$lib/helpers'
	import Logo from './Logo.svelte'
	import Container from './Container.svelte'
	import { menuItems } from '$lib/data.svelte'
	import Socials from './Socials.svelte'
</script>

<footer class="bg-black py-12 text-white">
	<Container>
		<section class="md:flex items-center justify-between mb-16">
			<a href="/">
				<Logo class="mx-auto mb-4 md:mb-0 md:mx-0 w-64" />
			</a>

			<nav class="flex items-center justify-center">
				{#each Object.keys(menuItems).slice(0, 3) as menuName}
					<a
						href={menuItems[menuName]}
						class={clx('block mb-4 md:mb-0 hover:border-b-2 w-fit border-black', {
							'ml-8': menuName !== 'Home'
						})}
					>
						{menuName}
					</a>
				{/each}
			</nav>
		</section>

		<section
			class="md:flex md:items-center md:justify-between text-center md:text-left px-4 md:px-0"
		>
			<p class="uppercase mb-4 md:mb-0">&copy; {new Date().getFullYear()}</p>

			<Socials class="mb-4" />
		</section>
	</Container>
</footer>
