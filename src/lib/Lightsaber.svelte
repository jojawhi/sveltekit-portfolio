<script lang="ts">
	export let onClick: () => void;

	let saberOn = false;
</script>

<div class="container flex relative h-12 items-center mt-4 md:px-8 mx-auto">
	<button class="" on:click={onClick}>
		<img
			class="hilt w-28 sm:w-36 md:w-44 lg:w-60"
			on:click={() => {
				saberOn = !saberOn;
			}}
			src="/assets/images/nameLetters/lightsaber.svg"
			alt="lightsaber"
		/>
	</button>

	<div
		class={saberOn
			? 'unsheathe blade md:h-[0.25rem] lg:h-2 -ml-[0.75rem] mt-[0.25rem] md:mt-[0.75rem] lg:mt-[0.875rem]'
			: 'sheathe blade md:h-[0.25rem] -ml-[0.75rem] mt-[0.25rem] md:mt-[0.75rem] lg:mt-[0.875rem]'}
	/>
</div>

<style>
	.container button {
		/* top: 50%; */
		z-index: 10;
		/* transform: translateY(-50%); */
	}

	/* .hilt {
	} */

	.blade {
		/* top: 53%;
		left: 20%; */
		max-width: 75%;
		background: rgb(90, 255, 255);
		box-shadow: 0 0 4px 2px cyan, 0 0 8px 4px white;
		border-radius: 0 10% 10% 0;
		opacity: 0;
		z-index: 1;
	}

	.unsheathe {
		animation: unsheathe 300ms linear forwards;
	}

	.sheathe {
		animation: sheathe 300ms linear forwards;
	}

	@keyframes unsheathe {
		from {
			width: 0;
			opacity: 0;
		}

		to {
			width: 100%;
			opacity: 1;
		}
	}

	@keyframes sheathe {
		0% {
			width: 100%;
			opacity: 1;
		}

		75% {
			width: 25%;
			opacity: 1;
		}

		100% {
			width: 0;
			opacity: 0;
		}
	}

	/* @media only screen and (min-width: 640px) {
		.blade {
			max-width: 75%;
		}
	} */
</style>
