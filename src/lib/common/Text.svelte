<script lang="ts">
	export let type: string;
	export let content: string;

	const textTypes: { [key: string]: string } = {
		hero: 'gradient-text font-extrabold text-5xl mt-16',
		pageTitle: 'gradient-text font-extrabold text-4xl leading-tight mt-40 text-center',
		heading: 'font-extrabold text-indigo-500 text-3xl',
		subheading: 'font-bold text-white text-xl mb-4',
		body: 'text-justify text-white text-base mb-4',
		validation: 'text-fuchsia-400 text-sm self-start'
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
{:else if type === 'hero' || 'pageTitle'}
	<h1 class={textTypes[type]}>
		{content}
	</h1>
{:else if type === 'body'}
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
