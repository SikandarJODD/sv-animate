<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { Tween } from 'svelte/motion';
	import { cubicOut, linear } from 'svelte/easing';

	let {
		containerClassName = '',
		class: _class = '',
		duration = 1,
		clockwise = true,
		children,
		as = 'button',
		...restProps
	}: {
		containerClassName?: string;
		class?: string;
		duration?: number;
		clockwise?: boolean;
		children: Snippet;
		as?: string;
	} = $props();

	let hovered = $state(false);

	const movingMap = {
		TOP: 'radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
		LEFT: 'radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
		BOTTOM:
			'radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
		RIGHT:
			'radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)'
	};


	let values1 = [20.7, 50, 50, 0, 0, 0, 100];
	let values2 = [16.6, 43.1, 0, 50, 0, 0, 100];
	let values3 = [20.7, 50, 50, 100, 0, 0, 100];
	let values4 = [16.2, 41.199999999999996, 100, 50, 0, 0, 100];
	let allValues = [values1, values2, values3, values4];

	let t1 = new Tween(0, { duration: 1000, easing: linear });
	let t2 = new Tween(0, { duration: 1000, easing: linear });
	let t3 = new Tween(0, { duration: 1000, easing: linear });
	let t4 = new Tween(0, { duration: 1000, easing: linear });

	const highlight =
		'radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)';
	let index = 0;

	let hightlightValues = [75, 181.15942028985506, 50, 50, 0, 0, 100];
	let hl1 = new Tween(0, { duration: 1000, easing: cubicOut });
	let hl2 = new Tween(0, { duration: 1000, easing: cubicOut });

	onMount(() => {
		let interval: any = null;
		if (!hovered) {
			interval = setInterval(() => {
				if (clockwise) {
					if (index === 0) {
						index = 3;
					} else {
						index--;
					}
				} else {
					if (index === 3) {
						index = 0;
					} else {
						index++;
					}
				}
				t1.set(allValues[index][0]);
				t2.set(allValues[index][1]);
				t3.set(allValues[index][2]);
				t4.set(allValues[index][3]);
			}, duration * 1000);
		}
		return () => clearInterval(interval);
	});
</script>

<svelte:element
	this={as}
	onmouseenter={() => {
		hovered = true;
		hl1.set(hightlightValues[0]);
		hl2.set(hightlightValues[1]);
	}}
	onmouseleave={() => {
		hl1.set(0);
		hl2.set(0);
	}}
	class={`relative flex h-min w-fit flex-col flex-nowrap content-center items-center justify-center gap-10 overflow-visible rounded-full border bg-black/20 decoration-clone p-px transition duration-500 hover:bg-black/10 dark:bg-white/20 ${containerClassName}`}
	{...restProps}
>
	<div class={`z-10 w-auto rounded-[inherit] bg-black px-4 py-2 text-white ${_class}`}>
		{@render children()}
	</div>
	<div
		class="absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]"
		style="filter: blur(2px); position: absolute; width: 100%; height: 100%;
        background : {hovered
			? `radial-gradient(${t1.current}% ${t2.current}% at ${t3.current}% ${t4.current}%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(${hl2.current}% ${hl1.current}% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)`
			: `radial-gradient(${t1.current}% ${t2.current}% at ${t3.current}% ${t4.current}%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)`};
      "
	></div>
	<div class="absolute inset-[2px] z-1 flex-none rounded-[100px] bg-black"></div>
</svelte:element>
