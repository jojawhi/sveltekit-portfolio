<script lang="ts">
	export let onClick: () => void;
</script>

<div class="container w-32 p-4 mx-auto">
	<button class="w-full" on:click={onClick}>
		<img src="/assets/images/nameLetters/tardis.svg" alt="TARDIS from Doctor Who" />
	</button>
</div>
