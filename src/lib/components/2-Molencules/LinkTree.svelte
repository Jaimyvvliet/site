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

    @media (min-width:900px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  ul li a,
  ul li a:visited,
  ul li a:link,
  ul li a:active {
    color:var(--color-dark);
    text-decoration:none;
    background:var(--color-secondary);
    padding:var(--padding-regular);
    border-radius: var(--border-radius-regular);
    width:auto;
    display:flex;
    align-items:center;
    gap:var(--gap-small);
    transition: var(--hover-transition);
    justify-content: center;
  }

  ul li a:hover {
    background:var(--color-dark);
    color:var(--color-light);
    transform: scale(1.02);

  }

</style>