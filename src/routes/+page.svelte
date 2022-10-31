<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>jojawhi</title>
	<meta name="description" content="Josh White's personal website" />
</svelte:head>

<section>
	<h1>
		<!-- <span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app -->
		JOJAWHI
	</h1>
	<h2>Frontend Developer</h2>
	<p>Welcome to my playground!</p>

	<!-- <Counter /> -->
</section>

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

	h1 {
		font-family:'Raleway', sans-serif;
		font-weight: 600;
		font-size: 6rem;
		width: 100%;

	}

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
