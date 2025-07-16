import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import BackgroundLines from '$lib/components/sv/aceternity/background-lines/background-lines.svelte';
import BackgroundLinesCode from '$lib/components/sv/aceternity/background-lines/background-lines.svelte?raw';
import BackgroundLinesExample from './examples/background-lines-example.svelte';
import BackgroundLinesExampleCode from './examples/background-lines-example.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Background Lines',
	desc: 'Background Lines is a component that can be used to create a background that changes color over time. Svelte 5 Code is mentioned below in Source Code file.',
	previewComp: BackgroundLinesExample,
	previewCode: {
		filecode: BackgroundLinesExampleCode,
		filename: 'background-lines-example.svelte'
	},
	code: {
		filecode: BackgroundLinesCode,
		filename: 'background-lines.svelte',
		isExpand: true
	},
};
