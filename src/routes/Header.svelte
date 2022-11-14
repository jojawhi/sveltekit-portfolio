<script lang="ts">
	import { page } from '$app/stores';
	import { nameStore } from '$lib/stores/name';

	const activateLetter = (index: number) => {
		$nameStore[index].active = true;
	};
	// import logo from '$lib/images/svelte-logo.svg';
	// import github from '$lib/images/github.svg';
</script>

<header>
	<!-- <div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div> -->

	<nav class="pt-4">
		<!-- <svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg> -->
		<ul class="flex gap-4">
			<li class:active={$page.url.pathname === '/'} on:click={() => activateLetter(0)}>
				<a href="/" class="">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/portfolio'} on:click={() => activateLetter(1)}>
				<a href="/portfolio">Portfolio</a>
			</li>
			<li class:active={$page.url.pathname === '/about'} on:click={() => activateLetter(5)}>
				<a href="/about">About</a>
			</li>
			<!-- <li class:active={$page.url.pathname === '/blog'} on:click={() => activateLetter(3)}>
				<a href="/blog">Blog</a>
			</li> -->
			<li class:active={$page.url.pathname === '/contact'} on:click={() => activateLetter(4)}>
				<a href="/contact">Contact</a>
			</li>
			<!-- <li class:active={$page.url.pathname.startsWith('/sverdle')}>
				<a href="/sverdle">Sverdle</a>
			</li> -->
		</ul>
		<!-- <svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg> -->
	</nav>

	<!-- <div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div> -->
</header>

<style>
	header {
		display: flex;
		justify-content: center;
	}

	/* .corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	} */

	/* nav {
		display: flex;
		justify-content: center;
		--background: #fcfcfc;
	} */

	/* svg {
		width: 2em;
		height: 3em;
		display: block;
	} */

	/* path {
		fill: var(--background);
	} */

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		/* background: var(--background);
		background-size: contain; */
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		/* --size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1); */
		content: '';
		width: 100%;
		height: 4px;
		position: absolute;
		bottom: 35%;
		background-image: linear-gradient(90deg, #4f46e5, #c026d3);
	}

	li a {
		/* display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear; */
		font-weight: 700;
		font-size: 1.1rem;
		background-image: linear-gradient(90deg, white, white);
		background-clip: text;
		color: transparent;
		text-transform: uppercase;
		text-decoration: none;
		transition: all 300ms;
	}

	li a:hover {
		background-image: linear-gradient(90deg, #4f46e5, #c026d3);
		background-clip: text;
		color: transparent;
	}
</style>
