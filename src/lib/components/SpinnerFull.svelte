<script lang="ts">
	import Spinner from './Spinner.svelte'

	let { class: className, size }: { class?: string; size?: number } = $props()
</script>

<div class="flex h-screen justify-content-center pt-16">
	<Spinner {size} class={className} />
</div>
