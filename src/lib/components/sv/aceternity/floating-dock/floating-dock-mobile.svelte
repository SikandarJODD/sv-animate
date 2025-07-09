<script lang="ts">
	import { fly } from 'svelte/transition';

	interface Item {
		title: string;
		icon: any;
		href: string;
	}

	interface Props {
		items?: Item[];
		class?: string;
	}

	let { items = [], class: className = '' }: Props = $props();

	let open: boolean = $state(false);
	const toggleOpen = (): void => {
		open = !open;
	};
</script>

<div class={`relative top-32 block md:hidden ${className}`}>
	{#if open}
		<div class="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2">
			{#each items as item, idx (item.title)}
				{@const Icon = item.icon}
				<div
					class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
					in:fly|global={{ y: 10, delay: (items.length - idx) * 50 }}
					out:fly|global={{ y: 10, delay: idx * 50 }}
					style="transition-delay: {idx * 50}ms;"
				>
					<a href={item.href} class="h-4 w-4">
						<!-- <img
                src={item.icon}
                alt="svg_icons"
                class="h-full w-full text-neutral-500 dark:text-neutral-300"
              /> -->
						<Icon strokeWidth={1.4} class="h-full w-full text-neutral-500 dark:text-neutral-300" />
					</a>
				</div>
			{/each}
		</div>
	{/if}
	<button
		onclick={toggleOpen}
		class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
	>
		<!-- <img src={IconLayoutNavbarCollapse} alt="svg_icons" /> -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 text-neutral-500 dark:text-neutral-300"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
				d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
			/><path d="M4 9h16" /><path d="M10 16l2 -2l2 2" /></svg
		>
	</button>
</div>

<!-- <style>
  .transition-delay {
    transition-delay: 0.05s;
  }
</style>  -->
