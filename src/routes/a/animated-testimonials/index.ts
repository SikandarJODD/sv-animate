import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import AnimatedTestimonials from '$lib/components/sv/aceternity/animated-testimonials.svelte';
import AnimatedTestimonialsCode from '$lib/components/sv/aceternity/animated-testimonials.svelte?raw';

// Examples
import AnimatedTestimonialsExample from './examples/animated-testimonials-example.svelte';
import AnimatedTestimonialsExampleCode from './examples/animated-testimonials-example.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Animated Testimonials',
	desc: 'Minimal testimonials sections with image and quote.',
	previewComp: AnimatedTestimonialsExample,
	previewCode: {
		filecode: AnimatedTestimonialsExampleCode,
		filename: 'animated-testimonials-example.svelte',
		isExpand: true,
		highlight: [2, 43]
	},
	code: {
		filecode: AnimatedTestimonialsCode,
		filename: 'animated-testimonials.svelte',
		isExpand: true
	}
};
