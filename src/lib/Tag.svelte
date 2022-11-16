<script lang="ts">
	export let tag: string;
</script>

<div
	class="tag rounded-full px-6 py-2 w-min transition-all duration-300 bg-gradient-to-r to-fuchsia-600 from-indigo-600"
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
