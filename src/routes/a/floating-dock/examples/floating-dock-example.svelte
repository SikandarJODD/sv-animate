<script>
	// Icons
	import Home from '@lucide/svelte/icons/home';
	import FolderPen from '@lucide/svelte/icons/folder-pen';
	import Mic from '@lucide/svelte/icons/mic';
	import Award from '@lucide/svelte/icons/award';
	import Trash2 from '@lucide/svelte/icons/trash-2';
	import Share from '@lucide/svelte/icons/share';

	// Component
	import FloatingDockDesktop from '$lib/components/sv/aceternity/floating-dock/floating-dock-desktop.svelte';
	import FloatingDockMobile from '$lib/components/sv/aceternity/floating-dock/floating-dock-mobile.svelte';

	let items = [
		{
			title: 'Home',
			icon: Home,
			href: '#'
		},
		{
			title: 'Speak',
			icon: Mic,
			href: '#'
		},
		{
			title: 'Add Folder',
			icon: FolderPen,
			href: '#'
		},
		{
			title: 'Awards',
			icon: Award,
			href: '#'
		},

		{
			title: 'Share',
			icon: Share,
			href: '#'
		},
		{
			title: 'Delete',
			icon: Trash2,
			href: '#'
		}
	];
	//   icon class : h-full w-full text-neutral-500 dark:text-neutral-300
</script>

<div class="relative flex h-[30rem] items-center justify-center">
	<FloatingDockDesktop {items} />
	<FloatingDockMobile {items} />
</div>
