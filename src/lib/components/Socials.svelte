<script lang="ts">
	import { socialNetworks } from '$lib/data.svelte'
	import { clx } from '$lib/helpers'

	let {
		class: className,
		...props
	}: {
		class?: string
	} = $props()
</script>

<div
	class={clx('md:flex md:items-center md:justify-between text-center md:text-left px-4 md:px-0')}
	{...props}
>
	<div class="text-lightGrey flex justify-between md:block">
		{#each socialNetworks as { Icon, title, link }}
			<a {title} href={link} rel="noreferrer" class="border inline-block p-2 md:ml-4">
				<Icon size={32} />
			</a>
		{/each}
	</div>
</div>
