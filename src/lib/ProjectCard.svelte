<script lang="ts">
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
		? 'flex flex-row-reverse justify-between my-12 px-12 py-8 rounded-lg bg-gradient-to-r from-zinc-800 to-zinc-700'
		: 'flex justify-between my-12 px-12 py-8 rounded-lg bg-gradient-to-r from-zinc-700 to-zinc-800'}
>
	<div class="flex flex-col justify-between">
		<div class="flex flex-col">
			<h2 class="font-bold text-white">{project.title}</h2>
			<h3 class="text-white">{project.role}</h3>
			<p class="text-white mt-6">{project.description}</p>
		</div>
		<div class="flex gap-2">
			{#each project.tags as tag}
				<Tag {tag} />
			{/each}
		</div>
		<Link type="project" href={project.url} anchorText="Go to Project" />
	</div>
	<div class="image-wrapper w-2/5 align-self-end">
		<img class="rounded-lg" src="/assets/images/folkwise.png" alt="folkwise website screenshot" />
	</div>
</div>
