<script>
  import { Icons } from '$lib/index.js'
  export let linkList;
</script>

  {#if linkList.length > 0 }
    <ul>
      {#each linkList as link}
        <li>
          <a href={link.hyperlink}>
            {#if link.hyperlink.includes('instagram')}
              <Icons icon='Instagram'/>
            {:else if link.hyperlink.includes('tiktok')}
              <Icons icon='TikTok'/>
            {:else if link.hyperlink.includes('youtube')}
              <Icons icon='Youtube'/>
            {/if}

            {link.titleOfHyperlink}
          </a>
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

  ul li a {
    background:var(--color-secondary);
    padding:var(--padding-regular);
    border-radius: var(--border-radius-regular);
    width:auto;
    display:flex;
    align-items:center;
    gap:var(--gap-small);
    transition: var(--hover-transition);
  }

  ul li a:hover {
    background:var(--color-dark);
    color:var(--color-light);
  }

</style>