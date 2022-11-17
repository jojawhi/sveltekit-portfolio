<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Text from '$lib/common/Text.svelte';
	import Image from '$lib/common/Image.svelte';
	import Link from '$lib/common/Link.svelte';
	import Pokeball from '$lib/Pokeball.svelte';
</script>

<svelte:head>
	<title>About Josh</title>
	<meta name="description" content="Information web and software developer Josh White" />
</svelte:head>

<div class="container mx-auto">
	<Text type="pageTitle" content="This is Josh" />
	<Section id="about">
		<div class="mb-8">
			<Image src="/assets/images/headshot.jpg" alt="Josh White portrait" type="about" />
			<div class="container">
				<Text type="subheading" content="Web Developer" />
				<Text
					type="body"
					content="I'm a self-taught developer with a learning mindset. I love building projects with TypeScript and SvelteKit, and I am always excited about learning new technologies and tools to solve new and interesting problems."
				/>
				<Text type="subheading" content="Project Manager" />
				<Text
					type="body"
					content="With 4 years of experience leading remote teams, including 2 successful web development projects, I've got the organizational skills and experience you may need to keep your project on track."
				/>
				<Text type="subheading" content="Teacher" />
				<Text
					type="body"
					content="I have 10 years experience as an English language teacher for adult international students and newcomers to Canada. I specialized in project-based teaching with relevant, real-world course content, the most ideal approach for working with adults. I hope to apply this knowledge to building education software in the future."
				/>
				<Text type="subheading" content="Nerd" />
				<Text
					type="body"
					content="You may have noticed some odd elements on my site. I've placed some easter eggs from some of my favourite franchises to give you a bit of insight into what I like. I used this fun little function as an opportunity to practice my vector graphic skills in Illustrator and my CSS drawing and animation skills. I had a blast making them. See if you can find them all and unlock all of the nerdy letters of my nickname."
				/>
			</div>
		</div>
		<!-- <p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p> -->

		<Link type="pokeball" href="/contact">
			<Pokeball width="14rem" />
		</Link>
	</Section>
</div>
