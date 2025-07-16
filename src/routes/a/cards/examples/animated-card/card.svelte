<script lang="ts">
	import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils';
	let { children, class: _class = '' }: { children: Snippet; class?: string } = $props();
</script>

<div
	class={cn(
		'max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group',
		_class
	)}
>
	{@render children()}
</div>
