<script lang="ts">

const places = [
    'zac',
    'jay',
    'neil'
];

</script>


<ul>
    {#each places as place}
        <li>
            <a href="/{place}">{place}</a>
        </li>
    {/each}
</ul>
