<script lang="ts">
	import { clx } from '$lib/helpers'

	let { repeat = 1, class: className, ...props }: { repeat: number; class?: string } = $props()
</script>

{#each new Array(repeat).fill(0) as i, j (j)}
	<div class={clx('flex flex-col gap-2', className)} {...props}>
		<div class="skeleton h-32 w-36 mb-1"></div>
		<div class="skeleton h-4 w-32 mb-1"></div>
		<div class="skeleton h-4 w-20"></div>
	</div>
{/each}
