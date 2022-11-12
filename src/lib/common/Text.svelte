<script lang="ts">
	export let type: string;
	export let content: string;

	const textTypes: { [key: string]: string } = {
		hero: 'gradient-text font-extrabold text-5xl',
		heading: 'font-extrabold text-indigo-400 text-3xl',
		subheading: 'font-bold text-white text-xl mb-4',
		body: 'text-white text-md mb-4'
	};
</script>

{#if type === 'heading'}
	<h2 class={textTypes[type]}>
		{content}
	</h2>
{:else if type === 'subheading'}
	<h3 class={textTypes[type]}>
		{content}
	</h3>
{:else}
	<p class={textTypes[type]}>
		{content}
	</p>
{/if}

<style>
	.gradient-text {
		background-image: linear-gradient(90deg, #4f46e5, #c026d3);
		background-clip: text;
		color: transparent;
	}
</style>
