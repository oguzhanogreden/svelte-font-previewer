<script>
    import AutoComplete from "simple-svelte-autocomplete";
    
    const fonts = ["Kaushan Script"]
    
    export let selected = fonts[0];
</script>

<style>

</style>

<AutoComplete items={fonts} bind:selectedItem={selected} />