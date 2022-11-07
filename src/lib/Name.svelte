<script lang="ts">
	import { nameStore } from './stores/name';
	import LetterImage from './LetterImage.svelte';
</script>

<div class="container grid grid-cols-7 mx-auto">
	{#each $nameStore as letter}
		{#if letter.active}
			<!-- <span class="active text-white text-7xl font-bold p-4">{letter.image}</span> -->
			<LetterImage src={letter.image} alt={letter.alt} />
		{:else}
			<span class="text-white text-7xl font-bold p-4">{letter.letter}</span>
		{/if}
	{/each}
</div>

<style>
	/* .active {
		font-family: "'89 Speed Affair Gradient";
	} */
</style>
