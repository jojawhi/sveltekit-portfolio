<script lang="ts">
	import { nameStore } from './stores/name';
</script>

<div class="container flex justify-center mx-auto">
	{#each $nameStore as letter}
		{#if letter.active}
			<span class="active text-white text-7xl font-bold p-4">{letter.image}</span>
		{:else}
			<span class="text-white text-7xl font-bold p-4">{letter.letter}</span>
		{/if}
	{/each}
</div>

<style>
	.active {
		font-family: "'89 Speed Affair Gradient";
	}
</style>
