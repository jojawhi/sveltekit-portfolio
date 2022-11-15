<script lang="ts">
	export let tag: string;
</script>

<div
	class="tag rounded-lg px-4 py-2 w-min transition-all duration-300 bg-gradient-to-r to-fuchsia-500 from-indigo-500"
>
	<p class="font-bold text-white whitespace-nowrap">{tag}</p>
</div>

<style>
	.tag {
		display: inline-block;
		user-select: none;
	}
	.tag:hover {
		transform: scale(1.025);
	}
</style>
