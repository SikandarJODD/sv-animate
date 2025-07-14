import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import Compare from '$lib/components/sv/aceternity/compare.svelte';
import CompareCode from '$lib/components/sv/aceternity/compare.svelte?raw';
import CompareExample from './examples/compare-example.svelte';
import CompareExampleCode from './examples/compare-example.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Compare',
	desc: 'Compare is a component that can be used to compare two images. Svelte 5 Code is mentioned below in Source Code file.',
	previewComp: CompareExample,
	previewCode: {
		filecode: CompareExampleCode,
		filename: 'compare-example.svelte'
	},
	code: {
		filecode: CompareCode,
		filename: 'compare.svelte',
		isExpand: true
	}
};
