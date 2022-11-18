<script lang="ts">
	import { page } from '$app/stores';
	import { nameStore } from '$lib/stores/name';
	import { drawerStore } from '$lib/stores/drawer';
	import Header from './Header.svelte';
	import Drawer from '$lib/Drawer.svelte';
	// import Link from '$lib/common/Link.svelte';
	import Github from '$lib/Github.svelte';
	import { openAndCloseAfterTimeout } from '$lib/stores/drawer';
	import '../app.css';
	import './styles.css';

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

<div class="app relative overflow-hidden">
	<Header />
	{#if $page.url.pathname != '/'}
		<Drawer onClick={drawerClick} />
	{/if}
	<main class="pt-12">
		<!-- <div class="content-wrapper" in:fade={{ duration: 150 }} out:fade={{ duration: 150 }}> -->
		<slot />
		<!-- </div> -->
	</main>

	<footer class="flex gap-4 w-full justify-center items-center text-center p-6 text-white">
		<p>
			Designed and developed by Josh White. &copy; Copyright 2022.
			<!-- <Link
				type="default"
				href="https://github.com/jojawhi"
				anchorText="GitHub"
				on:click={() => activateLetter(5)}
			/> -->
		</p>
		<a
			href="https://github.com/jojawhi/sveltekit-portfolio"
			target="_blank"
			rel="noopener"
			class="github w-8 sm:w-6"
			on:click={() => activateLetter(0)}
		>
			<Github />
		</a>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	/* footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		color: #fcfcfc;
	} */

	.github {
		fill: url(#GithubGradient1);
		transition: all 300ms;
	}

	.github:hover {
		fill: #14b8a6; /*url(#GithubGradient2)*/
		animation: spin 500ms ease forwards;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg) scale(1);
		}

		to {
			transform: rotate(360deg) scale(1.1);
		}
	}

	@media (min-width: 480px) {
		/* footer {
			padding: 12px 0;
		} */
	}
</style>
