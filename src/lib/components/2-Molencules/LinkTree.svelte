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
    display: grid;
    gap: var(--gap-regular);
  }

  ul li {
    width:100%;
    height:100%;
  }

  ul li a {
    background:var(--color-secondary);
    padding:var(--padding-regular);
    border-radius: var(--border-radius-regular);
    width:auto;
    display:flex;
    transition: var(--hover-transition)
  }

  ul li a:hover {
    background:var(--color-dark);
    color:var(--color-light);
  }

</style>