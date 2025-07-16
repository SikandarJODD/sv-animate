<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		title: string;
		description: string;
		icon: any;
		index: number;
	}

	let { title, description, icon, index }: Props = $props();
</script>

<div
	class={cn(
		'group/feature relative flex  flex-col py-10 lg:border-r dark:border-neutral-800',
		(index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
		index < 4 && 'lg:border-b dark:border-neutral-800'
	)}
>
	{#if index < 4}
		<div
			class="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800"
		></div>
	{/if}
	{#if index >= 4}
		<div
			class="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800"
		></div>
	{/if}
	<div class="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
		<img src={icon} alt="svg_logo" />
	</div>
	<div class="relative z-10 mb-2 px-10 text-lg font-bold">
		<div
			class="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700"
		></div>
		<span
			class="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100"
		>
			{title}
		</span>
	</div>
	<p class="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">
		{description}
	</p>
</div>
