<script lang="ts">
	import { scale } from 'svelte/transition';
	interface Props {
		x: any;
		y: any;
		title?: string;
	}

	let { x, y, title = 'William Shakespeare' }: Props = $props();

	let colors = [
		'oklch(0.68 0.15 237)', // hex : #0ea5e9
		'oklch(0.56 0.00 0)',
		'oklch(0.70 0.12 183)',
		'oklch(0.72 0.19 150)',
		'oklch(0.62 0.19 260)',
		'oklch(0.64 0.21 25)',
		'oklch(0.80 0.16 86)'
	];

	let randomColor = $derived(colors[Math.floor(Math.random() * colors.length)]);
</script>

<div
	class="absolute z-50 rounded-full"
	style="top: {y}px; left: {x}px; pointer-events: none;"
	in:scale
>
	<svg
		stroke="currentColor"
		fill="currentColor"
		stroke-width="1"
		style="transform: rotate(-70deg) translateX(-2px) translateY(-15px); "
		viewBox="0 0 16 16"
		class="h-6 w-6 stroke-sky-600 text-sky-500"
		height="1em"
		width="1em"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
		></path>
	</svg>

	<div
		class="min-w-max rounded-full bg-neutral-200 px-4 py-2 text-xs whitespace-nowrap text-white"
		style="background-color: {randomColor};"
	>
		{title}
	</div>
</div>
