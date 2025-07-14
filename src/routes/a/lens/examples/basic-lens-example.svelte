<script>
	import Lens from '$lib/components/sv/aceternity/lens.svelte';
	let hovering = $state(false);
</script>

<div>
	<div
		class="relative mx-auto my-10 w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-r from-[#1D2235] to-[#121318] p-8"
	>
		<div class="relative z-10">
			<Lens bind:hovering>
				<img
					src="https://images.unsplash.com/photo-1713869820987-519844949a8a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="image_code"
					width={500}
					height={500}
				/>
			</Lens>
			<div
				class="relative z-20 py-4 {hovering
					? 'blur-[2px]'
					: ''} transition-all duration-300 ease-linear"
			>
				<h2 class="text-left text-2xl font-bold text-white">Apple Vision Pro</h2>
				<p class="mt-4 text-left text-neutral-200">
					The all new apple vision pro was the best thing that happened around 8 months ago, not
					anymore.
				</p>
			</div>
		</div>
	</div>
</div>
