<script lang="ts">
	import { page } from '$app/stores';
	import { nameStore } from '$lib/stores/name';
	import { drawerStore } from '$lib/stores/drawer';
	import { openAndCloseAfterTimeout } from '$lib/stores/drawer';
	import Drawer from '$lib/Drawer.svelte';

	const drawerClick = () => {
		drawerStore.set(!$drawerStore);
	};

	const activateLetter = (index: number) => {
		if (!$nameStore[index].active) {
			$nameStore[index].active = true;
			openAndCloseAfterTimeout();
		} else {
			return;
		}
	};
</script>

<header class="fixed self-center w-full">
	{#if $page.url.pathname != '/'}
		<Drawer
			onClick={() => {
				drawerClick();
				activateLetter(1);
			}}
		/>
	{/if}

	<nav
		class="z-10 w-screen flex justify-center pt-8 px-2 sm:px-8 bg-gradient-to-b from-[#1b1b1d] to-transparent via-[#1b1b1d]"
	>
		<div
			class="links-container flex justify-between gap-2 sm:gap-4 text-sm sm:text-base md:text-lg"
		>
			<a class="nav-link" class:active={$page.url.pathname === '/'} href="/"> Home </a>
			<a class="nav-link" class:active={$page.url.pathname === '/portfolio'} href="/portfolio"
				>Portfolio</a
			>
			<a
				class="nav-link"
				class:active={$page.url.pathname === '/about'}
				on:click={() => activateLetter(3)}
				href="/about">About</a
			>
			<!-- <a
				class:active={$page.url.pathname === '/blog'}
				on:click={() => activateLetter(3)}
				href="/blog">Blog</a
			> -->
			<a class="nav-link" class:active={$page.url.pathname === '/contact'} href="/contact"
				>Contact</a
			>
		</div>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		z-index: 9999;
	}

	.links-container {
		/* width: min-content; */
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	.nav-link.active::before {
		content: '';
		width: 100%;
		height: 4px;
		position: absolute;
		bottom: 27%;
		background-image: linear-gradient(90deg, #4f46e5, #c026d3);
	}

	.nav-link {
		position: relative;
		font-weight: 700;
		width: min-content;
		background-image: linear-gradient(90deg, white, white);
		background-clip: text;
		color: transparent;
		text-transform: uppercase;
		text-decoration: none;
		transition: all 300ms;
	}

	.nav-link:hover {
		color: #14b8a6;
	}

	.nav-link:after {
		content: '';
		display: block;
		width: 100%;
		height: 3px;
		position: absolute;
		bottom: 27%;
		background-image: linear-gradient(90deg, #4f46e5, #c026d3);
		transform: scaleX(0);
		transition: all 150ms;
	}

	.nav-link:hover::after {
		transform: scaleX(1);
	}

	@media only screen and (max-width: 400px) {
		.nav-link:after {
			bottom: 0;
		}

		.nav-link.active::before {
			bottom: 0;
		}
	}
</style>
