<svelte:head>
	<link href="https://fonts.googleapis.com/css?family={family}" rel="stylesheet">
</svelte:head>

<script lang="ts">
	export let family;
	export let fontSize;
	
	const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
	let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
	
	let previewTextTouched = false;
	
	function handlePreviewTextTouched(): void {
		if (text != dummyText) {
			previewTextTouched = true;
			
		} else {
			previewTextTouched = false;
		}
	}
	
	function handleResetClicked(): void {
		text = dummyText;
		
		handlePreviewTextTouched();
	}
</script>

<style>
p {
	font-family: var(--font-family);
	font-size: var(--font-size);
}
</style>

<div class="flex flex-col gap-5">
	<div>
		<p>Preview text
			{#if previewTextTouched}
				<span on:click={handleResetClicked}>(Reset?)</span>
			{/if}
		</p>
		<textarea bind:value={text} on:input={handlePreviewTextTouched} class="w-full p-2 rounded-lg border-red-400 border"/>
	</div>
	
    <p style="--font-family: {family}; --font-size: {fontSize}px">{text}</p>
</div>