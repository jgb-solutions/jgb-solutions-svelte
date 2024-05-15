<script lang="ts">
	import { page } from '$app/stores'
	import { PUBLIC_DOMAIN } from '$env/static/public'

	import colors from '$lib/colors'
	import * as C from '$lib/constants'

	let {
		title,
		url,
		description,
		type,
		image,
		artist,
		imageWidth,
		imageHeight
	}: {
		title?: string
		url?: string
		description?: string
		type?: string
		image?: string
		artist?: string
		imageWidth?: number
		imageHeight?: number
	} = $props()

	$effect.pre(() => {
		title
		description
	})

	const getTitleContent = () => `${title || 'Digital Design and Development'} :: ${C.APP_NAME}`
	const getDescriptionContent = () =>
		description ||
		`
     At ${C.APP_NAME}  We are a digital design and development services agency that builds useful
  and enjoying products for our clients and partners. Contact us now to know
  how we can help your succeed.
  `
	const getImageContent = () => image || `${PUBLIC_DOMAIN}/images/social-media-share.png`
	const getUrl = () => url || PUBLIC_DOMAIN + $page.url.pathname

	let feedTypes = ['track', 'artist', 'album']
</script>

<svelte:head>
	<meta property="og:title" content={getTitleContent()} />
	<meta property="og:site_name" content={C.APP_NAME} />
	<meta property="og:url" content={getUrl()} />
	<meta property="og:description" content={getDescriptionContent()} />
	<meta property="og:type" content={type || 'website'} />
	<meta property="og:image" content={getImageContent()} />
	<meta property="og:image:alt" content={getTitleContent()} />
	{#if imageWidth}
		<meta property="og:image:width" content={`${imageWidth}`} />
	{/if}
	{#if imageHeight}
		<meta property="og:image:height" content={`${imageHeight}`} />
	{/if}

	<meta property="fb:app_id" content={C.FB_APP_ID} />
	{#if artist}
		<meta property="music:musician" content={artist} />
	{/if}

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content={`@${C.TWITTER_HANDLE}`} />
	<meta name="twitter:title" content={getTitleContent()} />
	<meta name="twitter:description" content={getDescriptionContent()} />
	<meta name="twitter:image" content={getImageContent()} />
	<meta name="theme-color" content={colors.primary} />
	<title>{getTitleContent()}</title>
	<link rel="canonical" href={getUrl()} />
	{#each feedTypes as type (type)}
		<link
			rel="alternate"
			type="application/rss+xml"
			href={`${PUBLIC_DOMAIN}/feed/${type}.xml`}
			title={`${type.toUpperCase()}'s XML Feed`}
		/>
	{/each}
</svelte:head>
