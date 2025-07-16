<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	let { children, class: _class = '' }: { children: Snippet; class: string } = $props();
</script>

<div
	class={cn(
		`flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(248,248,248,0.01)]
shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
`,
		_class
	)}
>
	{@render children()}
</div>
