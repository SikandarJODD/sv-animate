import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import BentoGridItem from '$lib/components/sv/aceternity/bentro-grid/bento-grid-item.svelte';
import BentoGrid from '$lib/components/sv/aceternity/bentro-grid/bento-grid.svelte';
import BentoGridCode from '$lib/components/sv/aceternity/bentro-grid/bento-grid.svelte?raw';
import BentoGridItemCode from '$lib/components/sv/aceternity/bentro-grid/bento-grid-item.svelte?raw';

// Examples
import BasicBento from './examples/basic/basic-bento.svelte';
import BasicBentoCode from './examples/basic/basic-bento.svelte?raw';
import BentoSkeleton from './examples/basic/bento-skeleton.svelte';
import BentoSkeletonCode from './examples/basic/bento-skeleton.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Bento Grid',
	desc: 'A grid component to display images, videos, or practically anything.',
	previewComp: BasicBento,
	previewCode: [
		{
			filecode: BasicBentoCode,
			filename: 'basic-bento.svelte',
			isExpand: true
		},
		{
			filecode: BentoSkeletonCode,
			filename: 'bento-skeleton.svelte',
			isExpand: true
		}
	],
	code: [
		{
			filecode: BentoGridCode,
			filename: 'bento-grid.svelte',
			isExpand: true
		},
		{
			filecode: BentoGridItemCode,
			filename: 'bento-grid-item.svelte',
			isExpand: true
		}
	],
	examples: [
		{
			name: 'Basic Bento',
			component: BasicBento,
			code: [
				{
					filecode: BasicBentoCode,
					filename: 'basic-bento.svelte',
					isExpand: true
				},
				{
					filecode: BentoSkeletonCode,
					filename: 'bento-skeleton.svelte',
					isExpand: true
				}
			]
		}
	]
};
