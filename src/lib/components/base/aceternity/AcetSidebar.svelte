<script lang="ts">
	import { page } from '$app/state';
	import { navs } from '$lib';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { onMount, type Snippet } from 'svelte';
	import { slide } from 'svelte/transition';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
	type compNavs = {
		id: number;
		heading: string;
		sub: {
			name: string;
			link: string;
			isNew?: boolean;
			target_blank?: boolean;
		}[];
	};
	let componentsNav: compNavs[] = [
		{
			id: 1,
			heading: 'Follow for Updates',
			sub: [
				{
					name: 'Twitter @Sikandar_Bhide',
					link: 'https://twitter.com/Sikandar_Bhide',
					target_blank: true
				}
			]
		},
		{
			id: 2,
			heading: 'Installation',
			sub: [
				{
					name: 'Install Sveltekit',
					link: '/a/docs/install-sveltekit'
				},
				{
					name: 'Install Tailwind CSS',
					link: '/a/docs/install-tailwindcss'
				},
				{
					name: 'Add Utilities',
					link: '/a/docs/add-utilities'
				}
			]
		},
		{
			id: 3,
			heading: 'Components',
			sub: [
				{
					name: 'Animated Testimonials',
					link: '/a/animated-testimonials'
				},
				{
					name: 'Animated Tooltip',
					link: '/a/animated-tooltip'
				},
				{
					name: 'Aurora Background',
					link: '/a/aurora-background'
				},
				{
					name: 'Glowing Effect',
					link: '/a/glowing-effect'
				},
				{
					name: 'Colourful Text',
					link: '/a/colourful-text'
				},
				{
					name: 'Spotlight',
					link: '/a/spotlight'
				},
				{
					name: 'Lens',
					link: '/a/lens'
				},
				{
					name: 'Bento Grid',
					link: '/a/bento-grid'
				},
				{
					name: 'Features Sections',
					link: '/a/feature-sections'
				},
				{
					name: 'Text Hover Effect',
					link: '/a/text-hover-effect'
				},
				{
					name: 'Svg Mask Effect',
					link: '/a/svg-mask-effect'
				},
				{
					name: 'Compare',
					link: '/a/compare'
				},
				{
					name: 'Direction Hover',
					link: '/a/direction-hover'
				},
				{
					name: 'Hover Border Gradient',
					link: '/a/hover-border-gradient'
				},
				{
					name: 'Placeholders and vanish input',
					link: '/a/placeholders-and-vanish-input'
				},
				{
					name: 'Pointer Highlight',
					link: '/a/pointer-highlight',
					isNew: true
				},
				{
					name: 'Sidebar',
					link: '/a/sidebar'
				},
				{
					name: 'Floating Dock',
					link: '/a/floating-dock'
				},
				{
					name: 'Follow Pointer',
					link: '/a/follow-pointer'
				},
				{
					name: 'Cards',
					link: '/a/cards'
				},
				{
					name: 'Background Lines',
					link: '/a/background-lines'
				},
				{
					name: 'Layout Grid',
					link: '/a/layout-grid'
				},
				{
					name: 'Card Hover Effect',
					link: '/a/card-hover-effect'
				},
				{
					name: 'Background Beam Collision',
					link: '/a/background-beam-collision'
				},
				{
					name: 'Glare Card',
					link: '/a/glare-card'
				},
				{
					name: 'Wobble Card',
					link: '/a/wobble-card'
				},
				{
					name: 'Timeline',
					link: '/a/timeline'
				}
			]
		}
	];

	let mobileMenu = $state(true);
	let isLoading = $state(false);
	let routeID = $derived(page.url.pathname);
	onMount(() => {
		isLoading = true;
	});
</script>

