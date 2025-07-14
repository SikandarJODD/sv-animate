import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import FloatingDockDesktop from '$lib/components/sv/aceternity/floating-dock/floating-dock-desktop.svelte';
import FloatingDockDesktopCode from '$lib/components/sv/aceternity/floating-dock/floating-dock-desktop.svelte?raw';
import FloatingDockMobile from '$lib/components/sv/aceternity/floating-dock/floating-dock-mobile.svelte';
import FloatingDockMobileCode from '$lib/components/sv/aceternity/floating-dock/floating-dock-mobile.svelte?raw';
import FloatingDockExample from './examples/floating-dock-example.svelte';
import FloatingDockExampleCode from './examples/floating-dock-example.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Floating Dock',
	desc: 'A floating dock mac os style component, acts as a navigation bar.',
	previewComp: FloatingDockExample,
	previewCode: {
		filecode: FloatingDockExampleCode,
		filename: 'floating-dock-example.svelte'
	},
	code: [
		{
			filecode: FloatingDockDesktopCode,
			filename: 'floating-dock-desktop.svelte',
			isExpand: true
		},
		{
			filecode: FloatingDockMobileCode,
			filename: 'floating-dock-mobile.svelte',
			isExpand: true
		}
	]
};
