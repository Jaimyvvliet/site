<script>
  import { Icons, Wrapper, LinkIcon } from '$lib/index.js'
  export let linkList;
</script>

<Wrapper>
  <section>
  <h2>Links</h2>
  {#if linkList.length > 0 }
    <ul>
      {#each linkList as link}
        <li>
          <LinkIcon href={link.hyperlink} title={link.titleOfHyperlink} linkTree="true"/>
        </li>
      {/each}
    </ul>
  {/if}
</section>
</Wrapper>




<style>
  section {
    padding: var(--padding-container);
  }
  section ul {
    display: grid;
    gap: var(--gap-regular);

    @media (min-width:900px) {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>