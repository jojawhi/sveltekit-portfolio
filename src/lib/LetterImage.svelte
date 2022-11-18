<script lang="ts">
	import { fade } from 'svelte/transition';

	export let src: string;
	export let alt: string;
	export let id: number;
</script>

<div class="container flex flex-col mx-auto" transition:fade>
	{#if id === 7}
		<img class="max-h-20 sm:max-h-28 lg:max-h-36" {src} {alt} />
	{:else if id === 6}
		<img class="max-h-42" {src} {alt} />
	{:else}
		<img class="max-h-52 w-full" {src} {alt} />
	{/if}
</div>
