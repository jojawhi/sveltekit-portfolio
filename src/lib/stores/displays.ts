import { writable } from 'svelte/store';

export const displayStore = writable([
	{
		id: 'snitch',
		display: false
	},
	{
		id: 'lorien',
		display: false
	},
	{
		id: 'kodama',
		display: false
	},
	{
		id: 'tardis',
		display: true
	}
]);
