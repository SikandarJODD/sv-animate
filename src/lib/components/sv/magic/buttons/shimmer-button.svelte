<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		shimmerColor?: string;
		shimmerSize?: string;
		shimmerDuration?: string;
		borderRadius?: string;
		background?: string;
		darkbg?: string;
		class?: any;
		children?: Snippet;
	}

	let {
		shimmerColor = '#ffffff',
		shimmerSize = '0.05em',
		shimmerDuration = '3s',
		borderRadius = '100px',
		background = 'rgba(0, 0, 0, 1)',
		class: className = '',
		children
	}: Props = $props();
</script>

<button
	style:--spread="90deg"
	style:--shimmer-color={shimmerColor}
	style:--radius={borderRadius}
	style:--speed={shimmerDuration}
	style:--cut={shimmerSize}
	style:--bg={background}
	class={cn(
		'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-6 py-3 whitespace-nowrap text-black [background:var(--bg)] dark:text-white ',
		'transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]',
		className
	)}
>
	<div class={cn('-z-30 blur-[2px]', '[container-type:size] absolute inset-0 overflow-visible')}>
		<div
			class="animate-magic-slide absolute inset-0 [aspect-ratio:1] h-[100cqh] [border-radius:0] [mask:none]"
		>
			<!--  spark before  -->
			<div
				class="animate-spin-around absolute inset-[-100%] w-auto [translate:0_0] rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"
			></div>
		</div>
	</div>
	{#if children}
		{@render children()}
	{:else}
		Shimmer Button
	{/if}
	<!-- Highlight -->
	<div
		class={cn(
			'absolute inset-0 h-full w-full',

			'rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]',

			// transition
			'transform-gpu transition-all duration-300 ease-in-out',

			// on hover
			'group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]',

			// on click
			'group-active:shadow-[inset_0_-10px_10px_#ffffff3f]'
		)}
	></div>
	<!-- backdrop -->
	<div
		class={cn(
			'absolute [inset:var(--cut)] -z-20 [border-radius:var(--radius)] [background:var(--bg)] '
		)}
	></div>
</button>
