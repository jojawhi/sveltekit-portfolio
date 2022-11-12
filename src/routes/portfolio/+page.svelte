<script lang="ts">
	import ProjectCard from '$lib/ProjectCard.svelte';

	const projects = [
		{
			title: 'Hockey Canada',
			role: 'Technical Project Manager, Support Developer',
			description: 'Hockey Canada website proof of concept',
			tags: ['Next.js', 'Styled Components', 'Linear'],
			image: '/assets/images/hc.png',
			url: '/'
		},
		{
			title: 'Folkwise.io',
			role: 'Developer',
			description: 'folkwise',
			tags: ['SvelteKit', 'SCSS', 'Markdown'],
			image: '/assets/images/folkwise.png',
			url: '/'
		},
		// {
		// 	title: 'Tabeyou',
		// 	role: 'Designer, Developer',
		// 	description: 'Meal planning crud app',
		// 	tags: ['Next.js', 'SCSS', 'Firebase'],
		// 	image: '',
		// 	url: '/'
		// },
		// {
		// 	title: 'PELA - Portfolio for English Language Assessment',
		// 	role: 'Designer, Developer',
		// 	description: 'LMS for LINC programs in Canada',
		// 	tags: ['Next.js', 'Tailwind CSS', 'Firebase'],
		// 	image: '',
		// 	url: '/'
		// },
		{
			title: 'Portfolio',
			role: 'Developer',
			description: 'this portfolio site',
			tags: ['SvelteKit', 'Tailwind CSS'],
			image: '/assets/images/hc.png',
			url: '/'
		}
	];
</script>

<svelte:head>
	<title>Josh White's Portfolio</title>
	<meta
		name="description"
		content="Josh White's portfolio of web and software development and graphic design projects"
	/>
</svelte:head>

<div class="project-container flex-col">
	<h1 class="text-white">Portfolio</h1>
	{#each projects as project, i}
		<ProjectCard {project} key={i + 1} />
	{/each}
</div>

<style>
	.project-container:nth-child(even) {
		flex-direction: column;
	}
</style>
