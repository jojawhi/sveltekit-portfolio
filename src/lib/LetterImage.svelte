<script lang="ts">
	export let src: string;
	export let alt: string;
	export let id: number;
</script>

<div class="container justify-center align-center">
	<img class={id === 7 ? 'max-h-40 px-8' : 'max-h-52'} {src} {alt} />
</div>
