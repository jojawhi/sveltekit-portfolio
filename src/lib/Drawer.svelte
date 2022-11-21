<script lang="ts">
	import Name from './Name.svelte';
	import DrawerButton from './DrawerButton.svelte';
	import { drawerStore } from './stores/drawer';

	export let onClick: () => void;
</script>

<div
	class={$drawerStore
		? `open container absolute w-max transition-all duration-300 rounded-xl bg-gradient-to-r p-[4px] from-indigo-500 to-fuchsia-500`
		: `closed container absolute w-max transition-all duration-300 rounded-xl bg-gradient-to-r p-[4px] from-indigo-500 to-fuchsia-500`}
>
	<div
		class={$drawerStore
			? 'relative bg-[#1b1b1d] rounded-xl px-8 pt-12 pb-20'
			: 'relative bg-[#1b1b1d] rounded-xl px-8 pt-12'}
	>
		<Name />
		<DrawerButton {onClick} />
	</div>
</div>

<style>
	.closed {
		top: 0;
		left: 50%;
		transform: translate(-50%, -100%);
		opacity: 1;
	}

	.open {
		top: 0;
		left: 50%;
		transform: translate(-50%, -5%);
	}
</style>
