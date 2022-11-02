<div class="pokeball-container">
	<div class="red" />
	<div class="white" />
	<div class="center" />
	<div class="center-outline" />
	<div class="center-line" />
	<div class="center-button" />
</div>

<style>
	.pokeball-container {
		position: relative;
		height: 200px;
		width: 100%;
	}

	.pokeball-container:hover > :nth-child(1) {
		top: unset;
		left: 50%;
		transform: translateX(-50%);
		background-color: red;
	}

	.pokeball-container:hover > :nth-child(2) {
		top: 50%;
		left: 50%;
		transform: translateX(-50%);
		background-color: white;
	}

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

	.white:hover {
		top: 50%;
		left: 50%;
		transform: translateX(-50%);
		background-color: white;
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
		width: 200px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: black;
		z-index: 8;
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
</style>
