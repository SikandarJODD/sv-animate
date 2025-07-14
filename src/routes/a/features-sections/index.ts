import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import FeatureCardExampleCode from './examples/hover-feature-card/feature-card-example.svelte?raw';
import HoverFeatureCardCode from './examples/hover-feature-card/hover-feature-card.svelte?raw';
import FeatureSectionDemo from './examples/simple-grid/feature-section-demo.svelte';
import FeatureSectionDemoCode from './examples/simple-grid/feature-section-demo.svelte?raw';
import SimpleGridPatternCode from './examples/simple-grid/simple-grid-pattern.svelte?raw';
import SimpleGridCode from './examples/simple-grid/simple-grid.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Features Sections',
	desc: 'A features section component that can be used to create a features section.',
	examples: [
		{
			name: 'Features Sections',
			component: FeatureSectionDemo,
			code: [
				{
					filecode: FeatureSectionDemoCode,
					filename: 'feature-section-demo.svelte',
					isExpand: true
				},
				{
					filecode: SimpleGridPatternCode,
					filename: 'simple-grid-pattern.svelte',
					isExpand: true
				},
				{
					filecode: SimpleGridCode,
					filename: 'simple-grid.svelte',
					isExpand: true
				}
			]
		},
		{
			name: 'Features Sections',
			component: FeatureSectionDemo,
			code: [
				{
					filecode: FeatureCardExampleCode,
					filename: 'feature-card-example.svelte',
					isExpand: true
				},
				{
					filecode: HoverFeatureCardCode,
					filename: 'hover-feature-card.svelte',
					isExpand: true
				}
			]
		}
	]
};
