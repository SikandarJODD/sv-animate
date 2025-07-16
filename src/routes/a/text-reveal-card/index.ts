import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import TextRevealCard from '$lib/components/sv/aceternity/text-reveal-card.svelte';
import TextRevealCardCode from '$lib/components/sv/aceternity/text-reveal-card.svelte?raw';
import TextRevealCardExample from './examples/text-reveal-card-example.svelte';
import TextRevealCardExampleCode from './examples/text-reveal-card-example.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Text Reveal Card',
	desc: 'A text reveal card component that reveals text on hover.',
	previewComp: TextRevealCardExample,
	previewCode: {
		filecode: TextRevealCardExampleCode,
		filename: 'text-reveal-card-example.svelte'
	},
	code: {
		filecode: TextRevealCardCode,
		filename: 'text-reveal-card.svelte',
		isExpand: true
	}
};
