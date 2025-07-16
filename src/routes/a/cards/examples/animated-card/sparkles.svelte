<script lang="ts">
	import { Motion } from 'motion-start';
	const randomMove = () => Math.random() * 2 - 1;
	const randomOpacity = () => Math.random();
	const random = () => Math.random();
</script>

<div class="absolute inset-0">
	{#each Array(12) as item, i}
		<Motion.span
			animate={{
				top: `calc(${random() * 100}% + ${randomMove()}px)`,
				left: `calc(${random() * 100}% + ${randomMove()}px)`,
				opacity: randomOpacity(),
				scale: [1, 1.2, 0]
			}}
			transition={{
				duration: random() * 2 + 4,
				repeat: Infinity,
				ease: 'linear'
			}}
			style={{
				position: 'absolute',
				top: `${random() * 100}%`,
				left: `${random() * 100}%`,
				width: `2px`,
				height: `2px`,
				borderRadius: '50%',
				zIndex: 1
			}}
			class="inline-block bg-black dark:bg-white"
		></Motion.span>
	{/each}
</div>
