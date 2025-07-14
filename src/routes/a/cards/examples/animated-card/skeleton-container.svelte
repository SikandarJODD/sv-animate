<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	let {
		children,
		class: _class = '',
		showGradient = false
	}: { children: Snippet; class?: string; showGradient?: boolean } = $props();
</script>

<div
	class={cn(
		'z-40 h-[15rem] rounded-xl md:h-[20rem]',
		_class,
		showGradient &&
			'bg-neutral-300 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)] dark:bg-[rgba(40,40,40,0.70)]'
	)}
>
	{@render children()}
</div>
