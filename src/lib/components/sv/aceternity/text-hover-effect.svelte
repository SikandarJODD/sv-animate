<script lang="ts">
	import { watch } from 'runed';
	interface Props {
		text?: string;
		duration?: number;
	}

	let { text = '', duration = 0 }: Props = $props();

	let svgRef: any = $state(null);
	let cursor = $state({ x: 0, y: 0 });
	let hovered = $state(false);
	let maskPosition = $state({ cx: '50%', cy: '50%' });

	let cursorChange = () => {
		if (svgRef) {
			let svgRect = svgRef.getBoundingClientRect();
			let cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
			let cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;

			maskPosition = {
				cx: `${cxPercentage}%`,
				cy: `${cyPercentage}%`
			};
		}
	};

	function handleMouseEnter() {
		hovered = true;
	}

	function handleMouseLeave() {
		hovered = false;
	}

	function handleMouseMove(e: MouseEvent) {
		cursor.x = e.clientX;
		cursor.y = e.clientY;
	}

	$effect(() => {
		cursorChange();
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<svg
	bind:this={svgRef}
	width="100%"
	height="100%"
	viewBox="0 0 300 100"
	xmlns="http://www.w3.org/2000/svg"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	onmousemove={(e) => handleMouseMove(e)}
	class="select-none"
>
	<defs>
		<linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
			{#if hovered}
				<stop offset="0%" stop-color="oklch(0.86 0.17 92)" />
				<stop offset="25%" stop-color="oklch(0.64 0.21 25)" />
				<stop offset="50%" stop-color="oklch(0.62 0.19 260)" />
				<stop offset="75%" stop-color="oklch(0.71 0.13 215)" />
				<stop offset="100%" stop-color="oklch(0.61 0.22 293)" />
			{/if}
		</linearGradient>

		<!-- Change the r value to 25% to make the gradient more visible -->
		<radialGradient
			id="revealMask"
			gradientUnits="userSpaceOnUse"
			r="25%"
			cy={maskPosition.cy}
			cx={maskPosition.cx}
		>
			<stop offset="0%" stop-color="white" />
			<stop offset="100%" stop-color="black" />
		</radialGradient>

		<mask id="textMask">
			<rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
		</mask>
	</defs>
	<text
		x="50%"
		y="50%"
		text-anchor="middle"
		dominant-baseline="middle"
		stroke-width="0.3"
		class="fill-transparent stroke-neutral-200 font-[helvetica] text-5xl font-bold transition-all duration-200 dark:stroke-neutral-800"
		style:opacity={hovered ? 0.7 : 0}
	>
		{text}
	</text>

	<text
		x="50%"
		y="50%"
		text-anchor="middle"
		dominant-baseline="middle"
		stroke-width="0.3"
		class="fill-transparent stroke-neutral-200 font-[helvetica] text-5xl font-bold dark:stroke-neutral-700/60"
	>
		{text}
	</text>
	<text
		x="50%"
		y="50%"
		text-anchor="middle"
		dominant-baseline="middle"
		stroke="url(#textGradient)"
		stroke-width="0.3"
		mask="url(#textMask)"
		class="fill-transparent font-[helvetica] text-5xl font-bold"
	>
		{text}
	</text>
</svg>

<style>
	.select-none {
		user-select: none;
	}
</style>
