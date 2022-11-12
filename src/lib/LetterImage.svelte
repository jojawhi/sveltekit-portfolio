<script lang="ts">
	import { fade } from 'svelte/transition';

	export let src: string;
	export let alt: string;
	export let id: number;
</script>

<div class="container justify-center align-center" transition:fade>
	<img class={id === 7 ? 'max-h-40 px-4' : 'max-h-52'} {src} {alt} />
</div>
