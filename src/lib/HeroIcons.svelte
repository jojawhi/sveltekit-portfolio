<script lang="ts">
	import Icon from './Icon.svelte';

	const icons = [
		{
			type: 'typescript',
			src: '/assets/images/logos/ts.svg',
			alt: 'TypeScript logo'
		},
		{
			type: 'react',
			src: '/assets/images/logos/react.svg',
			alt: 'React logo'
		},
		{
			type: 'svelte',
			src: '/assets/images/logos/svelte.svg',
			alt: 'Svelte logo'
		},
		{
			type: 'next',
			src: '/assets/images/logos/next.svg',
			alt: 'Next logo'
		},
		{
			type: 'css',
			src: '/assets/images/logos/css.svg',
			alt: 'CSS logo'
		},
		{
			type: 'sass',
			src: '/assets/images/logos/sass.svg',
			alt: 'Sass logo'
		},
		{
			type: 'tailwind',
			src: '/assets/images/logos/tailwind.svg',
			alt: 'Tailwind logo'
		},
		{
			type: 'firebase',
			src: '/assets/images/logos/firebase.svg',
			alt: 'Firebase logo'
		}
	];
</script>

<div
	class="container grid grid-cols-4 gap-10 p-8 max-w-fit rounded-2xl mt-12 justify-center items-center"
>
	{#each icons as icon}
		<Icon type="tech" src={icon.src} alt={icon.alt} />
	{/each}
</div>
