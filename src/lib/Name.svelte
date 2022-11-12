<script lang="ts">
	import { nameStore } from './stores/name';
	import LetterImage from './LetterImage.svelte';
</script>

<div class="container grid grid-cols-7 gap-6 mx-auto text-center py-20">
	{#each $nameStore as letter}
		{#if letter.active}
			<LetterImage id={letter.id} src={letter.image} alt={letter.alt} />
		{:else}
			<span class="text-white text-7xl font-bold p-4">{letter.letter}</span>
		{/if}
	{/each}
</div>
