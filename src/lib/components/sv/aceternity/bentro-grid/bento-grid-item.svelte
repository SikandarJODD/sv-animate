<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		title: string | Snippet;
		description?: string | Snippet;
		header?: import('svelte').Snippet;
		icon?: import('svelte').Snippet;
	}

	let { class: _class = '', title, description = '', header, icon }: Props = $props();
</script>

<div
	class={cn(
		'group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition-all duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
		_class
	)}
>
	{@render header?.()}
	<div class="transition duration-200 group-hover/bento:translate-x-2">
		{@render icon?.()}
		<div class="my-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
			{#if typeof title === 'string'}
				{title}
			{:else}
				{@render title?.()}
			{/if}
		</div>
		<div class="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
			{#if typeof description === 'string'}
				{description}
			{:else}
				{@render description?.()}
			{/if}
		</div>
	</div>
</div>
