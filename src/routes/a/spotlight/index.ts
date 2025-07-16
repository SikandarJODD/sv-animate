import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import Spotlight from '$lib/components/sv/aceternity/spotlight.svelte';
import SpotlightCode from '$lib/components/sv/aceternity/spotlight.svelte?raw';
import SpotlightExample from './examples/spotlight-example.svelte';
import SpotlightExampleCode from './examples/spotlight-example.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Spotlight',
	desc: 'Spotlight component that highlights a particular content',
	previewComp: SpotlightExample,
	previewCode: {
		filecode: SpotlightExampleCode,
		filename: 'spotlight-example.svelte',
		highlight: [2,16]
	},
	code: {
		filecode: SpotlightCode,
		filename: 'spotlight.svelte',
		isExpand: true
	},
	tailwind: `@theme inline {
  --animate-spotlight: spotlight 2s ease 0.75s 1 forwards;
}

@keyframes spotlight {
  0% {
    opacity: 0;
    transform: translate(-72%, -62%) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -40%) scale(1);
  }
}`
};
