<script lang="ts">
	import Text from './common/Text.svelte';
	import Link from '$lib/common/Link.svelte';
	import Tag from './Tag.svelte';

	interface Project {
		title: string;
		role: string;
		description: string;
		tags: string[];
		image: string;
		url: string;
	}

	export let project: Project;
	export let key: number;
	console.log(key);
</script>

<div
	class={key % 2 === 0
		? 'flex flex-row-reverse justify-between gap-4 my-4 p-8'
		: 'flex justify-between gap-4 my-4 p-8'}
>
	<div class="flex flex-col max-w-min justify-between">
		<div class="flex flex-col">
			<Text type="heading" content={project.title} />
			<Text type="subheading" content={project.role} />
			<Text type="body" content={project.description} />
		</div>
		<div class="flex gap-2">
			{#each project.tags as tag}
				<Tag {tag} />
			{/each}
		</div>
		<Link type="project" href={project.url} anchorText="Go to Project" />
	</div>
	<div class="image-wrapper max-w-max align-self-end">
		<img class="h-full w-full rounded-lg" src={project.image} alt="folkwise website screenshot" />
	</div>
</div>
