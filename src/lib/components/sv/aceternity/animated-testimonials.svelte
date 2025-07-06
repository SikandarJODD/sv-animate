<script lang="ts">
	import { watch } from 'runed';
	import { onDestroy } from 'svelte';
	import { Motion, AnimatePresence } from 'motion-start';

	// Animation Inspired from Aceternity UI : https://ui.aceternity.com/components/animated-testimonials
	type Testimonial = {
		quote: string;
		name: string;
		designation: string;
		src: string;
	};
	interface Props {
		testimonials: Testimonial[];
		autoplay?: boolean;
	}

	let { testimonials, autoplay = false }: Props = $props();

	let active = $state(0);

	let handleNext = () => {
		active = (active + 1) % testimonials.length;
	};
	let handlePrev = () => {
		active = (active - 1 + testimonials.length) % testimonials.length;
	};

	let isActive = (index: number) => {
		return index === active;
	};
	let randomRotateY = () => {
		return Math.floor(Math.random() * 21) - 10;
	};
	let interval: any = $state();
	// Watch the autoplay variable and set up an interval when it is true
	watch(
		() => autoplay,
		() => {
			if (autoplay) {
				interval = setInterval(handleNext, 5000);
			} else {
				clearInterval(interval);
			}
		}
	);

	// Cleanup on component destruction
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
	<div class="relative grid grid-cols-1 gap-20 md:grid-cols-2">
		<div>
			<div class="relative h-80 w-full">
				<!-- <AnimatePresence list={[{ key: active }]} let:item > -->
				{#each testimonials as testimonial, index}
					<Motion.div
						initial={{
							opacity: 0,
							scale: 0.9,
							z: -100,
							rotate: randomRotateY()
						}}
						animate={{
							opacity: isActive(index) ? 1 : 0.7,
							scale: isActive(index) ? 1 : 0.95,
							z: isActive(index) ? 0 : -100,
							rotate: isActive(index) ? 0 : randomRotateY(),
							zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
							y: isActive(index) ? [0, -80, 0] : 0
						}}
						exit={{
							opacity: 0,
							scale: 0.9,
							z: 100,
							rotate: randomRotateY()
						}}
						transition={{
							duration: 0.4,
							ease: 'easeInOut'
						}}
						class="absolute inset-0 origin-bottom"
					>
						<img
							src={testimonial.src}
							alt={testimonial.name}
							width={500}
							height={500}
							draggable={false}
							class="h-full w-full rounded-3xl object-cover object-center"
						/>
					</Motion.div>
				{/each}
				<!-- </AnimatePresence> -->
			</div>
		</div>
		<div class="flex flex-col justify-between py-4">
			<Motion.div
				initial={{
					y: 20,
					opacity: 0
				}}
				animate={{
					y: 0,
					opacity: 1
				}}
				exit={{
					y: -20,
					opacity: 0
				}}
				transition={{
					duration: 0.2,
					ease: 'easeInOut'
				}}
			>
				<div>
					<h3 class="text-2xl font-bold text-black dark:text-white">
						{testimonials[active].name}
					</h3>
					<p class="text-sm text-gray-500 dark:text-neutral-500">
						{testimonials[active].designation}
					</p>
					{#key active}
						<p class="mt-8 text-lg text-gray-500 dark:text-neutral-300">
							{#each testimonials[active].quote.split(' ') as word, index}
								<Motion.span
									initial={{
										filter: 'blur(10px)',
										opacity: 0,
										y: 5
									}}
									animate={{
										filter: 'blur(0px)',
										opacity: 1,
										y: 0
									}}
									transition={{
										duration: 0.2,
										ease: 'easeInOut',
										delay: 0.02 * index
									}}
								>
									<span class="inline-block">
										{word}&nbsp;
									</span>
								</Motion.span>
							{/each}
						</p>
					{/key}
				</div>
			</Motion.div>
			<div class="flex gap-4 pt-12 md:pt-0">
				<button
					aria-label="Previous testimonial"
					onclick={handlePrev}
					class="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
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
						class="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400"
						><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
					>
				</button>
				<button
					aria-label="Next testimonial"
					onclick={handleNext}
					class="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
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
						class="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400"
						stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
					>
				</button>
			</div>
		</div>
	</div>
</div>
