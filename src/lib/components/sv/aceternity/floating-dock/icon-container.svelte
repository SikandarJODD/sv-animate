<script lang="ts">
	import { Motion, useTransform, useSpring } from 'motion-start';
	import type { MotionValue } from 'motion-start';
	import { fade } from 'svelte/transition';

	interface Props {
		containerX: MotionValue<number>;
		mouseX: MotionValue<number>;
		title: any;
		icon: any;
		href: any;
	}

	let { containerX, mouseX, title, icon, href }: Props = $props();

	let ref: HTMLElement | null = $state(null);

	let distance = useTransform(mouseX, (val) => {
		const bounds = ref?.getBoundingClientRect() ?? {
			x: 0,
			width: 0,
			left: 0
		};

		const XDiffToContainerX = bounds?.x - containerX.get();

		return val - bounds?.width / 2 - XDiffToContainerX;
	});
	let widthSync = useTransform(distance, [-110, 0, 110], [40, 80, 40]);
	//   Adjust stiffness and damping as per needs
	let width = useSpring(widthSync, { stiffness: 400, damping: 25 });

	let hovered = $state(false);

	function handleMouseEnter() {
		hovered = true;
	}

	function handleMouseLeave() {
		hovered = false;
	}
  let SvelteComponent = icon;
</script>

<a {href}>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<Motion.div
		style={{
			width: width
		}}
		transition={{
			bounceDamping: 300,
			bounceStiffness: 800,
			bounce: 0.3,
			duration: 0.8
		}}
	>
		<div
			bind:this={ref}
			onmouseenter={handleMouseEnter}
			onmouseleave={handleMouseLeave}
			class="group relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
		>
			{#if hovered}
				<div
					in:fade
					out:fade
					class="absolute -top-8 left-1/2 w-fit -translate-x-1/2 rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
				>
					{title}
				</div>
			{/if}
			<div
				class="flex items-center justify-center transition-all duration-200 group-hover:scale-125"
			>
				<SvelteComponent strokeWidth={1.4} class=" text-neutral-500 dark:text-neutral-300" />
			</div>
		</div>
	</Motion.div>
</a>
