<script lang="ts">
	import { onMount } from 'svelte';
	import { nameStore } from '$lib/stores/name';
	import Header from './Header.svelte';
	import Github from '$lib/Github.svelte';
	import Snitch from '$lib/Snitch.svelte';
	import { openAndCloseAfterTimeout } from '$lib/stores/drawer';
	import '../app.css';
	import './styles.css';

	const snitchOptions: { [key: number]: string } = {
		0: 'hidden',
		1: 'right',
		2: 'left'
	};

	let snitchVisible = snitchOptions[0];

	onMount(() => {
		showSnitch();
	});

	const activateLetter = (index: number) => {
		if (!$nameStore[index].active) {
			$nameStore[index].active = true;
			if (index === 5) {
				snitchVisible = snitchOptions[0];
			}
			openAndCloseAfterTimeout();
		} else {
			return;
		}
	};

	const showSnitch = () => {
		snitchVisible = snitchOptions[Math.floor(Math.random() * 2 + 1)];

		setTimeout(() => {
			hideSnitch();
		}, Math.floor(Math.random() * 10000 + 1));
	};

	const hideSnitch = () => {
		snitchVisible = snitchOptions[0];

		if (!$nameStore[5].active) {
			setTimeout(() => {
				showSnitch();
			}, Math.floor(Math.random() * 10000 + 1));
		}
	};
</script>

<div class="app relative overflow-hidden">
	<Header />

	<main class="relative">
		{#if snitchVisible != 'hidden'}
			<div class={`${snitchVisible} absolute`}>
				<Snitch onClick={() => activateLetter(5)} />
			</div>
		{/if}
		<!-- <div class="content-wrapper" in:fade={{ duration: 150 }} out:fade={{ duration: 150 }}> -->
		<slot />
		<!-- </div> -->
	</main>

	<footer class="flex gap-4 w-full justify-center items-center text-center p-6 text-white">
		<p class="text-sm md:text-base">
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

	/* .snitch {
		top: 40%;
		left: 50%;
		transform: translateX(-50%);
	} */

	.right {
		top: 4rem;
		right: 15%;
		transform: translateX(0);
	}

	.left {
		top: 4rem;
		left: 15%;
		transform: translateX(0);
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

	@media (min-width: 640px) {
		.top {
			top: 40%;
			left: 10%;
			transform: translateX(0);
		}

		.bottom {
			top: 40%;
			right: 10%;
			transform: translateX(0);
		}
	}
</style>
