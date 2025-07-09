import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import AuroraBackground from '$lib/components/sv/aceternity/aurora-background.svelte';
import AuroraBackgroundCode from '$lib/components/sv/aceternity/aurora-background.svelte?raw';

// Examples
import AuroraBackgroundExample from './examples/aurora-background-example.svelte';
import AuroraBackgroundExampleCode from './examples/aurora-background-example.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Aurora Background',
	desc: 'Aurora Background is a component that can be used to create a background that changes color over time. Svelte 5 Code is mentioned below in Source Code file.',
	previewComp: AuroraBackgroundExample,
	previewCode: {
		filecode: AuroraBackgroundExampleCode,
		filename: 'aurora-background-example.svelte',
		isExpand: true,
		highlight: [2, [6, 30]]
	},
	code: {
		filecode: AuroraBackgroundCode,
		filename: 'aurora-background.svelte',
		isExpand: true
	},
	tailwind: `@theme inline {
  --animate-aurora-bg: aurora 60s linear infinite;
  @keyframes aurora-bg {
    from {
      background-position:
        50% 50%,
        50% 50%;
    }
    to {
      background-position:
        350% 50%,
        350% 50%;
    }
  }
}`
};
