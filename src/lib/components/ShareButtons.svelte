<script lang="ts">
	import colors from '$lib/colors'
	import MdFacebook from 'svelte-material-icons/Facebook.svelte'
	import MdTwitter from 'svelte-material-icons/Twitter.svelte'
	import MdWhatsApp from 'svelte-material-icons/Whatsapp.svelte'

	let {
		share
	}: {
		share: {
			facebookUrl: string
			twitterUrl: string
			whatsAppUrl: string
		}
	} = $props()
</script>

<div class="flex flex-row mb-4">
	<div class="mr-2">
		<a rel="no-follow" target="_blank" href={share.facebookUrl}>
			<MdFacebook size={36} color={colors.facebook} />
		</a>
	</div>
	<div class="mr-2">
		<a rel="no-follow" target="_blank" href={share.twitterUrl}>
			<MdTwitter size={36} color={colors.twitter} />
		</a>
	</div>
	<div class="mr-2">
		<a rel="no-follow" target="_blank" href={share.whatsAppUrl}>
			<MdWhatsApp size={36} color={colors.whatsapp} />
		</a>
	</div>
</div>
