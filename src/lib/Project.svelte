<script lang="ts">
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
</script>

<div class="project-card my-4 p-4 bg-white">
	<h2 class="font-bold">{project.title}</h2>
	<h3>{project.role}</h3>
	<p>{project.description}</p>
	<div class="tags-container flex gap-2">
		{#each project.tags as tag}
			<Tag {tag} />
		{/each}
	</div>
	<a class="cursor-pointer" href={project.url}>Go to project</a>
</div>
