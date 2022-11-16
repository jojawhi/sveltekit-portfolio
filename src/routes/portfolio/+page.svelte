<script lang="ts">
	import Text from '$lib/common/Text.svelte';
	import ProjectCard from '$lib/ProjectCard.svelte';
	import Section from '$lib/Section.svelte';

	const projects = [
		{
			title: 'Hockey Canada',
			role: 'Technical Project Manager, Support Developer',
			description: 'Hockey Canada website proof of concept',
			tags: ['Next.js', 'Styled Components', 'Linear'],
			image: '/assets/images/projects/hc-gif.gif',
			url: '/'
		},
		{
			title: 'Folkwise.io',
			role: 'Developer, Graphic Designer',
			description: 'folkwise',
			tags: ['SvelteKit', 'SCSS', 'Markdown', 'Sendgrid API', 'hCaptcha API'],
			image: '/assets/images/projects/folkwise.png',
			url: '/'
		},
		{
			title: 'Tabeyou',
			role: 'Owner, Sole Developer',
			description: 'Meal planning crud app',
			tags: ['Next.js', 'SCSS', 'Firebase'],
			image: '/assets/images/projects/hc.png',
			url: '/'
		},
		{
			title: 'Nanaimo Ultimate Association',
			role: 'Graphic Designer',
			description:
				'Logo, branding, seasonal graphics, and jersey design for local ultimate frisbee association.',
			tags: ['Illustrator'],
			image: '/assets/images/projects/nua_case.png'
		},
		// {
		// 	title: 'PELA - Portfolio for English Language Assessment',
		// 	role: 'Owner, Sole Developer',
		// 	description: 'LMS for LINC programs in Canada',
		// 	tags: ['Next.js', 'Tailwind CSS', 'Firebase'],
		// 	image: '',
		// 	url: '/'
		// },
		{
			title: 'Portfolio',
			role: 'Developer',
			description: 'this portfolio site',
			tags: ['SvelteKit', 'Tailwind CSS', 'Illustrator', 'Sendgrid API', 'hCaptcha API'],
			image: '/assets/images/projects/hc.png',
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
	<Text type="pageTitle" content="Software Development and Graphic Design Projects" />
	{#each projects as project, i}
		<Section id={`portfolio-${i}`}>
			<ProjectCard {project} key={i + 1} />
		</Section>
	{/each}
</div>

<style>
	.project-container:nth-child(even) {
		flex-direction: column;
	}
</style>
