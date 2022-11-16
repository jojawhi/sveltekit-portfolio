<script lang="ts">
	export let href: string;
	export let anchorText: string;
	export let type: string = 'default';

	const linkTypes: { [key: string]: string } = {
		default: 'text-red-500',
		project:
			'font-extrabold text-[#1b1b1d] text-center px-12 py-4 rounded-full transition-all duration-300 bg-gradient-to-r to-teal-500 via-fuchsia-400 from-indigo-400 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:scale-105'
	};
</script>

<a class={`${linkTypes[type]} uppercase`} {href} target="_blank">{anchorText}</a>
