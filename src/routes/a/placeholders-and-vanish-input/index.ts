import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import PlaceholdersAndVanishInputExample from './examples/placeholders-and-vanish-input-example.svelte';
import PlaceholdersAndVanishInputExampleCode from './examples/placeholders-and-vanish-input-example.svelte?raw';
import PlaceholdersAndVanishInputCode from '$lib/components/sv/aceternity/placeholders-and-vanish-input.svelte?raw';
import PlaceholdersAndVanishInput from '$lib/components/sv/aceternity/placeholders-and-vanish-input.svelte';

export let magic: AceternityComponent = {
	name: 'Placeholders and Vanish Input',
	desc: 'A component that allows you to create a placeholder and vanish input.',
	previewComp: PlaceholdersAndVanishInputExample,
	previewCode: {
		filecode: PlaceholdersAndVanishInputExampleCode,
		filename: 'placeholders-and-vanish-input-example.svelte'
	},
	code: {
		filecode: PlaceholdersAndVanishInputCode,
		filename: 'placeholders-and-vanish-input.svelte',
		isExpand: true
	},
	component: PlaceholdersAndVanishInput,

};
