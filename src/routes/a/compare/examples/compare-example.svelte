<script>
	import Compare from '$lib/components/sv/aceternity/compare.svelte';
	import RollsRoyceImage from './rolls-royce.webp';
  import RollsRoycePhantomExtendedImage from './phantom.webp';
</script>

<div
	class="mx-auto rounded-3xl border border-neutral-200 bg-neutral-100 p-4 px-4 dark:border-neutral-800 dark:bg-neutral-900"
>
	<Compare
		firstImage={RollsRoyceImage}
		secondImage={RollsRoycePhantomExtendedImage}
		firstImageClass="object-contain object-center"
		secondImageClass="object-contain object-center"
		class="h-[250px] w-[200px] md:h-[350px] md:w-[580px]"
		slideMode="hover"
	/>
</div>
