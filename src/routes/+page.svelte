<script lang="ts">
	import colors from '$lib/colors'
	import Flex from '$lib/components/Flex.svelte'
	import Logo from '$lib/components/Logo.svelte'
	import SEO from '$lib/components/SEO.svelte'
	import MdLinkedIn from 'svelte-material-icons/Linkedin.svelte'
	import MdTwitter from 'svelte-material-icons/Twitter.svelte'
	import MdGitHub from 'svelte-material-icons/Github.svelte'
</script>

<SEO />

<Flex class="justify-center">
	<div class="text-center">
		<Logo class="mb-4" />

		<p class="mb-4">Something cool is coming soon! 🚀</p>

		<div class="mx-auto max-w-fit mb-2">
			<Flex class="items-center justify-between">
				<div class="mr-2">
					<a href="https://www.linkedin.com/in/jgb-dev/" target="_blank">
						<MdLinkedIn size={36} color={colors.linkedin} />
					</a>
				</div>
				<div class="mr-2">
					<a href="https://x.com/jgb_solutions" target="_blank">
						<MdTwitter size={36} color={colors.twitter} />
					</a>
				</div>

				<div>
					<a href="https://github.com/jgb-solutions" target="_blank">
						<MdGitHub size={36} />
					</a>
				</div>
			</Flex>
		</div>

		<p class="mb-4">&copy; {new Date().getFullYear()}</p>
	</div>
</Flex>
