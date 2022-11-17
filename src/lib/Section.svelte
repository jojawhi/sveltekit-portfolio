<script lang="ts">
	export let id: string;
	export let projectType: string | undefined = undefined;
</script>

<section {id} class="flex w-full h-full mt-8">
	<div class="rounded-2xl w-full h-full bg-gradient-to-r p-[4px] from-indigo-500 to-fuchsia-500">
		<div
			class={projectType === 'graphic'
				? 'inner flex flex-col h-full min-h-[50vh] justify-center bg-[#333336] rounded-2xl p-8'
				: 'inner flex flex-col h-full min-h-[50vh] justify-center bg-[#1b1b1d] rounded-2xl p-8'}
		>
			<slot />
		</div>
	</div>
</section>

<!-- bg-[#541353] -->
<style>
	#about .inner {
		padding: 4rem;
	}
</style>
