<script>
  import { Wrapper } from '$lib/index.js';
  export let about;
</script>


  <img 
  src={about.thumbnail.url}
  width={about.thumbnail.width}
  height={about.thumbnail.height}
  alt="thumbnail"
  >

{#if about?.paragraph}
  <section>
    <h2>{about?.paragraph.mainTitle}</h2>
    <p>{about.paragraph.content}</p>

  {#if about?.paragraph.additionalSections}
    {#each about?.paragraph.additionalSections as section}
    {console.log(section)}
    <h3>{section.sectionTitle}</h3>
    <p>{section.contentOfSection}</p>
    {/each}
  {/if}
  </section>
{/if}

<style>
  img {
    display: flex;
    align-items: center;
    max-height: 50dvh;
    width: 100%;
    object-fit: contain;
  }

  section {
    max-width: 600px;
    width: 100%;
  }

</style>