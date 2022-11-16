<script lang="ts">
	import Text from './common/Text.svelte';
	import Link from '$lib/common/Link.svelte';
	import Tag from './Tag.svelte';

	interface Project {
		type: string;
		title: string;
		role: string;
		description: string;
		tags: string[];
		image: string;
		url?: string;
	}

	export let project: Project;
	export let key: number;
	console.log(key);
</script>

<div
	class={key % 2 === 0
		? 'left flex flex-row-reverse justify-between gap-8 my-4 p-4'
		: 'right flex justify-between gap-8 my-4 p-4'}
>
	<div class="flex flex-col w-1/2 max-w-max justify-between">
		<div class="flex flex-col">
			<Text type="heading" content={project.title} />
			<Text type="subheading" content={`Role: ${project.role}`} />
			<Text type="body" content={project.description} />
		</div>
		<div class="flex flex-wrap gap-2 w-full">
			{#each project.tags as tag}
				<Tag {tag} />
			{/each}
		</div>
		{#if project.url}
			<Link type="project" href={project.url} anchorText="Go to Project" />
		{/if}
	</div>
	<div class="image-wrapper max-w-[50%] max-h-min align-self-end">
		<img class="h-full w-full rounded-lg" src={project.image} alt="folkwise website screenshot" />
	</div>
</div>

<style>
	/* Uncomment the below styles for the perspective skew on project card images */

	/* .image-wrapper {
		perspective: 1000px;
	}

	.right img {
		transform: rotateY(140deg);
	}

	.left img {
		transform: rotateY(40deg);
	} */
</style>
