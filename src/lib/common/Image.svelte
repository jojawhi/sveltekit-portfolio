<script lang="ts">
	export let src: string;
	export let alt: string;
	export let type: string;

	const imageTypes: { [key: string]: string } = {
		about: 'image-wrapper container rounded-full'
	};
</script>

{#if type === 'about'}
	<div
		class="round flex sm:float-right container w-full sm:w-1/2 sm:ml-12 mb-8 aspect-square rounded-full bg-gradient-to-r p-[5px] from-indigo-500 to-fuchsia-500"
	>
		<img {src} {alt} class={imageTypes[type]} />
	</div>
{:else}
	<div class="flex">
		<img {src} {alt} class={imageTypes[type]} />
	</div>
{/if}

<style>
	.round {
		shape-outside: circle();
	}
</style>
