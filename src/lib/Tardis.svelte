<script lang="ts">
	import { displayStore } from './stores/displays';

	export let onClick: () => void;
</script>

<div
	class={$displayStore[3].display
		? 'materialize container w-32 p-4 mx-auto'
		: 'dematerialize container w-32 p-4 mx-auto'}
>
	<button class="w-full" on:click={onClick}>
		<img src="/assets/images/nameLetters/tardis.svg" alt="TARDIS from Doctor Who" />
	</button>
</div>

<style>
	.materialize {
		opacity: 0;
		animation: materialize 15000ms ease-in-out 1000ms forwards;
	}

	.dematerialize {
		display: block;
		animation: dematerialize 7500ms ease-in-out forwards;
	}
	@keyframes materialize {
		0% {
			opacity: 0;
		}

		10% {
			opacity: 0.9;
		}

		20% {
			opacity: 0;
		}

		25% {
			opacity: 0;
		}

		35% {
			opacity: 1;
		}

		45% {
			opacity: 0;
		}

		50% {
			opacity: 0;
		}

		60% {
			opacity: 1;
		}

		70% {
			opacity: 0;
		}

		75% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes dematerialize {
		0% {
			display: block;
			opacity: 1;
		}

		10% {
			display: block;
			opacity: 0;
		}

		20% {
			display: block;
			opacity: 1;
		}

		35% {
			display: block;
			opacity: 0;
		}

		45% {
			display: block;
			opacity: 1;
		}

		55% {
			display: block;
			opacity: 0;
		}

		65% {
			display: block;
			opacity: 1;
		}

		75% {
			display: block;
			opacity: 0;
		}

		85% {
			display: block;
			opacity: 1;
		}

		100% {
			display: none;
			opacity: 0;
		}
	}
</style>
