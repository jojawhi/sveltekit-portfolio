<script lang="ts">
	export let onClick: () => void;
	export let buttonType: string = 'default';
	export let type: string | undefined = undefined;

	const buttonTypes: { [key: string]: string } = {
		default:
			'font-bold px-8 py-4 mt-4 w-max rounded-lg transition-all duration-300 bg-gradient-to-r to-pink-400 via-indigo-500 from-pink-400 bg-size-200 bg-pos-0 hover:bg-pos-100',
		contact:
			'font-bold px-8 py-4 mt-4 w-full rounded-lg transition-all duration-300 bg-gradient-to-r to-pink-400 via-indigo-500 from-pink-400 bg-size-200 bg-pos-0 hover:bg-pos-100',
		white: 'font-bold px-8 py-4 mt-4 w-min rounded-lg transition-all duration-300 bg-neutral-50',
		clear: 'w-max bg-transparent'
	};
</script>

<button class={buttonTypes[buttonType]} on:click={onClick} {type}>
	<slot />
</button>
