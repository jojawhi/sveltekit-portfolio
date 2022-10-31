<script lang="ts">
	import { nameStore } from '$lib/stores/name';

	const activateLetter = (index: number) => {
		$nameStore[index].active = true;
	};
</script>

<div class="flex-col items-center">
	<h1 class="text-white">Contact</h1>
	<button
		class="width-full font-bold px-8 py-4 mt-4 rounded-lg transition-all duration-300 bg-gradient-to-r to-pink-400 via-indigo-500 from-pink-400 bg-size-200 bg-pos-0 hover:bg-pos-100"
		on:click={() => activateLetter(6)}>Activate Final Letter!</button
	>
</div>
