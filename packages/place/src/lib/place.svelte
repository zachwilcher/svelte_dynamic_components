<script lang="ts">
    import { importComponent, type ImportData } from '$lib/importer';

    export let components: ImportData[]

</script>


<div class='place'>

    {#each components as component}
        {#await importComponent(component) then component }
            <svelte:component this={component}/>
        {:catch error}
            <p>Failed to load component: {error.message}</p>
        {/await}
    {/each}
    
</div>


<style>
    .place {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>