<script lang="ts">
	export let href: string;
	export let anchorText: string;
	export let type: string = 'default';

	const linkTypes: { [key: string]: string } = {
		default: 'text-red-500',
		project:
			'font-bold text-white text-center px-12 py-3 rounded-md border-2 border-white transition-all duration-300 bg-gradient-to-b to-lime-400 via-zinc-700 from-zinc-700 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:text-zinc-800 hover:border-lime-400'
	};
</script>

<a class={linkTypes[type]} {href} target="_blank">{anchorText}</a>
