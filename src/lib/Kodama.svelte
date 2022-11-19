<div class="container flex flex-col justify-center items-center">
	<img
		class="kodama-head rattle h-14"
		src="/assets/images/nameLetters/kodama-head.svg"
		alt="kodama-head"
	/>
	<img
		class="kodama-body h-16 -mt-[5px]"
		src="/assets/images/nameLetters/kodama-body.svg"
		alt="kodama-body"
	/>
</div>

<style>
	/* .kodama-head {
		height: 3rem;
	}

	.kodama-body {
		height: 4rem;
	} */

	.rattle {
		animation: rattle 5000ms ease-in-out infinite;
	}

	@keyframes rattle {
		0% {
			transform: rotate(0deg);
		}

		20% {
			transform: rotate(55deg);
		}

		32.5% {
			transform: rotate(55deg);
		}

		35% {
			transform: rotate(60deg);
		}

		36.5% {
			transform: rotate(50deg);
		}

		38% {
			transform: rotate(-50deg);
		}

		39.5% {
			transform: rotate(50deg);
		}

		41% {
			transform: rotate(-50deg);
		}
		42.5% {
			transform: rotate(50deg);
		}

		43% {
			transform: rotate(-50deg);
		}

		44.5% {
			transform: rotate(50deg);
		}

		46% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(0deg);
		}
	}
</style>
