<script lang="ts">
	export let tag: string;
</script>

<div
	class="tag text-sm md:text-base rounded-full px-4 md:px-6 py-2 w-min h-min transition-all duration-300 bg-gradient-to-r to-fuchsia-600 from-indigo-600"
>
	<p class="tag-text font-bold text-white whitespace-nowrap">{tag}</p>
</div>

<style>
	.tag {
		user-select: none;
	}
	/* .tag:hover {
		transform: scale(1.025);
	} */

	.tag-text {
		display: block;
	}

	/* Safari 11+ */
	@media not all and (min-resolution: 0.001dpcm) {
		@supports (-webkit-appearance: none) and (stroke-color: transparent) {
			.tag-text {
				margin-top: 0.5rem;
			}

			@media screen and (max-width: 450px) {
				.tag-text {
					margin-top: 0.25rem;
				}
			}
		}
	}
</style>
