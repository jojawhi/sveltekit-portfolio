<script lang="ts">
	import Name from './Name.svelte';
	export let open: boolean;
</script>

<div
	class={open
		? 'open container bg-zinc-400 absolute transition-all duration-300'
		: 'closed container absolute transition-all duration-300'}
>
	<Name />
</div>

<style>
	.closed {
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 100%);
		opacity: 0;
	}

	.open {
		/* display: block; */
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
