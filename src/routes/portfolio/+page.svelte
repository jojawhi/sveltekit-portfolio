<script lang="ts">
	import Text from '$lib/common/Text.svelte';
	import ProjectCard from '$lib/ProjectCard.svelte';
	import Section from '$lib/Section.svelte';

	const projects = [
		{
			type: 'web',
			title: 'Hockey Canada Home Page',
			role: 'Technical Project Manager, Developer',
			description:
				'Provided development support and managed scheduling and kept meticulous records through discovery/requirements gathering, design iteration, and development of a proof of concept homepage for a proposed digital experience rebuild.',
			tags: ['Next.js', 'Styled Components', 'Vercel CI/CD', 'Linear'],
			image: '/assets/images/projects/hc-gif.gif'
			// url: '/'
		},
		{
			type: 'web',
			title: 'Folkwise.io',
			role: 'Developer, Graphic Designer',
			description:
				'A Markdown blog built with SvelteKit. I created graphics and branding, redesigned the UI, and integrated APIs for a secure contact form.',
			tags: ['SvelteKit', 'SCSS', 'Markdown', 'Sendgrid API', 'hCaptcha API', 'Vercel CI/CD'],
			image: '/assets/images/projects/folkwise.png'
			// url: '/'
		},
		// {
		// 	type: 'web',
		// 	title: 'Tabeyou',
		// 	role: 'Designer, Sole Developer',
		// 	description:
		// 		'This web app was born out of my love of cooking but also my complete lack of memory of what I know how to cook when it is time to make the weekly shopping list. Mostly a simple CRUD app with some custom scheduling features and hopefully OCR integration in the future.',
		// 	tags: ['Next.js', 'SCSS', 'Firebase'],
		// 	image: '/assets/images/projects/hc.png',
		// 	url: '/'
		// },
		{
			type: 'web',
			title: 'Portfolio',
			role: 'Developer',
			description:
				"The site you're on! Navigate around and see if you can unlock all the letter variants in my nickname.",
			tags: ['SvelteKit', 'CSS', 'Tailwind CSS', 'Sendgrid API', 'hCaptcha API', 'Illustrator'],
			image: '/assets/images/projects/portfolio.png'
			// url: '/'
		},
		{
			type: 'graphic',
			title: 'Nanaimo Ultimate Association',
			role: 'Graphic Designer',
			description:
				'Logo, branding, seasonal graphics, and jersey design for local ultimate frisbee association.',
			tags: ['Illustrator'],
			image: '/assets/images/projects/nua_case.png'
		}
		// {
		// 	title: 'PELA - Portfolio for English Language Assessment',
		// 	role: 'Owner, Sole Developer',
		// 	description: 'LMS for LINC programs in Canada',
		// 	tags: ['Next.js', 'Tailwind CSS', 'Firebase'],
		// 	image: '',
		// 	url: '/'
		// },
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
		<Section id={`portfolio-${i}`} projectType={project.type}>
			<ProjectCard {project} key={i + 1} />
		</Section>
	{/each}
</div>

<style>
	.project-container:nth-child(even) {
		flex-direction: column;
	}
</style>
