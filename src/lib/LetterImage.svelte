<script lang="ts">
	import { fade } from 'svelte/transition';

	export let src: string;
	export let alt: string;
	export let id: number;
</script>

<div class="container flex flex-col mx-auto" transition:fade>
	<img class={id === 7 ? 'max-h-36' : 'max-h-52 w-full'} {src} {alt} />
</div>
