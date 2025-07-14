<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	let { children, class: _class = '' }: { children: Snippet; class?: string } = $props();
</script>

<h3 class={cn('py-2 text-lg font-semibold text-gray-800 dark:text-white', _class)}>
	{@render children()}
</h3>
