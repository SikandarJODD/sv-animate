export type AceternityComponent = {
	id?: string;
	name: string;
	desc: string;
	code: Code | Code[]; // Code for the component
	component?: any; // Main Component
	link?: string;
	class?: string;
	showGrid?: boolean;
	previewComp?: any; // Example Preivew Component
	previewCode?: Code | Code[]; // Code for the preview component
	examples?: ExampleComponent[];
	tailwind?: string;
	showDots?: boolean;
	usage?: string | Code[];
};
export type Code = {
	filename: string;
	filecode: string;
	lang?: string;
	isExpand?: boolean;
	highlight?: (number | [number, number])[];
};

export type ExampleComponent = {
	id?: number;
	name?: string;
	fileName?: string;
	code: Code | Code[];
	component: any;
	class?: string;
	showGrid?: boolean;
	showDots?: boolean;
};
