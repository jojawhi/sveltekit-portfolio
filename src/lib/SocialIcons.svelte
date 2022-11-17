<script lang="ts">
	import Github from '$lib/Github.svelte';
	import Linkedin from '$lib/Linkedin.svelte';

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
</script>

<div class="container flex gap-16 p-8 rounded-2xl mt-8 justify-center items-center mx-auto">
	<a
		href="https://github.com/jojawhi"
		target="_blank"
		rel="noopener"
		class="github w-16 transition-all duration-300"
	>
		<Github />
	</a>
	<a
		href="https://www.linkedin.com/in/jojawhi/"
		target="_blank"
		rel="noopener"
		class="linkedin w-16 transition-all duration-300"
	>
		<Linkedin />
	</a>
</div>

<style>
	.github {
		fill: url(#GithubGradient1);
		transition: all 300ms;
	}

	.github:hover {
		fill: #14b8a6; /*url(#GithubGradient2)*/
		animation: rattle 1000ms ease forwards;
	}

	.linkedin {
		fill: url(#LinkedinGradient1);
		transition: all 300ms;
	}

	.linkedin:hover {
		fill: #14b8a6; /*url(#LinkedinGradient2)*/
		/* transform: scale(1.1); */
		animation: rattle 1000ms ease-in-out forwards;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg) scale(1);
		}

		to {
			transform: rotate(360deg) scale(1.1);
		}
	}

	@keyframes rattle {
		0% {
			transform: rotate(0deg);
		}
		40% {
			transform: rotate(50deg);
		}
		50% {
			transform: rotate(50deg);
		}
		70% {
			transform: rotate(-50deg);
		}
		77.5% {
			transform: rotate(40deg);
		}
		85% {
			transform: rotate(-40deg);
		}
		/* 92.5% {
			transform: rotate(20deg);
		} */
		100% {
			transform: rotate(0deg);
		}
	}
</style>
