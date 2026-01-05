<script>
  import { 
    Paragraph,
    Thumbnail
  } from '$lib/index.js'
  export let about;
</script>

<div>
  <Thumbnail
  src={about.thumbnail.url}
  width={about.thumbnail.width}
  height={about.thumbnail.height}
  />

  {#if about?.paragraph}
    <Paragraph>
      <h2>{about?.paragraph.mainTitle}</h2>
      <p>{about.paragraph.content}</p>

    {#if about?.paragraph.additionalSections}
      {#each about?.paragraph.additionalSections as section}
      <h3>{section.sectionTitle}</h3>
      <p>{section.contentOfSection}</p>
      {/each}
    {/if}
    </Paragraph>
  {/if}
</div>


<style>

  div {
    padding: var(--padding-container);
  }

</style>