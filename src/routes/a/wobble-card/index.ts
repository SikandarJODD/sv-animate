import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import WobbleCard from '$lib/components/sv/aceternity/wobble-card.svelte';
import WobbleCardCode from '$lib/components/sv/aceternity/wobble-card.svelte?raw';
import WobbleCardExample from './examples/wobble-card-example.svelte';
import WobbleCardExampleCode from './examples/wobble-card-example.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Wobble Card',
	desc: 'A card effect that translates and scales on mousemove, perfect for feature cards.',
	previewComp: WobbleCardExample,
	previewCode: {
		filecode: WobbleCardExampleCode,
		filename: 'wobble-card-example.svelte'
	},
	code: {
		filecode: WobbleCardCode,
		filename: 'wobble-card.svelte',
		isExpand: true
	}
};
