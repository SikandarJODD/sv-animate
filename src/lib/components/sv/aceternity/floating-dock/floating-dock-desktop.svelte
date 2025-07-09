<script lang="ts">
	import { Motion, useMotionValue } from 'motion-start';
	import IconContainer from './icon-container.svelte';

	type Item = {
		title: string;
		icon: any;
		href: string;
	};
	interface Props {
		items?: Item[];
		className?: string;
	}

	let { items = [], className = '' }: Props = $props();

	const mouseX = useMotionValue(Infinity);
	const containerX = useMotionValue(0);

	let containerRef: HTMLDivElement | null = $state(null);
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<Motion.div>
	<div
		bind:this={containerRef}
		onmouseleave={() => mouseX.set(Infinity)}
		onmousemove={(e) => {
			if (containerRef) {
				const rect = containerRef.getBoundingClientRect();
				if (rect) {
					mouseX.set(e.clientX - rect.left);
					containerX.set(rect.x);
				}
			}
		}}
		class="mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 md:flex dark:bg-neutral-900 {className}"
	>
		{#each items as item (item.title)}
			<IconContainer {mouseX} {containerX} {...item} />
		{/each}
	</div>
</Motion.div>
