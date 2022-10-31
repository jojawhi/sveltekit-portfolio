<script lang='ts'>

import Project from "$lib/Project.svelte";

const projects = [
  {
    title: 'Portfolio',
    role:'Sole developer',
    description: 'this portfolio site',
    tags: ['SvelteKit', 'Tailwind CSS'],
    image: '',
    url: '/',
  },
  {
    title: 'Hockey Canada',
    role:'Technical Project Manager, Developer',
    description: 'Hockey Canada website',
    tags: ['Next.js', 'Styled Components'],
    image: '',
    url: '/',
  },
  {
    title: 'Folkwise company website',
    role:'Developer',
    description: 'folkwise',
    tags: ['SvelteKit', 'SCSS'],
    image: '',
    url: '/',
  },
  {
    title: 'Tabeyou',
    role:'Sole developer',
    description: 'Meal planning crud app',
    tags: ['Next.js', 'SCSS'],
    image: '',
    url: '/',
  }
]

</script>

<div class="container flex-col">
   <h1 class='text-white'>Portfolio</h1>
  {#each projects as project}
    <Project {project} />
  {/each}
</div>