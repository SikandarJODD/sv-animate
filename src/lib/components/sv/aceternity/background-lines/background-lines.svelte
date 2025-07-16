<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import BackgroundSvg from './background-svg.svelte';

	interface Props {
		duration?: number;
		class?: string;
		children?: import('svelte').Snippet;
	}

	let { duration = 10, class: _class = '', children }: Props = $props();

	let isMounted = $state(false);
	onMount(() => {
		isMounted = true;
	});
</script>

<!-- md:h-[90vh] -->
<div class={cn('h-[20rem] w-full bg-white md:h-screen dark:bg-black relative', _class)}>
	{#if isMounted}
		<BackgroundSvg {duration} />
	{/if}
	{@render children?.()}
</div>
