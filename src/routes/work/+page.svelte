<script lang="ts">
	import SEO from '$lib/components/SEO.svelte'
	import { AppRoutes } from '$lib/data.svelte'
	import Container from '$lib/components/Container.svelte'
</script>

<SEO />

<Container>
	<section class="uppercase md:flex items-center py-12">
		<div class="mb-12 md:mb-0 md:w-1/2">
			<h2 class="mb-8 md:text-5xl text-3xl font-bold leading-relaxed text-center md:text-left">
				<span>Hi, I'm JGB.</span> <br />
				<span>A Web Engineer</span><br />
				<span class="md:text-4xl">based in New Jersey.</span>
			</h2>

			<div class="text-lg font-bold text-center md:text-left">
				<a href={AppRoutes.pages.contact} class="btn btn-primary text-xl"> Let's talk </a>
			</div>
		</div>

		<div class="flex items-center justify-center">
			<img src="/images/jgb-2022-800.jpg" alt="Jean Gérard" class="rounded-full" width="80%" />
		</div>
	</section>
</Container>
