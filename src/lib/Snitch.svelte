<script lang="ts">
	export let onClick: () => void;
</script>

<div class="container relative mt-20">
	<button class="flit w-40 h-12 absolute" on:click={onClick}>
		<div class="l-wing absolute w-12 sm:w-16">
			<img class="w-16" src="/assets/images/nameLetters/l-wing.svg" alt="Golden Snitch left wing" />
		</div>
		<div class="snitch absolute w-8">
			<img
				class="w-6 sm:w-8"
				src="/assets/images/nameLetters/snitch.svg"
				alt="Golden Snitch body"
			/>
		</div>
		<div class="r-wing absolute w-16">
			<img
				class="w-12 sm:w-16"
				src="/assets/images/nameLetters/r-wing.svg"
				alt="Golden Snitch right wing"
			/>
		</div>
	</button>
</div>

<style>
	.flit {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation: flit 3000ms linear infinite;
	}

	.snitch {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}

	.l-wing {
		top: -2.5%;
		left: 11.5%;
		transform-origin: right bottom;
		z-index: 2;
		animation: flap-left 100ms ease-in-out infinite;
	}

	.r-wing {
		top: -2.5%;
		right: 6.5%;
		transform-origin: left bottom;
		z-index: 2;
		animation: flap-right 100ms ease-in-out infinite;
	}

	@keyframes flap-right {
		0% {
			transform: rotate(0);
		}

		33% {
			transform: rotate(-45deg);
		}

		66% {
			transform: rotate(45deg);
		}

		100% {
			transform: rotate(0);
		}
	}

	@keyframes flap-left {
		0% {
			transform: rotate(0);
		}

		33% {
			transform: rotate(45deg);
		}

		66% {
			transform: rotate(-45deg);
		}

		100% {
			transform: rotate(0);
		}
	}

	@keyframes flit {
		0% {
			transform: translate(-50%, -50%);
		}

		2% {
			transform: translate(-65%, -50%);
		}

		20% {
			transform: translate(-65%, -50%);
		}

		22% {
			transform: translate(-50%, -25%);
		}

		40% {
			transform: translate(-50%, -25%);
		}

		42% {
			transform: translate(-35%, -50%);
		}

		60% {
			transform: translate(-35%, -50%);
		}

		62% {
			transform: translate(-50%, -50%);
		}

		100% {
			transform: translate(-50%, -50%);
		}
	}

	@media only screen and (min-width: 640px) {
		.l-wing {
			top: -19%;
			left: 2%;
		}

		.r-wing {
			top: -19%;
			right: 2%;
		}
	}
</style>
