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
  console.log(content)
</script>

<Wrapper>
  <HeroTitle />
  <AboutMe about={content.about}/>
  <CarrouselImages Images={content.about.photogallery}/>
  <LinkTree linkList={content.linkList}/>
  <Spotify />
</Wrapper>