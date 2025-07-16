<script lang="ts">
	import Card from './card.svelte';
	import CardSkeletonContainer from './skeleton-container.svelte';
	import Skeleton from './skeleton.svelte';
	import CardTitle from './card-title.svelte';
	import CardDescription from './card-description.svelte';
</script>

<Card>
	<CardSkeletonContainer>
		<Skeleton />
	</CardSkeletonContainer>
	<CardTitle>Damn good card</CardTitle>
	<CardDescription>
		A card that showcases a set of tools that you use to create your product.
	</CardDescription>
</Card>
