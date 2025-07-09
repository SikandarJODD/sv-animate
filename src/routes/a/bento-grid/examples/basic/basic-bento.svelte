<script lang="ts">
	import BentoGrid from '$lib/components/sv/aceternity/bentro-grid/bento-grid.svelte';
	import BentoGridItem from '$lib/components/sv/aceternity/bentro-grid/bento-grid-item.svelte';
	import BentoSkeleton from './bento-skeleton.svelte';

	// Tabler Icons
	import IconArrowWaveRightUp from './svg/arrow-wave-right-up.svelte';
	import IconBoxAlignRightFilled from './svg/box-align-right-filled.svelte';
	import IconBoxAlignTopLeft from './svg/box-align-top-left.svelte';
	import IconClipboardCopy from './svg/clipboard-copy.svelte';
	import IconFileBroken from './svg/file-broken.svelte';
	import IconSignature from './svg/signature.svelte';
	import IconTableColumn from './svg/table-column.svelte';

	const items = [
		{
			title: 'The Dawn of Innovation',
			description: 'Explore the birth of groundbreaking ideas and inventions.',
			header: BentoSkeleton, // Scroll down to see the BentoSkeleton.svelte component
			icon: IconClipboardCopy
		},
		{
			title: 'The Digital Revolution',
			description: 'Dive into the transformative power of technology.',
			header: BentoSkeleton,
			icon: IconFileBroken
		},
		{
			title: 'The Art of Design',
			description: 'Discover the beauty of thoughtful and functional design.',
			header: BentoSkeleton,
			icon: IconSignature
		},
		{
			title: 'The Power of Communication',
			description: 'Understand the impact of effective communication in our lives.',
			header: BentoSkeleton,
			icon: IconTableColumn
		},
		{
			title: 'The Pursuit of Knowledge',
			description: 'Join the quest for understanding and enlightenment.',
			header: BentoSkeleton,
			icon: IconArrowWaveRightUp
		},
		{
			title: 'The Joy of Creation',
			description: 'Experience the thrill of bringing ideas to life.',
			header: BentoSkeleton,
			icon: IconBoxAlignTopLeft
		},
		{
			title: 'The Spirit of Adventure',
			description: 'Embark on exciting journeys and thrilling discoveries.',
			header: BentoSkeleton,
			icon: IconBoxAlignRightFilled
		}
	];
	//    icon class="h-4 w-4 text-neutral-500"
</script>

<BentoGrid class="mx-auto max-w-4xl">
	{#each items as item, i}
		{@const HeaderComponent = item.header}
		{@const IconComponent = item.icon}
		<BentoGridItem
			title={item.title}
			description={item.description}
			class={i === 3 || i === 6 ? 'md:col-span-2' : ''}
		>
			{#snippet icon()}
				<IconComponent class="h-4 w-4 text-neutral-500" />
			{/snippet}
			{#snippet header()}
				<HeaderComponent />
			{/snippet}
		</BentoGridItem>
	{/each}
</BentoGrid>
