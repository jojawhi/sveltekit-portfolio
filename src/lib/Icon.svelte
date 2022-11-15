<script lang="ts">
	export let src: string;
	export let alt: string;
	export let type: string;

	const iconTypes: { [key: string]: string } = {
		tech: 'flex max-h-16',
		social: 'flex max-h-16 w-16 fill-white'
	};
</script>

<div class={iconTypes[type]}>
	<img class={type === 'social' ? 'social' : ''} {src} {alt} />
</div>

<style>
</style>
