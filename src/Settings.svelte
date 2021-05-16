<script>
    import Slider from '@smui/slider';
    import FormField from '@smui/form-field';
    
    export let value = 24;
</script>

<div>
    <h2>Font settings</h2>

    <FormField align="end" style="display: flex;">
        <Slider style="flex-grow: 1;" bind:value />
        <span
          slot="label"
          class="pr-2 w-full block"
        >
          Font size: {value}px
        </span>
      </FormField>
</div>