<script lang="ts">
	import Github from '$lib/Github.svelte';
	import Linkedin from '$lib/Linkedin.svelte';
	import Button from './common/Button.svelte';
	import Kodama from './Kodama.svelte';
	import { nameStore } from './stores/name';
	import { openAndCloseAfterTimeout } from './stores/drawer';

	// const icons = [
	// 	{
	// 		type: 'github',
	// 		src: '/assets/images/icons/github.svg',
	// 		alt: 'GitHub logo'
	// 	},
	// 	{
	// 		type: 'linkedin',
	// 		src: '/assets/images/icons/linkedin.svg',
	// 		alt: 'LinkedIn logo'
	// 	}
	// ];

	let fadeOut = false;

	const activateLetter = (index: number) => {
		if (!$nameStore[index].active) {
			$nameStore[index].active = true;
			openAndCloseAfterTimeout();
			fadeOut = true;
		} else {
			return;
		}
	};
</script>

<div class="container flex gap-16 p-8 rounded-2xl mt-8 justify-center items-center mx-auto">
	<a
		href="https://github.com/jojawhi"
		target="_blank"
		rel="noopener"
		class="github w-12 sm:w-16 transition-all duration-300"
	>
		<Github />
	</a>
	<a
		href="https://www.linkedin.com/in/jojawhi/"
		target="_blank"
		rel="noopener"
		class="linkedin w-12 sm:w-16  transition-all duration-300"
	>
		<Linkedin />
	</a>

	<Button buttonType="clear" onClick={() => activateLetter(0)}>
		<Kodama />
	</Button>
</div>

<style>
	.github {
		fill: url(#GithubGradient1);
		transition: all 300ms;
	}

	.github:hover {
		fill: #14b8a6; /*url(#GithubGradient2)*/
		transform: scale(1.05);
		/* animation: spin 500ms ease forwards; */
	}

	.linkedin {
		fill: url(#LinkedinGradient1);
		transition: all 300ms;
	}

	.linkedin:hover {
		fill: #14b8a6; /*url(#LinkedinGradient2)*/
		transform: scale(1.05);
		/* animation: spin 500ms ease-in-out forwards; */
	}

	@keyframes spin {
		from {
			transform: rotate(0deg) scale(1);
		}

		to {
			transform: rotate(360deg) scale(1.1);
		}
	}
</style>
