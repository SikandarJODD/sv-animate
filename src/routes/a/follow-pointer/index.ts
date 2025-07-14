import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import FollowPointerCard from '$lib/components/sv/aceternity/follow-pointer/follow-pointer-card.svelte';
import FollowPointerCardCode from '$lib/components/sv/aceternity/follow-pointer/follow-pointer-card.svelte?raw';
import FollowPointer from '$lib/components/sv/aceternity/follow-pointer/follow-pointer.svelte';
import FollowPointerCode from '$lib/components/sv/aceternity/follow-pointer/follow-pointer.svelte?raw';
import FollowPointerExample from './examples/follow-pointer-example.svelte';
import FollowPointerExampleCode from './examples/follow-pointer-example.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Follow Pointer',
	desc: 'A custom pointer that follows mouse arrow and animates in pointer and content.',
	previewComp: FollowPointerExample,
	previewCode: {
		filecode: FollowPointerExampleCode,
		filename: 'follow-pointer-example.svelte'
	},
	code: [
		{
			filecode: FollowPointerCode,
			filename: 'follow-pointer.svelte',
			isExpand: true
		},
		{
			filecode: FollowPointerCardCode,
			filename: 'follow-pointer-card.svelte',
			isExpand: true
		}
	],

};
