<script lang="ts">
	import Container from './container.svelte';
	import ClaudeLogo from './icons/claude-logo.svelte';
	import GoCopilot from './icons/gemini-logo.svelte';
	import OpenAILogo from './icons/open-ai-logo.svelte';
	import MetaIconOutline from './icons/meta-icon-outline.svelte';
	import GeminiLogo from './icons/gemini-logo.svelte';
	import Sparkles from './sparkles.svelte';
	import { onMount } from 'svelte';
	import { animate } from 'motion-start';

	const scale = [1, 1.1, 1];
	const transform = ['translateY(0px)', 'translateY(-4px)', 'translateY(0px)'];
	const sequence = [
		[
			'.circle-1',
			{
				scale,
				transform
			},
			{ duration: 0.8 }
		],
		[
			'.circle-2',
			{
				scale,
				transform
			},
			{ duration: 0.8 }
		],
		[
			'.circle-3',
			{
				scale,
				transform
			},
			{ duration: 0.8 }
		],
		[
			'.circle-4',
			{
				scale,
				transform
			},
			{ duration: 0.8 }
		],
		[
			'.circle-5',
			{
				scale,
				transform
			},
			{ duration: 0.8 }
		]
	];
</script>

<div class="relative flex h-full items-center justify-center overflow-hidden p-8">
	<div class="flex shrink-0 flex-row items-center justify-center gap-2">
		<Container class="circle-1 h-8 w-8">
			<ClaudeLogo class="h-4 w-4 " />
		</Container>
		<Container class="circle-2 h-12 w-12">
			<GoCopilot class="h-6 w-6 dark:text-white" />
		</Container>
		<Container class="circle-3">
			<OpenAILogo class="h-8 w-8 dark:text-white" />
		</Container>
		<Container class="circle-4 h-12 w-12">
			<MetaIconOutline class="h-6 w-6 " />
		</Container>
		<Container class="circle-5 h-8 w-8">
			<GeminiLogo class="h-4 w-4 " />
		</Container>
	</div>

	<div
		class="animate-move absolute top-20 z-40 m-auto h-40 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
	>
		<div class="absolute top-1/2 -left-10 h-32 w-10 -translate-y-1/2">
			<Sparkles />
		</div>
	</div>
</div>
