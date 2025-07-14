import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import HoverBorderGradient from '$lib/components/sv/aceternity/hover-border-gradient.svelte';
import HoverBorderGradientCode from '$lib/components/sv/aceternity/hover-border-gradient.svelte?raw';
import HoverBorderGradientExample from './examples/hover-border-gradient-example.svelte';
import HoverBorderGradientExampleCode from './examples/hover-border-gradient-example.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Hover Border Gradient',
	desc: 'A hover border gradient component that animates the border of an element.',
	previewComp: HoverBorderGradientExample,
	previewCode: {
		filecode: HoverBorderGradientExampleCode,
		filename: 'hover-border-gradient-example.svelte'
	},
	code: {
		filecode: HoverBorderGradientCode,
		filename: 'hover-border-gradient.svelte',
		isExpand: true
	},
	component: HoverBorderGradient,
	examples: [
		{
			name: 'Hover Border Gradient',
			component: HoverBorderGradientExample,
			code: {
				filecode: HoverBorderGradientExampleCode,
				filename: 'hover-border-gradient-example.svelte',
				isExpand: true
			}
		}
	]
};
