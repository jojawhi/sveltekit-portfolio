<script lang="ts">
	export let width: string = `${24}rem`;

	let hover: boolean = false;
	let pulse: boolean = false;

	const onHover = () => {
		hover = true;
	};

	const onClick = () => {
		pulse = true;

		setTimeout(() => {
			pulse = false;
		}, 250);
	};
</script>

<div style="--width:{width}" class="pokeball-container" on:mouseenter={onHover} on:click={onClick}>
	<div class={hover ? 'red redMoveOut' : 'red'} />
	<div class={hover ? 'white whiteMoveOut' : 'white'} />
	<div class="center" />
	<div class="center-outline" />
	<div class="center-button" />
	<div class={hover ? 'center-line shrink-line' : 'center-line'} />
	<p class="choose">Choose</p>
	<p class="me">Me!</p>
	<div class={pulse ? 'pulse pulse-outer-div' : 'pulse-outer-div'} />
	<div class={pulse ? 'pulse pulse-inner-div' : 'pulse-inner-div'} />
</div>

<style>
	.pokeball-container {
		position: relative;
		padding-bottom: calc(var(--width) / 3.5);
		width: var(--width);
		/* background-color: lightblue; */
		cursor: pointer;
	}

	/* Red half animate on hover */
	.pokeball-container:hover > :nth-child(1) {
		animation: redMoveIn 300ms ease-out forwards;
	}

	/* White half animate on hover */
	.pokeball-container:hover > :nth-child(2) {
		animation: whiteMoveIn 300ms ease-out forwards;
	}

	/* Center line grow and rotate on hover */
	.pokeball-container:hover > :nth-child(6) {
		animation: rotateLine 150ms linear 150ms forwards;
	}

	/* Text disappear on hover */
	.pokeball-container:hover > :nth-child(7),
	.pokeball-container:hover > :nth-child(8) {
		opacity: 0;
	}

	/* Reverse animation classes added with JS on first hover */
	/* Prevents the reverse animation running on load */
	.redMoveOut {
		animation: redMoveOut 500ms ease-out forwards;
	}

	.whiteMoveOut {
		animation: whiteMoveOut 500ms ease-out forwards;
	}

	.shrink-line {
		animation: shrinkLine 300ms linear forwards;
	}

	/* Pulse on click */
	/* .pokeball-container:active > :nth-child(9) {
		animation: pulseOuter 250ms linear forwards;
	}

	.pokeball-container:active > :nth-child(10) {
		animation: pulseInner 250ms linear forwards;
	} */

	.pulse {
		animation: pulse 250ms linear forwards;
	}

	/* Pieces */
	.red {
		position: absolute;
		padding-top: 12%;
		width: 25%;
		top: 50%;
		left: 0;
		border-top: 2px solid black;
		border-left: 2px solid black;
		border-right: 2px solid black;
		border-radius: 1000px 1000px 0 0;
		transform: translateY(-50%) rotate(-90deg);
		transition: all 300ms;
		z-index: 2;
	}

	.white {
		position: absolute;
		padding-top: 12%;
		width: 25%;
		top: 50%;
		right: 0;
		border-bottom: 2px solid black;
		border-left: 2px solid black;
		border-right: 2px solid black;
		border-radius: 100px 100px 0 0;
		border-radius: 0 0 1000px 1000px;
		transform: translateY(-50%) rotate(-90deg);
		transition: all 300ms;
		z-index: 1;
	}

	.center {
		position: absolute;
		width: 5.5%;
		padding-bottom: 5.5%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: white;
		border-radius: 1000px;
		z-index: 10;
	}

	.center-outline {
		position: absolute;
		width: 8%;
		padding-bottom: 8%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: black;
		border-radius: 1000px;
		z-index: 9;
	}

	.center-button {
		position: absolute;
		width: 3.5%;
		padding-bottom: 3%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: white;
		border-radius: 1000px;
		border: 1px solid black;
		z-index: 11;
	}
	.center-line {
		position: absolute;
		height: 4%;
		width: 2%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-90deg);
		background-color: black;
		z-index: 8;
		transition: all 500ms ease-in;
	}

	/* Text */
	.choose {
		position: absolute;
		top: 0;
		left: 50%;
		font-size: calc(var(--width) - (var(--width) * 0.93));
		font-weight: bold;
		text-transform: uppercase;
		transform: translate(-50%, 0);
		opacity: 1;
		transition: all 400ms;
	}

	.me {
		position: absolute;
		bottom: 0;
		left: 50%;
		font-size: calc(var(--width) - (var(--width) * 0.93));
		font-weight: bold;
		text-transform: uppercase;
		transform: translate(-50%, 0);
		opacity: 1;
		transition: all 400ms;
	}

	.pulse-outer-div {
		position: absolute;
		padding-top: 25%;
		width: 25.75%;
		top: 50%;
		left: 50%;
		background-color: transparent;
		border: 1px solid yellow;
		border-radius: 1000px;
		transform: translate(-50%, -50%);
		opacity: 0;
		z-index: 12;
	}

	.pulse-inner-div {
		position: absolute;
		width: 8.75%;
		padding-bottom: 8%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: transparent;
		border: 1px solid yellow;
		border-radius: 50%;
		opacity: 0;
		z-index: 12;
	}

	/* Animations */

	/* Red half animations */
	@keyframes redMoveIn {
		0% {
			top: 50%;
			left: 0;
			background-color: transparent;
			transform: translate(0, -50%) rotate(-90deg);
		}

		70% {
			top: 50%;
			left: 40%;
			background-color: transparent;
			transform: translate(-40%, -50%) rotate(-90deg);
		}

		80% {
			top: 50%;
			left: 45%;
			background-color: red;
			transform: translate(-45%, -50%) rotate(-90deg);
		}

		100% {
			top: 50%;
			left: 50%;
			background-color: red;
			transform: translate(-50%, -100%) rotate(0);
		}
	}
	@keyframes redMoveOut {
		0% {
			top: 50%;
			left: 50%;
			background-color: red;
			transform: translate(-50%, -50%) rotate(0);
		}

		20% {
			top: 50%;
			left: 45%;
			background-color: transparent;
			transform: translate(-45%, -50%) rotate(-90deg);
		}

		100% {
			top: 50%;
			left: 0;
			background-color: transparent;
			transform: translate(0, -50%) rotate(-90deg);
		}
	}

	/* White half animations */
	@keyframes whiteMoveIn {
		0% {
			top: 50%;
			background-color: transparent;
			transform: translate(0, -50%) rotate(-90deg);
		}

		70% {
			top: 50%;
			right: 40%;
			background-color: transparent;
			transform: translate(40%, -50%) rotate(-90deg);
		}

		80% {
			top: 50%;
			right: 45%;
			background-color: white;
			transform: translate(45%, -50%) rotate(-90deg);
		}

		100% {
			top: 50%;
			right: 50%;
			background-color: white;
			transform: translate(50%, 0) rotate(0);
		}
	}

	@keyframes whiteMoveOut {
		0% {
			top: 50%;
			right: 50%;
			background-color: white;
			transform: translate(50%, 0) rotate(0);
		}

		20% {
			top: 50%;
			right: 25%;
			background-color: transparent;
			transform: translate(25%, -50%) rotate(-90deg);
		}

		100% {
			top: 50%;
			right: 0;
			background-color: transparent;
			transform: translate(0, -50%) rotate(-90deg);
		}
	}

	/* Center line animations */
	@keyframes rotateLine {
		0% {
			width: 2.75%;
			transform: translate(-50%, -50%) rotate(-90deg);
		}

		100% {
			width: 25%;
			transform: translate(-50%, -50%) rotate(0deg);
		}
	}
	@keyframes shrinkLine {
		0% {
			width: 25%;
			transform: translate(-50%, -50%) rotate(0deg);
		}

		100% {
			width: 2.75%;
			transform: translate(-50%, -50%) rotate(-90deg);
		}
	}

	/* Pulse on click animations */
	@keyframes pulse {
		0% {
			opacity: 0;
			transform: translate(-50%, -50%) scale(1);
		}

		50% {
			opacity: 0.5;
			transform: translate(-50%, -50%) scale(1.5);
		}

		100% {
			opacity: 0;
			transform: translate(-50%, -50%) scale(1.75);
		}
	}
</style>
