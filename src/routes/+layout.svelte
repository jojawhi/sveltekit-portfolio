<script lang="ts">
	import Header from './Header.svelte';
	import Name from '$lib/Name.svelte';
	import { nameStore } from '$lib/stores/name';
	import '../app.css';
	import './styles.css';

	const activateLetter = (index: number) => {
		$nameStore[index].active = true;
	};
</script>

<div class="app">
	<Header />
	<Name />

	<main>
		<slot />
	</main>

	<footer>
		<p>
			Designed and developed by Josh White. Copyright 2022 <a
				href="https://github.com/jojawhi"
				target="_blank"
				on:click={() => activateLetter(5)}>GitHub</a
			>
		</p>
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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		color: #fcfcfc;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
