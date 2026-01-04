<script>
  export let linkList;
</script>

  {#if linkList.length > 0 }
    <ul>
      {#each linkList as link}
        <li>
          <a href={link.hyperlink}>{link.titleOfHyperlink}</a>
        </li>
      {/each}
    </ul>
  {/if}

<style>
  ul {
    margin-block: 0;
    padding-inline: 0;
    list-style:none;
  }

  ul li {
    background:var(--color-secondary);
    padding:var(--padding-regular);
    border-radius: var(--border-radius-regular);
  }

  ul li a {
    background:var(--color-secondary);
    padding:var(--padding-regular);
    border-radius: var(--border-radius-regular);
    width:100%
  }

</style>