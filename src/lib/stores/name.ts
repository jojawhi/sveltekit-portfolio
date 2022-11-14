import { writable } from 'svelte/store';

export const nameStore = writable([
	{
		id: 1,
		letter: 'j',
		image: '/assets/images/nameLetters/leaf-totoro.svg',
		alt: 'A leaf and stem in the shape of a capital letter J with a small blue Totoro sitting on it.',
		active: false
	},
	{
		id: 2,
		letter: 'o',
		image: '/assets/images/nameLetters/ring.svg',
		alt: 'The One Ring from Lord of the Rings in place of a letter O',
		active: false
	},
	{
		id: 3,
		letter: 'j',
		image: '/assets/images/nameLetters/dratini.svg',
		alt: 'The Pokemon Dratini in the shape of a letter J',
		active: false
	},
	{
		id: 4,
		letter: 'a',
		image: '/assets/images/nameLetters/combadge.svg',
		alt: 'A Star Trek communication badge in place of the letter A',
		active: false
	},
	{
		id: 5,
		letter: 'w',
		image: '/assets/images/nameLetters/xwing.svg',
		alt: 'Bird eye view of an X-Wing fighter from Star Wars in place of a letter W',
		active: false
	},
	{
		id: 6,
		letter: 'h',
		image: '/assets/images/nameLetters/harry.png',
		alt: 'A letter H in the style of the Harry Potter logo with a lightning bolt at the bottom of one side',
		active: false
	},
	{
		id: 7,
		letter: 'i',
		image: '/assets/images/nameLetters/screwdriver.svg',
		alt: `The Tenth Doctor's sonic screwdriver in place of a letter I`,
		active: false
	}
]);
