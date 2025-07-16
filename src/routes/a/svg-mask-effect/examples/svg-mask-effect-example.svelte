<script>
	import SvgMaskEffect from '$lib/components/sv/aceternity/svg-mask-effect/svg-mask-effect.svelte';
</script>

<SvgMaskEffect class="h-[30rem] w-[60rem]">
	{#snippet def()}
		<div class="px-36 py-20">
			Svelte is <span class="text-sky-500">Easy</span> & Everyone
			<span class="text-emerald-400">Loves</span> it.
		</div>
	{/snippet}
	{#snippet reveal()}
		<div class="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800">
			React is <span class="text-red-600"> Hard </span> & Everyone Uses it.
		</div>
	{/snippet}
</SvgMaskEffect>
