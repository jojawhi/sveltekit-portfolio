<script lang="ts">
	import { fade } from 'svelte/transition';

	export let src: string;
	export let alt: string;
	export let id: number;
</script>

<div class="container flex flex-col justify-start" transition:fade>
	<img class={id === 7 ? 'max-h-40 w-50' : 'max-h-52'} {src} {alt} />
</div>
