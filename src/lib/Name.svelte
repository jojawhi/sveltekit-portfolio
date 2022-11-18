<script lang="ts">
	import { nameStore } from './stores/name';
	import LetterImage from './LetterImage.svelte';
</script>

<div class="container grid grid-cols-7 gap-2 md:gap-4 lg:gap-6 mx-auto items-start pt-24">
	{#each $nameStore as letter}
		{#if letter.active}
			<LetterImage id={letter.id} src={letter.image} alt={letter.alt} />
		{:else}
			<span
				class="text-white text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold md:p-4"
			>
				{letter.letter}
			</span>
		{/if}
	{/each}
</div>
