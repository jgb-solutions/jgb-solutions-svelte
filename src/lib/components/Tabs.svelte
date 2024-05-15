<script lang="ts" context="module">
	import type { Snippet } from 'svelte'

	export interface TabItemProps {
		icon?: Snippet
		label: string
	}
</script>

<script lang="ts">
	import { clx } from '$lib/helpers'

	let {
		tabs
	}: {
		tabs: TabItemProps[]
	} = $props()

	let selectedTab = $state(0)

	let handleTabChange = (tab: number) => {
		selectedTab = tab
	}

	let selectedTabLabel = $derived(tabs[selectedTab].label)
</script>

<div role="tablist" class="tabs tabs-lifted max-w-fit">
	{#each tabs as { icon, label }, index (index)}
		<button
			role="tab"
			class={clx('tab', {
				'tab-active': index === selectedTab
			})}
			onclick={() => handleTabChange(index)}
			tabindex={index}
		>
			{#if icon}
				<span class="mr-2"> {@render icon()}</span>
				{label}
			{/if}
		</button>
	{/each}
</div>

<slot selected={selectedTabLabel} />
