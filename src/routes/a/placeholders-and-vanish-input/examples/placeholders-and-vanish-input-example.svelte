<script lang="ts">
	import PlaceholdersAndVanishInput from '$lib/components/sv/aceternity/placeholders-and-vanish-input.svelte';

	const placeholders = [
		'Why is Svelte the Best Javascript Framework?',
		'Chal Bhai Kuch Type kar auur Magic dek..',
		'Jab we met is the best movie ever',
		'Bhai Share bhi kar de yaar',
		'Ek Tweet to banta hai'
	];

	const handleSubmit = (value: string) => {
		console.log('submitted', value);
	};
</script>

<div class="mx-auto flex h-[35rem] w-[40rem] flex-col items-center justify-center px-4">
	<h2
		class="mb-10 bg-gradient-to-tr from-white from-20% via-neutral-400 to-neutral-600/80 to-90% bg-clip-text text-center text-xl font-semibold text-transparent sm:mb-12 sm:text-5xl"
	>
		Svelte Aceternity UI
	</h2>

	<PlaceholdersAndVanishInput {placeholders} onSubmit={handleSubmit} />
</div>
