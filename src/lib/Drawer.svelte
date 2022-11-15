<script lang="ts">
	import Name from './Name.svelte';
	import DrawerButton from './DrawerButton.svelte';

	export let onClick: () => void;
	export let open: boolean;
</script>

<div
	class={open
		? 'open container absolute transition-all duration-300 rounded-xl bg-gradient-to-r p-[4px] from-indigo-500 to-fuchsia-500'
		: 'closed container absolute transition-all duration-300 rounded-xl bg-gradient-to-r p-[4px] from-indigo-500 to-fuchsia-500'}
>
	<div
		class={open
			? 'relative bg-[#1b1b1d] rounded-xl px-8 pt-12 pb-20'
			: 'relative bg-[#1b1b1d] rounded-xl px-8 pt-12'}
	>
		<Name />
		<DrawerButton {open} {onClick} />
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
		/* display: block; */
		top: 0;
		left: 50%;
		transform: translate(-50%, -5%);
	}
</style>
