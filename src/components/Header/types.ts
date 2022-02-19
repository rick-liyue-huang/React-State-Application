
export interface MenuItemChild {
	label: string;
	url: string
}

export interface MenuItemInfoType {
	name: string;
	menuChildren: MenuItemChild[];
	url: string;
}

