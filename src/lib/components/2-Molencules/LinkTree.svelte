<script>
  import { Icons } from '$lib/index.js'
  export let linkList;
</script>

<section>
  <h2>Hyperlinks</h2>
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
</section>



<style>
  section {
    padding: var(--padding-container);
  }
  section ul {
    margin-block: 0;
    padding-inline: 0;
    list-style:none;
    display: grid;
    gap: var(--gap-regular);

    @media (min-width:900px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  section ul li a,
  section ul li a:visited,
  section ul li a:link,
  section ul li a:active {
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

  section ul li a:hover {
    background:var(--color-dark);
    color:var(--color-light);
    transform: scale(1.02);

  }

</style>