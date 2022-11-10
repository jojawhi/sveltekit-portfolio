import { writable } from 'svelte/store';

export const nameStore = writable([
	{
		id: 1,
		letter: 'j',
		image: '/assets/images/shenron.svg',
		alt: 'The dragon Shenron from Dragonball Z in the shape of a cursive capital letter J',
		active: false
	},
	{
		id: 2,
		letter: 'o',
		image: '/assets/images/ring.svg',
		alt: 'The One Ring from Lord of the Rings in place of a letter O',
		active: false
	},
	{
		id: 3,
		letter: 'j',
		image: '/assets/images/dratini.svg',
		alt: 'The Pokemon Dratini in the shape of a letter J',
		active: false
	},
	{
		id: 4,
		letter: 'a',
		image: '/assets/images/combadge.svg',
		alt: 'A Star Trek communication badge in place of the letter A',
		active: false
	},
	{
		id: 5,
		letter: 'w',
		image: '/assets/images/who.svg',
		alt: 'The letter W from the Doctor Who logo',
		active: false
	},
	{
		id: 6,
		letter: 'h',
		image: '/assets/images/harry.png',
		alt: 'A letter H in the style of the Harry Potter logo with a lightning bolt at the bottom of one side',
		active: false
	},
	{
		id: 7,
		letter: 'i',
		image: '/assets/images/screwdriver.svg',
		alt: `The Tenth Doctor's sonic screwdriver in place of a letter I`,
		active: false
	}
]);
