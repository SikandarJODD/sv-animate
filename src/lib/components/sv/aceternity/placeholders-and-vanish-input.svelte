<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	// Props interface
	type Props = {
		placeholders?: string[];
		onSubmit: (value: string) => void;
	};
	const { placeholders = [], onSubmit }: Props = $props();

	// Typed state variables
	let currentPlaceholder = $state<number>(0);
	let intervalRef: number | null = null;
	let value = $state<string>('');
	let animating = $state<boolean>(false);
	let canvasRef = $state<HTMLCanvasElement | null>(null);
	let inputRef = $state<HTMLInputElement | null>(null);

	// Pixel data type
	interface Pixel {
		x: number;
		y: number;
		color: [number, number, number, number];
	}
	// Animated data type
	interface AnimatedPixel {
		x: number;
		y: number;
		r: number;
		color: string;
	}

	let newDataRef: AnimatedPixel[] = [];

	const startAnimation = () => {
		intervalRef = window.setInterval(() => {
			currentPlaceholder = (currentPlaceholder + 1) % placeholders.length;
		}, 3000);
	};

	const handleVisibilityChange = () => {
		if (document.visibilityState !== 'visible' && intervalRef !== null) {
			clearInterval(intervalRef);
			intervalRef = null;
		} else if (document.visibilityState === 'visible') {
			startAnimation();
		}
	};

	onMount(() => {
		startAnimation();
		document.addEventListener('visibilitychange', handleVisibilityChange);

		return () => {
			if (intervalRef !== null) {
				clearInterval(intervalRef);
			}
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	});

	function draw(): void {
		if (!inputRef || !canvasRef) return;
		const ctx = canvasRef.getContext('2d');
		if (!ctx) return;

		const width = 800;
		const height = 800;
		canvasRef.width = width;
		canvasRef.height = height;
		ctx.clearRect(0, 0, width, height);

		const styles = getComputedStyle(inputRef);
		const fontSize = parseFloat(styles.getPropertyValue('font-size'));
		ctx.font = `${fontSize * 2}px ${styles.fontFamily}`;
		ctx.fillStyle = '#FFF';
		ctx.fillText(value, 16, 40);

		const { data: pixelData } = ctx.getImageData(0, 0, width, height);
		const pixels: Pixel[] = [];

		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				const idx = (y * width + x) * 4;
				const [r, g, b, a] = pixelData.slice(idx, idx + 4) as unknown as [
					number,
					number,
					number,
					number
				];
				if (r !== 0 || g !== 0 || b !== 0) {
					pixels.push({ x, y, color: [r, g, b, a] });
				}
			}
		}

		newDataRef = pixels.map(({ x, y, color }) => ({
			x,
			y,
			r: 1,
			color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`
		}));
	}

	function animate(start: number): void {
		function animateFrame(pos: number) {
			requestAnimationFrame(() => {
				const next: AnimatedPixel[] = [];
				newDataRef.forEach((p) => {
					if (p.x < pos) {
						next.push(p);
					} else if (p.r > 0) {
						p.x += Math.random() > 0.5 ? 1 : -1;
						p.y += Math.random() > 0.5 ? 1 : -1;
						p.r -= 0.05 * Math.random();
						next.push(p);
					}
				});
				newDataRef = next;

				const ctx = canvasRef?.getContext('2d');
				if (ctx) {
					ctx.clearRect(pos, 0, 800, 800);
					newDataRef.forEach(({ x, y, r, color }) => {
						if (x > pos) {
							ctx.beginPath();
							ctx.rect(x, y, r, r);
							ctx.fillStyle = color;
							ctx.strokeStyle = color;
							ctx.stroke();
						}
					});
				}

				if (newDataRef.length > 0) {
					animateFrame(pos - 8);
				} else {
					value = '';
					animating = false;
				}
			});
		}
		animateFrame(start);
	}

	function vanishAndSubmit(): void {
		animating = true;
		draw();
		const inputValue = inputRef?.value ?? '';
		if (inputValue) {
			const maxX = newDataRef.reduce((max, p) => Math.max(max, p.x), 0);
			animate(maxX);
		}
	}

	function handleKeyDown(e: KeyboardEvent): void {
		if (e.key === 'Enter' && !animating) {
			vanishAndSubmit();
		}
	}

	function handleSubmit(e: Event): void {
		e.preventDefault();
		vanishAndSubmit();
		onSubmit?.(value);
	}
</script>

<!-- on:submit={handleSubmit} -->
<form
	class="relative mx-auto h-12 w-full max-w-xl overflow-hidden rounded-full bg-white shadow transition duration-200 dark:bg-zinc-800 {value
		? 'bg-gray-50'
		: ''}"
	onsubmit={handleSubmit}
>
	<canvas
		class="pointer-events-none absolute top-[20%] left-2 origin-top-left scale-50 transform pr-20 text-base invert filter sm:left-8 dark:invert-0"
		bind:this={canvasRef}
	></canvas>

	<input
		bind:this={inputRef}
		bind:value
		onkeydown={handleKeyDown}
		type="text"
		class="z-50 h-full w-full rounded-full border-none bg-transparent pr-20 pl-4 text-sm focus:ring-0 focus:outline-none sm:pl-10 sm:text-base {animating
			? 'text-transparent dark:text-transparent'
			: 'text-black dark:text-white'}"
	/>

	<button
		aria-label="Submit"
		disabled={!value}
		type="submit"
		class="absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black transition duration-200 disabled:bg-gray-100 dark:bg-zinc-900 dark:disabled:bg-zinc-800"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="h-4 w-4 text-gray-300"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M5 12l14 0" />
			<path d="M13 18l6 -6" />
			<path d="M13 6l6 6" />
		</svg>
	</button>

	<div class="pointer-events-none absolute inset-0 flex items-center rounded-full">
		{#if !value}
			{#key currentPlaceholder}
				<p
					class="w-[calc(100%-2rem)] truncate pl-4 text-left text-sm font-normal text-neutral-500 sm:pl-12 sm:text-base dark:text-zinc-500"
					in:fly={{ y: 10, delay: 400 }}
					out:fly={{ y: -10 }}
				>
					{placeholders[currentPlaceholder]}
				</p>
			{/key}
		{/if}
	</div>
</form>

<style>
	form {
		max-width: 100%;
	}
</style>
