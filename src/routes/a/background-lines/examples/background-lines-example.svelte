<script lang="ts">
	import BackgroundLines from '$lib/components/sv/aceternity/background-lines/background-lines.svelte';
</script>

<div class="relative w-full">
	<BackgroundLines
		class="flex w-full flex-col items-center justify-center px-4 md:h-[60vh] dark:bg-transparent relative"
	>
		<h2
			class="relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 text-center font-sans text-2xl font-bold tracking-tight text-transparent md:py-10 md:text-4xl lg:text-7xl dark:from-neutral-600 dark:to-white"
		>
			Svelte is Vibe
		</h2>
		<p
			class="mx-auto max-w-xl text-center text-sm text-neutral-700 md:text-lg dark:text-neutral-400"
		>
			This Animation is made with Svelte, SVG and Svelte Motion 🚀
			<br />
			Inspired by the Aeternity UI
		</p>
	</BackgroundLines>
</div>
