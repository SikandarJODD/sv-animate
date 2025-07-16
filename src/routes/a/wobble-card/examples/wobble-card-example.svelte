<script>
	import WobbleCard from '$lib/components/sv/aceternity/wobble-card.svelte';
	import LinearImg from './linear.webp';
</script>

<div class="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
	<WobbleCard
		containerClass="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
	>
		<div class="max-w-xs">
			<h2
				class="text-left text-base font-semibold tracking-[-0.015em] text-balance text-white md:text-xl lg:text-3xl"
			>
				Gippity AI powers the entire universe
			</h2>
			<p class="mt-4 text-left text-base/6 text-neutral-200">
				With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for
				developers.
			</p>
		</div>
		<img
			src={LinearImg}
			width={500}
			height={500}
			alt="linear demo"
			class="absolute -right-4 -bottom-10 rounded-2xl object-contain grayscale filter lg:-right-[40%]"
		/>
	</WobbleCard>
	<WobbleCard containerClass="col-span-1 min-h-[300px]">
		<h2
			class="max-w-80 text-left text-base font-semibold tracking-[-0.015em] text-balance text-white md:text-xl lg:text-3xl"
		>
			No shirt, no shoes, no weapons.
		</h2>
		<p class="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
			If someone yells “stop!”, goes limp, or taps out, the fight is over.
		</p>
	</WobbleCard>
	<WobbleCard
		containerClass="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
	>
		<div class="max-w-sm">
			<h2
				class="max-w-sm text-left text-base font-semibold tracking-[-0.015em] text-balance text-white md:max-w-lg md:text-xl lg:text-3xl"
			>
				Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper today!
			</h2>
			<p class="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
				With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for
				developers.
			</p>
		</div>
		<img
			src={LinearImg}
			width={500}
			height={500}
			alt="linear demo"
			class="absolute -right-10 -bottom-10 rounded-2xl object-contain md:-right-[40%] lg:-right-[20%]"
		/>
	</WobbleCard>
</div>
