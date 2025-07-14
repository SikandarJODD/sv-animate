<script lang="ts">
	import { scale } from 'svelte/transition';
	interface Props {
		zoomFactor?: number;
		lensSize?: number;
		isStatic?: boolean;
		position?: any;
		hovering: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		zoomFactor = 1.5,
		lensSize = 170,
		isStatic = false,
		position = $bindable({ x: 200, y: 150 }),
		hovering = $bindable(),
		children
	}: Props = $props();

	let mousePosition = $state({ x: 100, y: 100 });

	const handleMouseMove = (e: {
		currentTarget: { getBoundingClientRect: () => any };
		clientX: number;
		clientY: number;
	}) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		mousePosition = { x, y };
		position = { x, y };
	};
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="relative z-20 cursor-none overflow-hidden rounded-2xl"
	onmouseenter={() => (hovering = true)}
	onmouseleave={() => (hovering = false)}
	onmousemove={handleMouseMove}
>
	{@render children?.()}
	{#if isStatic && hovering}
		<div
			in:scale
			out:scale={{ duration: 400 }}
			class="absolute inset-0 overflow-hidden"
			style="
          mask-image: radial-gradient(circle {lensSize /
				2}px at {position.x}px {position.y}px,black 100%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle {lensSize /
				2}px at {position.x}px {position.y}px,black 100%, transparent 100%);
          transform-origin: {position.x}px {position.y}px;
        "
		>
			<div
				class="absolute inset-0"
				style="transform: scale({zoomFactor}); transform-origin: {position.x}px {position.y}px;"
			>
				{@render children?.()}
			</div>
		</div>
	{:else if hovering}
		<div
			transition:scale={{ duration: 400 }}
			class="absolute inset-0 overflow-hidden"
			style="
              mask-image: radial-gradient(circle {lensSize /
				2}px at {mousePosition.x}px {mousePosition.y}px,black 100%, transparent 100%);
              -webkit-mask-image: radial-gradient(circle {lensSize /
				2}px at {mousePosition.x}px {mousePosition.y}px,black 100%, transparent 100%);
              transform-origin: {mousePosition.x}px {mousePosition.y}px;
              z-index: 50;
            "
		>
			<div
				class="absolute inset-0"
				style="transform: scale({zoomFactor}); transform-origin: {mousePosition.x}px {mousePosition.y}px;"
			>
				{@render children?.()}
			</div>
		</div>
	{/if}
</div>
