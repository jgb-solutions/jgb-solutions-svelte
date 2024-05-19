<script lang="ts">
	import Flex from '$lib/components/Flex.svelte'
	import SEO from '$lib/components/SEO.svelte'

	const title = 'About us'
	const description = `Contact us for any questions or inquiries.`
</script>

<SEO {title} {description} />

<Flex class="justify-center py-12 ">
	<div class="text-center">
		<p class="mb-4">
			MP3Pam is a free entertainment platform for sharing audios. <br />
			Music is king here!
		</p>

		<p class="mb-4">&copy; {new Date().getFullYear()}</p>
	</div>
</Flex>
