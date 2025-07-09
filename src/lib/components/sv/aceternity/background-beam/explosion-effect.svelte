<script>
	import { Motion } from 'motion-start';
	let { style } = $props();

	let spans = Array.from({ length: 20 }, (_, index) => ({
		id: index,
		initialX: 0,
		initialY: 0,
		directionX: Math.floor(Math.random() * 80 - 40),
		directionY: Math.floor(Math.random() * -50 - 10)
	}));
</script>

<div class="absolute z-50 h-2 w-2" {style}>
	<Motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 1.5, ease: 'easeOut' }}
	>
		<div
			class="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
		></div>
	</Motion.div>

	{#each spans as span}
		<Motion.span
			initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
			animate={{ x: span.directionX, y: span.directionY, opacity: 0 }}
			transition={{ duration: Math.random() * 1.5 + 0.5, ease: 'easeOut' }}
		>
			<span class="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
			></span>
		</Motion.span>
	{/each}
</div>