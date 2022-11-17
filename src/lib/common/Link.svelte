<script lang="ts">
	export let href: string;
	export let anchorText: string | null = null;
	export let type: string;

	const linkTypes: { [key: string]: string } = {
		default: 'text-red-500',
		project:
			'font-extrabold text-[#1b1b1d] text-center px-12 py-4 rounded-full transition-all duration-300 bg-gradient-to-r to-teal-500 via-fuchsia-500 from-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:scale-105',
		pokeball:
			'text-white font-bold px-4 py-2 mt-4 w-max mx-auto rounded-full transition-all duration-500 bg-gradient-to-r to-teal-500 via-fuchsia-500 from-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100'
	};
</script>

<a class={`${linkTypes[type]} uppercase`} {href} target={type === 'pokeball' ? '' : '_blank'}>
	{#if anchorText}
		{anchorText}
	{:else}
		<slot />
	{/if}
</a>
