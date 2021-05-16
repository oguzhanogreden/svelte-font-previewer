<script lang="ts">
	import Header from "./Header.svelte";
	import Preview from "./Preview.svelte";
	import Selector from "./Selector.svelte";
	import Settings from "./Settings.svelte";
	
	let selected;
	let fontSize;
</script>

<Header></Header>

<main class="flex flex-col gap-5 p-4 md:p-8 md:w-3/5 bg-gray-100">
	<Selector bind:selected={selected}></Selector>
	<Settings bind:value={fontSize}></Settings>
	<Preview family={selected} {fontSize}></Preview>
</main>


<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>