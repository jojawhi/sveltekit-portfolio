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
		animation: materialize 15000ms ease-in-out 5000ms forwards;
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
			opacity: 1;
		}

		10% {
			opacity: 0;
		}

		20% {
			opacity: 1;
		}

		35% {
			opacity: 0;
		}

		45% {
			opacity: 1;
		}

		55% {
			opacity: 0;
		}

		65% {
			opacity: 1;
		}

		75% {
			opacity: 0;
		}

		85% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}
</style>
