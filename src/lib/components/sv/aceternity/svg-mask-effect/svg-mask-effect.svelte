<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { cn } from '$lib/utils';

	interface Props {
		size?: number;
		revealSize?: number;
		class?: string;
		def?: import('svelte').Snippet;
		reveal?: import('svelte').Snippet;
	}

	let { size = 50, revealSize = 300, class: className = '', def, reveal }: Props = $props();

	let isHovered = $state(false);
	let mousePosition = $state({ x: 0, y: 0 });
	let containerRef: HTMLElement | null = $state(null);

	const updateMousePosition = (e: MouseEvent) => {
		const rect = containerRef?.getBoundingClientRect();
		let x = e.clientX - (rect?.left ?? 0);
		let y = e.clientY - (rect?.top ?? 0);
		mousePosition = { x, y };
	};

	onMount(() => {
		if (containerRef) {
			containerRef.addEventListener('mousemove', updateMousePosition);
		}
	});

	onDestroy(() => {
		if (containerRef) {
			containerRef.removeEventListener('mousemove', updateMousePosition);
		}
	});

	let maskSize = $derived(isHovered ? revealSize : size);
</script>

<div bind:this={containerRef} class={cn('relative bg-white', className)}>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="bg-grid-white/[0.2] absolute flex h-full w-full items-center justify-center bg-black text-6xl text-white"
		style="
        mask-position: {mousePosition.x - maskSize / 2}px {mousePosition.y - maskSize / 2}px;
        mask-image: var(--mask-svg);
        mask-size: {maskSize}px;
        mask-repeat: no-repeat;
      "
	>
		<div class="absolute inset-0 z-0 h-full w-full bg-black opacity-50"></div>
		<div
			onmouseenter={() => (isHovered = true)}
			onmouseleave={() => (isHovered = false)}
			class="relative z-20 mx-auto max-w-4xl text-center text-4xl font-bold text-white"
		>
			{@render def?.()}
		</div>
	</div>

	<div class="flex h-full w-full items-center justify-center text-white">
		{@render reveal?.()}
	</div>
</div>

<style>
	:root {
		--mask-svg: url('./mask.svg');
	}
</style>
