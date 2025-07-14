import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import Lens from '$lib/components/sv/aceternity/lens.svelte';
import LensCode from '$lib/components/sv/aceternity/lens.svelte?raw';
import BasicLensExample from './examples/basic-lens-example.svelte';
import LensExample from './examples/lens-example.svelte';
import LensExampleCode from './examples/lens-example.svelte?raw';
import BasicLensExampleCode from './examples/basic-lens-example.svelte?raw';
import LensWholeCompExample from './examples/lens-whole-comp-example.svelte';
import LensWholeCompExampleCode from './examples/lens-whole-comp-example.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Lens',
	desc: 'A lens component that zooms in on anything.',
	previewComp: LensExample,
	previewCode: {
		filecode: LensExampleCode,
		filename: 'lens-example.svelte'
	},
	code: {
		filecode: LensCode,
		filename: 'lens.svelte',
		isExpand: true
	},
	component: Lens,
	examples: [
		{
			name: 'Basic Example',
			component: BasicLensExample,
			code: {
				filecode: BasicLensExampleCode,
				filename: 'basic-lens-example.svelte',
				isExpand: true
			}
		},
		{
			name: 'Whole Component',
			component: LensWholeCompExample,
			code: {
				filecode: LensWholeCompExampleCode,
				filename: 'lens-whole-comp-example.svelte',
				isExpand: true
			}
		}
	]
};
