<script lang="ts">
	export let id: string;
</script>

<section {id} class="w-full h-screen mt-8">
	<div class="rounded-xl w-full h-full bg-gradient-to-r p-[5px] from-indigo-500 to-fuchsia-500">
		<div class="flex flex-col h-full bg-[#1b1b1d] rounded-xl p-4">
			<slot />
		</div>
	</div>
</section>
