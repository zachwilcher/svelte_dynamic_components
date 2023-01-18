<script lang="ts">
    import type { ImportData } from '$lib/importer';
    import Place from '$lib/place.svelte';
    import type { PageData } from './$types';

    export let data: PageData;

    let components: ImportData[] = data.components;


</script>
<div>
    <a href='/'>Home</a>
    <Place {components}/>
</div>