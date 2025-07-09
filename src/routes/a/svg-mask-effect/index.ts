import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import SvgMaskEffect from '$lib/components/sv/aceternity/svg-mask-effect/svg-mask-effect.svelte';
import SvgMaskEffectCode from '$lib/components/sv/aceternity/svg-mask-effect/svg-mask-effect.svelte?raw';
import maskSvg from '$lib/components/sv/aceternity/svg-mask-effect/mask.svg?raw';

// Examples
import SvgMaskEffectExample from './examples/svg-mask-effect-example.svelte';
import SvgMaskEffectExampleCode from './examples/svg-mask-effect-example.svelte?raw';

export let magic: AceternityComponent = {
	name: 'SVG Mask Effect',
	desc: "A mask reveal effect, hover the cursor over a container to reveal what's underneath.",
	previewComp: SvgMaskEffectExample,
	previewCode: {
		filecode: SvgMaskEffectExampleCode,
		filename: 'svg-mask-effect-example.svelte'
	},
	code: [
		{
			filecode: SvgMaskEffectCode,
			filename: 'svg-mask-effect.svelte',
			isExpand: true
		},
		{
			filecode: maskSvg,
			filename: 'mask.svg'
		}
	]
};
