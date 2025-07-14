<script lang="ts">
	import { Motion } from 'motion-start';
	import { onMount, type Snippet } from 'svelte';

	interface Props {
		text: string;
		revealText: string;
		class?: string;
		children: Snippet;
	}

	let { text, revealText, class: _class = '', children }: Props = $props();

	let widthPercentage = $state(0);
	let cardRef = $state<HTMLDivElement | null>(null);
	let left = $state(0);
	let localWidth = $state(0);
	let isMouseOver = $state(false);

	onMount(() => {
		if (cardRef) {
			const rect = cardRef.getBoundingClientRect();
			left = rect.left;
			localWidth = rect.width;
		}
	});

	function mouseMoveHandler(event: MouseEvent) {
		event.preventDefault();
		const { clientX } = event;
		if (cardRef) {
			const relativeX = clientX - left;
			widthPercentage = (relativeX / localWidth) * 100;
		}
	}

	function mouseLeaveHandler() {
		isMouseOver = false;
		widthPercentage = 0;
	}
	function mouseEnterHandler() {
		isMouseOver = true;
	}
	function touchMoveHandler(event: TouchEvent) {
		event.preventDefault();
		const clientX = event.touches[0]?.clientX;
		if (clientX !== undefined && cardRef) {
			const relativeX = clientX - left;
			widthPercentage = (relativeX / localWidth) * 100;
		}
	}

	let rotateDeg = $derived((widthPercentage - 50) * 0.1);

	function randomMove() {
		return Math.random() * 4 - 2;
	}
	function randomOpacity() {
		return Math.random();
	}
	function random() {
		return Math.random();
	}
	const stars = Array.from({ length: 80 });
</script>

<!--
  Usage:
  <TextRevealCard>
    <TextRevealCardTitle>Title</TextRevealCardTitle>
    <TextRevealCardDescription>Description</TextRevealCardDescription>
  </TextRevealCard>
  (Implement Title/Description as slots or markup in parent)
-->

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	onmouseenter={mouseEnterHandler}
	onmouseleave={mouseLeaveHandler}
	onmousemove={mouseMoveHandler}
	ontouchstart={mouseEnterHandler}
	ontouchend={mouseLeaveHandler}
	ontouchmove={touchMoveHandler}
	bind:this={cardRef}
	class={`relative w-[40rem] overflow-hidden rounded-lg border border-white/[0.08] bg-[#1d1c20] p-8 ${_class}`}
>
	{@render children?.()}

	<div class="relative flex h-40 items-center overflow-hidden">
		<Motion.div
			style={{ width: '100%' }}
			animate={isMouseOver
				? {
						opacity: widthPercentage > 0 ? 1 : 0,
						clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`
					}
				: {
						clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`
					}}
			transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
			class="absolute z-20 bg-[#1d1c20] will-change-transform"
		>
			<p
				style="text-shadow: 4px 4px 15px rgba(0,0,0,0.5);"
				class="bg-gradient-to-b from-white to-neutral-300 bg-clip-text py-10 text-base font-bold text-transparent text-white sm:text-[3rem]"
			>
				{revealText}
			</p>
		</Motion.div>
		<Motion.div
			animate={{
				left: `${widthPercentage}%`,
				rotate: `${rotateDeg}deg`,
				opacity: widthPercentage > 0 ? 1 : 0
			}}
			transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
			class="absolute z-50 h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent will-change-transform"
		/>

		<div
			class="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"
		>
			<p
				class="bg-[#323238] bg-clip-text py-10 text-base font-bold text-transparent sm:text-[3rem]"
			>
				{text}
			</p>
			<div class="absolute inset-0">
				{#each stars as _, i}
					<Motion.span
						animate={{
							top: `calc(${random() * 100}% + ${randomMove()}px)`,
							left: `calc(${random() * 100}% + ${randomMove()}px)`,
							opacity: randomOpacity(),
							scale: [1, 1.2, 0]
						}}
						transition={{
							duration: random() * 10 + 20,
							repeat: Infinity,
							ease: 'linear'
						}}
						style={{
							position: 'absolute',
							top: `${random() * 100}%`,
							left: `${random() * 100}%`,
							width: '2px',
							height: '2px',
							backgroundColor: 'white',
							borderRadius: '50%',
							zIndex: 1
						}}
						class="inline-block"
					/>
				{/each}
			</div>
		</div>
	</div>
</div>
