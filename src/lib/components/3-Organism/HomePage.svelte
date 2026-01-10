<script>
    import { 
    Wrapper,
    LinkTree,
    AboutMe,
    HeroTitle,
    Spotify,
    CarrouselImages
  } from '$lib/index.js'

  export let content;
</script>

<Wrapper>
  <HeroTitle />
  <AboutMe about={content.about}/>
  <CarrouselImages />
  <LinkTree linkList={content.linkList}/>
  <Spotify />
</Wrapper>