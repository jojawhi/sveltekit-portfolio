<script lang="ts">
	import Button from './common/Button.svelte';
	import { drawerStore } from './stores/drawer';
	import { nameStore } from './stores/name';

	// export let open: boolean;
	export let onClick: () => void;
</script>

<Button buttonType="clear" {onClick}>
	<div
		class="
  absolute
  flex
  justify-center
  items-center
  w-[40px]
  h-[40px]
  p-[4px]
  rounded-full
  transition-all
  duration-300
  bg-gradient-to-r from-indigo-500 to-fuchsia-500
  left-1/2
  -translate-x-1/2
  mt-20
  hover:from-teal-500
  hover:to-teal-500
  hover:scale-110
  "
	>
		<div class="flex justify-center items-center w-full h-full bg-[#1b1b1d] rounded-full">
			{#if !$nameStore[1].active}
				{#if $drawerStore}
					<img
						class="rotate-180"
						src="assets/images/nameLetters/lorien.svg"
						alt="the Leaves of LothLorien"
					/>
				{:else}
					<img src="assets/images/nameLetters/lorien.svg" alt="the Leaves of LothLorien" />
				{/if}
			{:else if $drawerStore}
				<img class="w-3/4" src="/assets/images/icons/angle-up.svg" alt="angle up" />
			{:else}
				<img class="w-3/4" src="/assets/images/icons/angle-down.svg" alt="angle down" />
			{/if}
		</div>
	</div>
</Button>
