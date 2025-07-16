<script lang="ts">
	import { Motion } from 'motion-start';
	import Explosion from './explosion-effect.svelte';
	import { onMount } from 'svelte';
	import { watch } from 'runed';

	type Beam = {
		initialX?: number;
		translateX?: number;
		initialY?: number;
		translateY?: number;
		rotate?: number;
		className?: string;
		duration?: number;
		delay?: number;
		repeatDelay?: number;
		class?: string;
	};
	type Collision = {
		detected: boolean;
		coordinates: { x: number; y: number } | null;
	};
	interface Props {
		beam?: Beam;
		containerRef: HTMLDivElement | null;
		parentRef: HTMLDivElement | null;
	}

	let {
		beam = {
			initialX: 0,
			translateX: 0,
			duration: 8,
			repeatDelay: 0
		},
		containerRef = $bindable(),
		parentRef = $bindable()
	}: Props = $props();

	let beamRef: HTMLDivElement | null = $state(null);
	let collision: Collision = $state({ detected: false, coordinates: null });
	let cycleCollisionDetected = $state(false);
	let beamKey = $state(0);

	let checkCollision = () => {
		if (beamRef && containerRef && parentRef && !cycleCollisionDetected) {
			let beamRect = beamRef.getBoundingClientRect();
			let containerRect = containerRef.getBoundingClientRect();
			let parentRect = parentRef.getBoundingClientRect();

			if (beamRect.bottom >= containerRect.top) {
				let relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
				let relativeY = beamRect.bottom - parentRect.top;

				collision = {
					detected: true,
					coordinates: { x: relativeX, y: relativeY }
				};
				cycleCollisionDetected = true;
			}
		}
	};
	let isDetected = $derived(collision.detected);
	let coordinates = $derived(collision.coordinates);

	onMount(() => {
		const interval = setInterval(checkCollision, 50);
		return () => clearInterval(interval);
	});

	watch([() => isDetected, () => coordinates], () => {
		console.log(isDetected, coordinates);
		if (isDetected && coordinates) {
			setTimeout(() => {
				collision = { detected: false, coordinates: null };
				cycleCollisionDetected = false;
			}, 2000);
			setTimeout(() => {
				beamKey++;
			}, 2000);
		}
	});
</script>

<Motion.div
	initial={{
		translateY: beam.initialY || '-200px',
		translateX: beam.initialX || '0px',
		rotate: beam.rotate || 0
	}}
	animate={{
		translateY: beam.translateY || '1800px',
		translateX: beam.translateX || '0px',
		rotate: beam.rotate || 0
	}}
	transition={{
		duration: beam.duration || 8,
		repeat: Infinity,
		repeatType: 'loop',
		ease: 'linear',
		delay: beam.delay || 0,
		repeatDelay: beam.repeatDelay || 0
	}}
>
	<div
		bind:this={beamRef}
		class={`absolute top-20 left-0 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent ${beam.class}`}
	></div>
</Motion.div>

{#if collision.detected && collision.coordinates}
	<Explosion
		style="left: {collision.coordinates.x}px; top: {collision.coordinates
			.y}px; transform: translate(-50%, -50%);"
	/>
{/if}
