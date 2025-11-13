import type { RouteId } from '$app/types';

type categories = [category];

type category = {
	title: string;
	items: [showcaseItem];
};

type showcaseItem = {
	title: string;
	image: string;
	link: string;
	shortDescription: string;
	description: [string];
};

type route = {
	name: string;
	path: RouteId;
};
