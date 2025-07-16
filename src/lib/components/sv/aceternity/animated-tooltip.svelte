<script lang="ts">
	import { Motion, useTransform, AnimatePresence, useMotionValue, useSpring } from 'motion-start';

	interface Props {
		items: {
			id: number;
			name: string;
			designation: string;
			image: string;
		}[];
	}

	let { items }: Props = $props();

	let hoveredIndex: number | null = $state(null);

	let springConfig = { stiffness: 100, damping: 5 };
	let x = useMotionValue(0); // going to set this value on mouse move

	// rotate the tooltip
	let rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
	// translate the tooltip

	let handleMouseMove = (event: MouseEvent) => {
		let halfWidth = (event.target instanceof HTMLElement ? event.target.offsetWidth : 0) / 2;
		x.set(event.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
	};
	let translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
</script>

<div class="group flex flex-row">
	{#each items as it (it.id)}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="relative -mr-4"
			onmouseenter={() => (hoveredIndex = it.id)}
			onmouseleave={() => (hoveredIndex = null)}
		>
			<AnimatePresence show={true} list={[{ key: it }]} let:item>
				{#if hoveredIndex === item.key.id}
					<Motion.div
						initial={{ opacity: 0, y: 20, scale: 0.6 }}
						animate={{
							opacity: 1,
							y: 0,
							scale: 1,
							transition: {
								type: 'spring',
								stiffness: 260,
								damping: 10
							}
						}}
						exit={{ opacity: 0, y: 20, scale: 0.6 }}
						style={{
							translateX: translateX,
							rotate: rotate
						}}
					>
						<div
							style="white-space: nowrap;"
							class="absolute -top-16 right-6 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
						>
							<div
								class="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
							></div>
							<div
								class="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent"
							></div>
							<div class="relative z-30 text-base font-bold whitespace-nowrap text-white">
								{item.key.name}
							</div>
							<div class="text-xs whitespace-nowrap text-white">
								{item.key.designation}
							</div>
						</div>
					</Motion.div>
				{/if}
			</AnimatePresence>
			<img
				onmousemove={handleMouseMove}
				height={100}
				width={100}
				src={it.image}
				alt={it.name}
				class="relative !m-0 h-14 w-14 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
			/>
		</div>
	{/each}
</div>
