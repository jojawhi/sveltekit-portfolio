<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Button from '$lib/common/Button.svelte';
	import Text from '$lib/common/Text.svelte';
	import Drawer from '$lib/Drawer.svelte';

	// let open = false;

	// const onClick = () => {
	// 	open = !open;
	// };
</script>

<svelte:head>
	<title>About Josh</title>
	<meta name="description" content="Information web and software developer Josh White" />
</svelte:head>

<div class="container mx-auto">
	<Text type="pageTitle" content="This is Josh" />
	<Section id="about">
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

		<!-- <Button type="default" onClick={() => (open = !open)}>Open/Close</Button> -->
	</Section>
</div>
