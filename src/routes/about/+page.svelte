<script lang="ts">
	import colors from '$lib/colors'
	import Flex from '$lib/components/Flex.svelte'
	import Logo from '$lib/components/Logo.svelte'
	import SEO from '$lib/components/SEO.svelte'
	import MdFacebook from 'svelte-material-icons/Facebook.svelte'
	import MdTwitter from 'svelte-material-icons/Twitter.svelte'
	import MdYoutube from 'svelte-material-icons/Youtube.svelte'

	const title = 'About us'
	const description = `Contact us for any questions or inquiries.`
</script>

<SEO {title} {description} />

<Flex class="justify-center py-12 bg-black/50 rounded-3xl">
	<div class="text-center">
		<Logo class="mb-4" />

		<p class="mb-4">
			MP3Pam is a free entertainment platform for sharing audios. <br />
			Music is king here!
		</p>

		<div class="mx-auto max-w-fit mb-2">
			<Flex class="items-center justify-between">
				<div class="mr-2">
					<a href="https://www.facebook.com/MP3PamOfficial/" target="_blank">
						<MdFacebook size={36} color={colors.facebook} />
					</a>
				</div>
				<div class="mr-2">
					<a href="https://twitter.com/mp3pam" target="_blank">
						<MdTwitter size={36} color={colors.twitter} />
					</a>
				</div>

				<div>
					<a href="https://www.youtube.com/channel/UCgYbTVuSR7iXQRsrrbQeVxA" target="_blank">
						<MdYoutube size={36} color={colors.youtube} />
					</a>
				</div>
			</Flex>
		</div>

		<p>
			<small>Version 5.5</small>
		</p>

		<p class="mb-4">&copy; {new Date().getFullYear()}</p>

		<!-- <LogoJgb /> -->
	</div>
</Flex>
