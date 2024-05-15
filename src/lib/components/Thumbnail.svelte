<script lang="ts">
	import { clx } from '$lib/helpers'
	import { getCdnUrl } from '$lib/photon'
	import PlayCircleOutline from 'svelte-material-icons/PlayCircleOutline.svelte'
	import PauseCircleOutline from 'svelte-material-icons/PauseCircleOutline.svelte'

	let {
		link,
		color = 'primary',
		imageUrl,
		showPauseButton = false,
		showPlayButton = false,
		title,
		shouldOptimize = true,
		titleInMiddle = false,
		class: className,
		...props
	}: {
		link: string
		imageUrl: string
		title: string
		showPauseButton?: boolean
		showPlayButton?: boolean
		shouldOptimize?: boolean
		titleInMiddle?: boolean
		color?:
			| 'primary'
			| 'secondary'
			| 'accent'
			| 'neutral'
			| 'info'
			| 'success'
			| 'warning'
			| 'error'
		class?: string
	} = $props()

	const styles = {
		icon: 'text-white text-6xl opacity-100 btn btn-circle'
	}
</script>

<div class="mr-1 sm:mr-2">
	<div
		class={clx(
			'relative w-40 h-40 text-wrap rounded-3xl overflow-hidden border-2',
			{
				'border-primary': color === 'primary',
				'border-secondary': color === 'secondary',
				'border-accent': color === 'accent',
				'border-neutral': color === 'neutral',
				'border-info': color === 'info',
				'border-success': color === 'success',
				'border-warning': color === 'warning',
				'border-error': color === 'error'
			},
			className
		)}
		{...props}
	>
		<a href={link}>
			<img
				alt={title || 'thumbnail image'}
				src={getCdnUrl(
					imageUrl,
					{
						ulb: true,
						lb: {
							width: 250,
							height: 250
						}
					},
					shouldOptimize
				)}
			/>

			<div
				class={clx(
					'absolute group bg-opacity-10 bg-black inset-0 flex flex-col items-center justify-center hover:bg-opacity-50',
					{
						'bg-opacity-50': titleInMiddle
						// "bg-opacity-70": !titleInMiddle,
					}
				)}
			>
				<button
					class={clx('opacity-0 group-hover:opacity-100', {
						'opacity-100': titleInMiddle
					})}
				>
					<PauseCircleOutline
						class={clx(styles.icon, {
							block: showPauseButton,
							hidden: !showPauseButton
						})}
					/>

					<PlayCircleOutline
						class={clx(styles.icon, {
							block: showPlayButton,
							hidden: !showPlayButton
						})}
					/>
				</button>

				{#if titleInMiddle}
					<h3 class="text-sm my-1">{title}</h3>
				{/if}
			</div>
		</a>
	</div>
	{#if !titleInMiddle}
		<h3>{title}</h3>
	{/if}
</div>
