<script>
  import { 
    Paragraph,
    Thumbnail,
    Wrapper,
    LinkButton
  } from '$lib/index.js'
  export let about;
  export let teaser = false;
</script>

<Wrapper>
  {#if teaser}
      <Thumbnail
      src={about.thumbnail.url}
      width={about.thumbnail.width}
      height={about.thumbnail.height}
      />

      {#if about?.paragraph}
        <Paragraph>
          <h2>{about?.paragraph.mainTitle}</h2>
          <p>{about.paragraph.content}</p>
        </Paragraph>
      {/if}



    {:else}
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
  {/if}
</Wrapper>
