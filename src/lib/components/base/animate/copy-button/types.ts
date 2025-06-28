import type { Snippet } from 'svelte';
import type { UseClipboard } from '$lib/hooks/use-clipboard.svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { WithChildren, WithoutChildren } from 'bits-ui';
import type { ButtonPropsWithoutHTML } from '$lib/components/ui/button/button.svelte';

export type CopyButtonPropsWithoutHTML = WithChildren<
	Pick<ButtonPropsWithoutHTML, 'size' | 'variant'> & {
		ref?: HTMLButtonElement | null;
		text: string;
		icon?: Snippet<[]>;
		animationDuration?: number;
		onCopy?: (status: UseClipboard['status']) => void;
	}
>;

export type CopyButtonProps = CopyButtonPropsWithoutHTML &
	WithoutChildren<HTMLAttributes<HTMLButtonElement>>;