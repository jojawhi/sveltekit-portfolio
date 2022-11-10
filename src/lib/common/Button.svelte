<script lang="ts">
	export let onClick: () => void;
</script>

<button class="w-min bg-white mx-auto" on:click={onClick}>
	<slot />
</button>
