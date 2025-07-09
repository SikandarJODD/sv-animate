<script lang="ts">
	import AcetSidebar from '$lib/components/base/aceternity/AcetSidebar.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<AcetSidebar>
	{@render children()}
</AcetSidebar>
