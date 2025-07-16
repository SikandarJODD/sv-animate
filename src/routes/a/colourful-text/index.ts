import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import ColourfulText from '$lib/components/sv/aceternity/colourful-text.svelte';
import ColourfulTextCode from '$lib/components/sv/aceternity/colourful-text.svelte?raw';
import ColourfulTextExample from './examples/colourful-text-example.svelte';
import ColourfulTextExampleCode from './examples/colourful-text-example.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Colourful Text',
	desc: 'Colourful Text is a component that can be used to create a colourful text. Svelte 5 Code is mentioned below in Source Code file.',
	previewComp: ColourfulTextExample,
	previewCode: {
		filecode: ColourfulTextExampleCode,
		filename: 'colourful-text-example.svelte'
	},
	code: {
		filecode: ColourfulTextCode,
		filename: 'colourful-text.svelte',
		isExpand: true
	}
};
