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

  <HeroTitle heading="Jaimy Rafael" subheading="Singer & Songwriter"/>
  <AboutMe about={content.about} teaser='true'/>
  <CarrouselImages Images={content.about.photogallery}/>
  <LinkTree linkList={content.linkList}/>
  <Spotify />
