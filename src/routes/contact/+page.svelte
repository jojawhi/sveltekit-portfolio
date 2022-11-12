<script lang="ts">
	import Text from '$lib/common/Text.svelte';
	import Pokeball from './../../lib/Pokeball.svelte';
	import Button from '$lib/common/Button.svelte';
	import { nameStore } from '$lib/stores/name';

	const activateLetter = (index: number) => {
		$nameStore[index].active = true;
	};
</script>

<svelte:head>
	<title>Contact Josh</title>
	<meta
		name="description"
		content="Contact Josh White for web or software development service inquiries."
	/>
</svelte:head>

<div class="container flex flex-col mx-auto">
	<Text type="hero" content="Contact Josh" />
	<button
		class="font-bold px-8 py-4 mt-4 rounded-lg transition-all duration-300 bg-gradient-to-r to-pink-400 via-indigo-500 from-pink-400 bg-size-200 bg-pos-0 hover:bg-pos-100"
		on:click={() => activateLetter(6)}>Activate Final Letter!</button
	>
	<Button onClick={() => console.log('clicked')}>
		<Pokeball width="24rem" />
	</Button>
</div>
