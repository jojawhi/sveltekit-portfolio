<script lang="ts">
	export let href: string;
	export let anchorText: string;
	export let type: string = 'default';

	const linkTypes: { [key: string]: string } = {
		default: 'text-red-500',
		project:
			'font-bold text-zinc-700 text-center px-12 py-4 rounded-xl transition-all duration-300 bg-gradient-to-r to-fuchsia-300 via-indigo-300 from-white bg-size-200 bg-pos-0 hover:bg-pos-100 hover:scale-105'
	};
</script>

<a class={linkTypes[type]} {href} target="_blank">{anchorText}</a>