<div>
	<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
	<div
		class="relative transition-opacity duration-300 ease-linear lg:hidden {mobileMenu
			? 'z-10 opacity-0'
			: 'z-50 opacity-100 '} "
		role="dialog"
		aria-modal="true"
	>
		<div
			class="{mobileMenu
				? '-translate-x-full'
				: 'translate-x-0'} dark:bg-background fixed inset-0 transition-opacity duration-300 ease-linear"
		></div>

		<div
			class="{mobileMenu ? '-translate-x-full' : 'translate-x-0'} fixed inset-0 flex
          transform transition duration-300 ease-in-out
          "
		>
			<div
				class="{mobileMenu
					? 'opacity-0'
					: 'opacity-100'} relative mr-16 flex w-full max-w-xs flex-1 duration-300 ease-in-out"
			>
				<div class="absolute top-0 left-full flex w-16 justify-center pt-5">
					<button
						onclick={() => {
							mobileMenu = !mobileMenu;
						}}
						type="button"
						class="-m-2.5 p-2.5"
					>
						<span class="sr-only">Close sidebar</span>
						<svg
							class="h-6 w-6 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<!-- Sidebar component, swap this element with another sidebar if you like -->
				<div class="m-0 flex grow flex-col overflow-y-auto p-0 px-6">
					<div class="border-primary/50 flex h-14 shrink-0 items-center border-b">
						<a href="/" class="mt-px ml-2 text-xl font-semibold">Svelte Aceternity UI</a>
					</div>
					<nav class="flex flex-1 flex-col">
						{#key mobileMenu}
							<div class="bg-[#161616dc] px-3 transition-all duration-150" transition:slide>
								{#each navs as item}
									<a
										href={item.link}
										class="group {item.link === routeID
											? 'text-primary bg-background/80 rounded-md font-medium'
											: 'text-primary/60'} flex gap-x-3 p-2 text-sm leading-6"
									>
										{item.name}
									</a>
								{/each}
							</div>
						{/key}
						<ul role="list" class="mt-4 flex flex-1 flex-col gap-y-7">
							<li>
								<ul role="list" class="-mx-2">
									{#each componentsNav as cnavs}
										<div class="mb-3">
											<div class="mb-0.5 font-medium">
												{cnavs.heading}
											</div>
											{#each cnavs.sub as item}
												<li>
													<a
														onclick={() => {
															mobileMenu = !mobileMenu;
														}}
														href={item.link}
														class="group {item.link === routeID
															? 'text-primary  bg-gray-600/20'
															: 'text-primary/60'} flex gap-x-3 rounded-md px-3 py-[6px] text-sm leading-6"
													>
														{item.name}
													</a>
												</li>
											{/each}
										</div>
									{/each}
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>

	<!-- in:fly={{ x: -200, duration: 600 }} -->
	<!-- Static sidebar for desktop -->
	{#if isLoading}
		<div class="mt-[57.9px] hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
			<!-- Sidebar component, swap this element with another sidebar if you like -->
			<div
				class="no-scrollbar dark:border-primary/20 dark:bg-background flex grow flex-col gap-y-0 overflow-y-auto border-r bg-white pr-4 pl-8"
			>
				<nav class="mt-11 mb-32 flex flex-1 flex-col">
					<a href="/" class="mx-1 mt-3 mb-2 text-xl font-bold">Svelte Aceternity UI</a>
					<ul role="list" class="flex flex-1 flex-col">
						{#each componentsNav as item}
							<li class="mb-1">
								<ul role="list">
									<li>
										<div class="text-primary/95 text-md pt-2 pb-1 leading-6 font-semibold">
											{item.heading}
										</div>
									</li>
									{#each item.sub as subItem}
										<li>
											<a
												href={subItem.link}
												target={subItem.target_blank ? '_blank' : ''}
												class="group {subItem.link == routeID
													? 'text-primary  border-border font-medium'
													: 'text-primary/60 '} flex items-center justify-between gap-x-2.5 rounded-sm border border-transparent p-2 py-[5.2px] pl-3 text-sm leading-6 tracking-normal capitalize transition-all duration-200 select-none hover:translate-x-1.5 hover:text-emerald-500"
											>
												{subItem.name}
												{#if subItem?.isNew}
													<Badge variant="success">New</Badge>
												{/if}
											</a>
										</li>
									{/each}
								</ul>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
		</div>
	{/if}

	<div
		class="dark:bg-background sticky top-0 z-40 flex items-center gap-x-6 border-b bg-white px-4 py-4 shadow-sm backdrop-blur-md sm:px-6 lg:hidden"
	>
		<button
			onclick={() => (mobileMenu = !mobileMenu)}
			type="button"
			class="text-primary/70 -m-2.5 p-2.5 lg:hidden"
		>
			<span class="sr-only">Open sidebar</span>
			<svg
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</button>
		<a href="/" class="text-primary flex-1 text-sm leading-6 font-semibold">
			Svelte Aceternity UI
		</a>
	</div>

	<main class="py-10 lg:pl-72">
		<div class="px-4 sm:px-6 lg:px-10">
			{@render children()}
		</div>
	</main>
</div>
