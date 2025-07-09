import type { AceternityComponent } from '$lib/components/setup/aceternity/types';
import BackgroundBeamCollision from '$lib/components/sv/aceternity/background-beam/background-beam-collision.svelte';
import BackgroundBeamCollisionCode from '$lib/components/sv/aceternity/background-beam/background-beam-collision.svelte?raw';
import ExplosionEffect from '$lib/components/sv/aceternity/background-beam/explosion-effect.svelte';
import ExplosionEffectCode from '$lib/components/sv/aceternity/background-beam/explosion-effect.svelte?raw';
import CollisionMechanism from '$lib/components/sv/aceternity/background-beam/collision-mechanism.svelte';
import CollisionMechanismCode from '$lib/components/sv/aceternity/background-beam/collision-mechanism.svelte?raw';

// Examples
import BackgroundBeamCollisionExample from './examples/background-beam-collision-example.svelte';
import BackgroundBeamCollisionExampleCode from './examples/background-beam-collision-example.svelte?raw';

export let magic: AceternityComponent = {
	name: 'Background Beam Collision',
	desc: 'A background beam collision component',
	previewComp: BackgroundBeamCollisionExample,
	previewCode: {
		filecode: BackgroundBeamCollisionExampleCode,
		filename: 'BackgroundBeamCollisionExample.svelte'
	},
	code: [
		{
			filecode: BackgroundBeamCollisionCode,
			filename: 'BackgroundBeamCollision.svelte',
			isExpand: true
		},
		{
			filecode: ExplosionEffectCode,
			filename: 'ExplosionEffect.svelte',
			isExpand: true
		},
		{
			filecode: CollisionMechanismCode,
			filename: 'CollisionMechanism.svelte',
			isExpand: true
		}
	]
};
