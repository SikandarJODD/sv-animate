<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	let { children, class: _class = '' }: { children: Snippet; class?: string } = $props();
</script>

<p class={cn('max-w-sm text-sm font-normal text-neutral-600 dark:text-neutral-400', _class)}>
	{@render children()}
</p>
