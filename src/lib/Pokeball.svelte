<script lang="ts">
	let hover: boolean = false;

	const onHover = () => {
		hover = true;
	};
</script>

<div class="pokeball-container" on:mouseenter={onHover}>
	<div class={hover ? 'red redMoveOut' : 'red'} />
	<div class={hover ? 'white whiteMoveOut' : 'white'} />
	<div class="center" />
	<div class="center-outline" />
	<div class="center-button" />
	<div class="center-line" />
	<p class="choose">Choose</p>
	<p class="me">Me!</p>
</div>

<style>
	.pokeball-container {
		position: relative;
		height: 200px;
		width: 100%;
		background-color: palegoldenrod;
	}

	/* Center line hover effect */
	.pokeball-container:hover > :nth-child(6) {
		width: 200px;
		transform: translate(-50%, -50%) rotate(0deg);
	}

	/* Text hover effects */
	.pokeball-container:hover > :nth-child(7),
	.pokeball-container:hover > :nth-child(8) {
		opacity: 0;
	}

	/* Red half hover effect */
	.pokeball-container:hover > :nth-child(1) {
		animation: redMoveIn 500ms ease-out forwards;
	}

	@keyframes redMoveIn {
		0% {
			top: 25%;
			left: 0;
			background-color: transparent;
			transform: translateX(0) rotate(-90deg);
		}

		70% {
			top: 25%;
			left: 40%;
			background-color: transparent;
			transform: translateX(-40%) rotate(-90deg);
		}

		80% {
			/* top: 0; */
			top: 25%;
			/* left: 50%; */
			left: 45%;
			background-color: red;
			/* transform: translateX(-50%) rotate(0); */
			transform: translateX(-50%) rotate(-90deg);
		}

		100% {
			top: 0;
			left: 50%;
			background-color: red;
			transform: translateX(-50%) rotate(0);
		}
	}
	@keyframes redMoveOut {
		0% {
			top: 0;
			left: 50%;
			background-color: red;
			transform: translateX(-50%) rotate(0);
		}

		20% {
			top: 25%;
			left: 40%;
			background-color: transparent;
			transform: translateX(-40%) rotate(-90deg);
		}

		100% {
			top: 25%;
			left: 0;
			background-color: transparent;
			transform: translateX(0) rotate(-90deg);
		}
	}

	/* White half */
	.pokeball-container:hover > :nth-child(2) {
		animation: whiteMoveIn 500ms ease-out forwards;
	}

	@keyframes whiteMoveIn {
		0% {
			top: 25%;
			/* right: 0; */
			background-color: transparent;
			transform: translateX(0) rotate(-90deg);
		}

		70% {
			top: 25%;
			/* right: 25%; */
			background-color: transparent;
			transform: translateX(-40%) rotate(-90deg);
		}

		80% {
			/* top: 50%; */
			top: 25%;
			/* right: 29.825%; */
			right: 24.775%;
			background-color: white;
			/* transform: translateX(-50%) rotate(0); */
			transform: translateX(-50%) rotate(-90deg);
		}

		100% {
			top: 50%;
			right: 29.825%;
			background-color: white;
			transform: translateX(-50%) rotate(0);
		}
	}

	@keyframes whiteMoveOut {
		0% {
			top: 50%;
			right: 29.825%;
			background-color: white;
			transform: translateX(-50%) rotate(0);
		}

		20% {
			top: 25%;
			right: 25%;
			background-color: transparent;
			transform: translateX(-40%) rotate(-90deg);
		}

		100% {
			top: 25%;
			right: 0;
			background-color: transparent;
			transform: translateX(0) rotate(-90deg);
		}
	}

	/* @keyframes rotateLine {
		0% {
			width: 50px;
			transform: translate(-50%, -50%) rotate(-90deg);
		}

		100% {
			width: 200px;
			transform: translate(-50%, -50%) rotate(0deg);
		}
	} */

	.red {
		position: absolute;
		height: 100px;
		width: 200px;
		top: 25%;
		border-top: 5px solid black;
		border-left: 5px solid black;
		border-right: 5px solid black;
		border-radius: 100px 100px 0 0;
		transform: rotate(-90deg);
		transition: all 300ms;
		z-index: 1;
	}

	.redMoveOut {
		animation: redMoveOut 500ms ease-out forwards;
	}

	.white {
		position: absolute;
		height: 100px;
		width: 200px;
		top: 25%;
		right: 0;
		border-bottom: 5px solid black;
		border-left: 5px solid black;
		border-right: 5px solid black;
		border-radius: 100px 100px 0 0;
		border-radius: 0 0 100px 100px;
		transform: rotate(-90deg);
		transition: all 300ms;
		z-index: 1;
	}

	.whiteMoveOut {
		animation: whiteMoveOut 500ms ease-out forwards;
	}

	.center {
		position: absolute;
		height: 40px;
		width: 40px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: white;
		border-radius: 1000px;
		z-index: 10;
	}

	.center-outline {
		position: absolute;
		height: 60px;
		width: 60px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: black;
		border-radius: 1000px;
		z-index: 9;
	}

	.center-line {
		position: absolute;
		height: 12px;
		width: 50px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-90deg);
		background-color: black;
		z-index: 8;
		transition: all 500ms ease-in;
	}

	.center-button {
		position: absolute;
		height: 30px;
		width: 30px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: white;
		border-radius: 1000px;
		border: 2px solid black;
		z-index: 11;
	}

	.choose {
		position: absolute;
		top: 0;
		left: 50%;
		font-size: 2rem;
		font-weight: bold;
		text-transform: uppercase;
		transform: translate(-50%, 50%);
		opacity: 1;
		transition: all 400ms;
	}

	.me {
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: 2rem;
		font-weight: bold;
		text-transform: uppercase;
		transform: translate(-50%, 60%);
		opacity: 1;
		transition: all 400ms;
	}
</style>
