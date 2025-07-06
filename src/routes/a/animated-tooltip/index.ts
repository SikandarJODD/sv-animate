import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import AnimatedTooltip from '$lib/components/sv/aceternity/animated-tooltip.svelte';
import AnimatedTooltipCode from '$lib/components/sv/aceternity/animated-tooltip.svelte?raw';

// Examples
import AnimatedTooltipExample from './examples/animated-tooltip-example.svelte';
import AnimatedTooltipExampleCode from './examples/animated-tooltip-example.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Animated Tooltip',
	desc: 'A tooltip that animates in and out. Good for showing more information on hover',
	previewComp: AnimatedTooltipExample,
	previewCode: {
		filecode: AnimatedTooltipExampleCode,
		filename: 'animated-tooltip-example.svelte',
		isExpand: true,
		highlight: [2, 50]
	},
	code: {
		filecode: AnimatedTooltipCode,
		filename: 'animated-tooltip.svelte',
		isExpand: true
	},
};
