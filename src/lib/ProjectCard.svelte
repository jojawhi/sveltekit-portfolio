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
	export let key: number;
	console.log(key);
</script>

<div
	class={key % 2 === 0
		? 'flex flex-row-reverse justify-between my-12 px-12 py-8 rounded-lg bg-gradient-to-r from-zinc-500 to-zinc-700'
		: 'flex justify-between my-12 px-12 py-8 rounded-lg bg-gradient-to-r from-zinc-500 to-zinc-700'}
>
	<div>
		<div class="flex-col gap-4">
			<h2 class="font-bold">{project.title}</h2>
			<h3>{project.role}</h3>
			<p>{project.description}</p>
		</div>
		<div class="flex gap-4">
			{#each project.tags as tag}
				<Tag {tag} />
			{/each}
		</div>
		<a class="cursor-pointer" href={project.url}>Go to project</a>
	</div>
	<div class="image-wrapper w-2/5 align-self-end">
		<img class="rounded-lg" src="/assets/images/folkwise.png" alt="folkwise website screenshot" />
	</div>
</div>
