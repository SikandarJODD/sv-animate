<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		shimmerWidth?: number;
		class?: any;
		children?: import('svelte').Snippet;
	}

	let { shimmerWidth = 100, class: className = '', children }: Props = $props();
</script>

<p
	style:--shimmer-width="{shimmerWidth}px"
	class={cn(
		'mx-auto max-w-md text-neutral-600/50 dark:text-neutral-400/50 ',
		// Shimmer effect
		'animate-shimmer [background-size:var(--shimmer-width)_100%] bg-clip-text [background-position:0_0] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',
		// Shimmer gradient
		'bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80',

		className
	)}
>
	{#if children}
		{@render children()}
	{:else}
		Svelte is Magic
	{/if}
</p>