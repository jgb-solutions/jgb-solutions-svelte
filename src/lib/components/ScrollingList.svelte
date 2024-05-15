<script lang="ts">
	import { clx } from '$lib/helpers'
	import ArrowLeft from 'svelte-material-icons/ArrowLeft.svelte'
	import ArrowRight from 'svelte-material-icons/ArrowRight.svelte'
	import styles from '$lib/styles/scrollingList.styles.module.css'

	import type { Snippet } from 'svelte'

	let {
		title,
		link,
		children,
		class: className,
		outerClass,
		color,
		...props
	}: {
		title: string
		link: string
		class?: string
		outerClass?: string
		children: Snippet
		color?:
			| 'primary'
			| 'secondary'
			| 'accent'
			| 'neutral'
			| 'info'
			| 'success'
			| 'warning'
			| 'error'
	} = $props()
	const distance = 400

	let domEl = $state<HTMLElement | null>(null)

	const scroll = (dir: string) => {
		if (!domEl) return

		if (dir === 'left') {
			domEl.scrollTo({
				left: domEl.scrollLeft - distance,
				behavior: 'smooth'
			})
		} else {
			domEl.scrollTo({
				left: domEl.scrollLeft + distance,
				behavior: 'smooth'
			})
		}
	}
</script>

<div class={clx(styles.outerContainer)} {...props}>
	<div class="flex justify-between">
		<a href={link} class="text-white no-underline">
			<h2 class="text-lg uppercase">{title}</h2>
		</a>
		<div>
			<button
				class={clx('btn btn-circle btn-sm', {
					'btn-primary': color === 'primary',
					'btn-secondary': color === 'secondary',
					'btn-accent': color === 'accent',
					'btn-neutral': color === 'neutral',
					'btn-info': color === 'info',
					'btn-success': color === 'success',
					'btn-warning': color === 'warning',
					'btn-error': color === 'error'
				})}
				onclick={() => scroll('left')}
			>
				<ArrowLeft class="btn btn-circle btn-sm btn-outline" />
			</button>
			&nbsp;
			<button
				class={clx('btn btn-circle btn-sm', {
					'btn-primary': color === 'primary',
					'btn-secondary': color === 'secondary',
					'btn-accent': color === 'accent',
					'btn-neutral': color === 'neutral',
					'btn-info': color === 'info',
					'btn-success': color === 'success',
					'btn-warning': color === 'warning',
					'btn-error': color === 'error'
				})}
				onclick={() => scroll('right')}
			>
				<ArrowRight class="btn btn-circle btn-sm btn-outline" />
			</button>
		</div>
	</div>
	<div class={clx(className, styles.container, {})} bind:this={domEl}>
		{@render children()}
	</div>
</div>
