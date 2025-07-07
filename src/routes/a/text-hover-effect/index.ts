import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import TextHoverEffect from '$lib/components/sv/aceternity/text-hover-effect.svelte';
import TextHoverEffectCode from '$lib/components/sv/aceternity/text-hover-effect.svelte?raw';

// Examples
import TextHoverEffectExample from './examples/text-hover-effect-example.svelte';
import TextHoverEffectExampleCode from './examples/text-hover-effect-example.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Text Hover Effect',
	desc: 'A text hover effect component to animate text on hover.',
	previewComp: TextHoverEffectExample,
	previewCode: {
		filecode: TextHoverEffectExampleCode,
		filename: 'text-hover-effect-example.svelte'
	},
	code: {
		filecode: TextHoverEffectCode,
		filename: 'text-hover-effect.svelte',
		isExpand: true
	},
};
