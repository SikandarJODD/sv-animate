<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		width: any;
		height: any;
		x: any;
		y: any;
		squares: any;
		class?: string;
	}

	let { width, height, x, y, squares, class: _class = '' }: Props = $props();

	let patternId = crypto.randomUUID();
</script>

<svg aria-hidden="true" class={cn(_class)}>
	<defs>
		<pattern id={patternId} {width} {height} patternUnits="userSpaceOnUse" {x} {y}>
			<path d={`M.5 ${height}V.5H${width}`} fill="none" />
		</pattern>
	</defs>
	<rect width="100%" height="100%" stroke-width={0} fill={`url(#${patternId})`} />
	{#if squares}
		<svg {x} {y} class="overflow-visible">
			{#each squares as [x, y]}
				<rect stroke-width="0" width={width + 1} height={height + 1} x={x * width} y={y * height} />
			{/each}
		</svg>
	{/if}
</svg>
