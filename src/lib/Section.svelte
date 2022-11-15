<script lang="ts">
	export let id: string;
</script>

<section {id} class="flex w-full h-full mt-8">
	<div class="rounded-2xl w-full h-full bg-gradient-to-r p-[4px] from-indigo-500 to-fuchsia-500">
		<div class="flex flex-col h-full bg-[#1b1b1d] rounded-2xl p-8">
			<slot />
		</div>
	</div>
</section>
