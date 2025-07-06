<script lang="ts">
	import { Card, CardContent, CardDescription, CardTitle } from '$lib/components/ui/card';

	import WarpBackground from '$lib/components/sv/magic/backgrounds/wrap-bg/warp-background.svelte';
	import AnimatedTooltipExample from '../a/animated-tooltip/examples/animated-tooltip-example.svelte';
</script>

<div class="flex h-screen items-center justify-center">
	<!-- <WarpBackground>
		<Card class="w-80">
			<CardContent class="flex flex-col gap-2 p-4">
				<CardTitle>Congratulations on Your Promotion!</CardTitle>
				<CardDescription>
					Your hard work and dedication have paid off. We&apos;re thrilled to see you take this next
					step in your career. Keep up the fantastic work!
				</CardDescription>
			</CardContent>
		</Card>
	</WarpBackground> -->
	<AnimatedTooltipExample />
</div>
