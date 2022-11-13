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
	<Button type="default" onClick={() => activateLetter(6)}>Activate Final Letter!</Button>
	<Button type="white" onClick={() => console.log('clicked')}>
		<Pokeball width="24rem" />
	</Button>
</div>
