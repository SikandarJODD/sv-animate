<script lang="ts">
	import { cn } from '$lib/utils';
	import { Motion, AnimateSharedLayout } from 'motion-start';

	type Item = {
		title: string;
		desc: string;
		link: string;
	};
	interface Props {
		class?: string;
		items?: Item[];
	}

	let { class: _class = '', items = [] }: Props = $props();
	let hoveredIndex: number | null = $state(null);
	$inspect(hoveredIndex, 'Hover');
</script>

<div class={cn('grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3', _class)}>
	<AnimateSharedLayout type='switch'>
		{#each items as item, idx}
			<button
				class="group relative block h-full w-full p-2"
				onclick={() => {
					hoveredIndex = idx;
					console.log('hoveredIndex', hoveredIndex);
				}}
			>
				<!-- href={item.link} -->
				{#if hoveredIndex === idx}
					<Motion.span
						layout
						layoutId="hoverBackground"
						initial={false}
						animate={{
							opacity: 1,
							transition: { duration: 0.15 }
						}}
						exit={{
							opacity: 0,
							transition: { duration: 0.15, delay: 0.2 }
						}}
						class="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200 dark:bg-slate-800/[0.8]"
					></Motion.span>
				{/if}
				<!-- Card : Here content, card can be anything  -->
				<div
					class="relative z-2 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-black p-4 group-hover:border-slate-700 dark:border-white/[0.2]"
				>
					<div class="text-primary mt-4 font-bold tracking-wide">
						{item.title}
					</div>
					<div class="text-muted-foreground mt-8 text-sm leading-relaxed tracking-wide">
						{item.desc}
					</div>
				</div>
			</button>
		{/each}
	</AnimateSharedLayout>
</div>
