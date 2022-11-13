<script lang="ts">
	export let onClick: () => void;
	export let type: string = 'default';

	const buttonTypes: { [key: string]: string } = {
		default:
			'font-bold px-8 py-4 mt-4 w-min rounded-lg transition-all duration-300 bg-gradient-to-r to-pink-400 via-indigo-500 from-pink-400 bg-size-200 bg-pos-0 hover:bg-pos-100',
		white: 'font-bold px-8 py-4 mt-4 w-min rounded-lg transition-all duration-300 bg-neutral-50'
	};
</script>

<button class={buttonTypes[type]} on:click={onClick}>
	<slot />
</button>
