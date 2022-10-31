import { writable } from 'svelte/store';

export const nameStore = writable([
	{
		id: 1,
		letter: 'j',
		image: 'J',
		active: false
	},
	{
		id: 2,
		letter: 'o',
		image: 'O',
		active: false
	},
	{
		id: 3,
		letter: 'j',
		image: 'J',
		active: false
	},
	{
		id: 4,
		letter: 'a',
		image: 'A',
		active: false
	},
	{
		id: 5,
		letter: 'w',
		image: 'W',
		active: false
	},
	{
		id: 6,
		letter: 'h',
		image: 'H',
		active: false
	},
	{
		id: 7,
		letter: 'i',
		image: 'I',
		active: false
	}
]);
