<script>
  import { 
    Paragraph,
    Thumbnail,
    Wrapper,
    LinkButton,
    HeroTitle
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
      
      <LinkButton 
      href='/about-me' 
      text='Read more'
      center='true'
      />



    {:else}
    <HeroTitle 
    heading={about?.paragraph.mainTitle}
    subheading="Hi! I'm Jaimy Rafael!"
    />
      <Thumbnail
      src={about.thumbnail.url}
      width={about.thumbnail.width}
      height={about.thumbnail.height}
      />

      {#if about?.paragraph}
        <Paragraph>
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
