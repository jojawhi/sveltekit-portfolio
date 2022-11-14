<script>
	import Section from '$lib/Section.svelte';
	import Text from './../lib/common/Text.svelte';
	import Name from '$lib/Name.svelte';
	import HeroIcons from '$lib/HeroIcons.svelte';
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Josh White's Web Dev Portfolio</title>
	<meta
		name="description"
		content="Josh White's full stack software developer portfolio, showcasing web development projects and experience with JavaScript, TypeScript, CSS, React.js, and Svelte."
	/>
</svelte:head>

<section class="flex flex-col gap-4">
	<div class="flex-col h-screen text-center">
		<!-- <Name /> -->
		<Text type="hero" content="Full Stack Developer" />
		<div class="container">
			<HeroIcons />
		</div>
	</div>
</section>

<Section id="basic-info">
	<Text type="heading" content="Welcome to my playground!" />
	<Text
		type="body"
		content="I use my personal site to experiment with new technologies and techniques that I learn, and I've
		turned this current version into a little game. Around the site, you will find triggers that
		will transform the letters in my name and give you some insight into my personality. Think you
		can find them all?"
	/>
	<Text type="subheading" content="Happy hunting!" />
</Section>
<Section id="portfolio">
	<Text type="hero" content="Software Development and Graphic Design Projects" />
</Section>
<Section id="about">
	<Text type="hero" content="This is Josh" />
</Section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&family=Ubuntu:wght@300;400;500;700&display=swap');

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		color: #fcfcfc;
	}

	/* h1 {
		font-family: 'Gotham', sans-serif;
		font-weight: 600;
		font-size: 6rem;
		width: 100%;
	} */

	/* .welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
