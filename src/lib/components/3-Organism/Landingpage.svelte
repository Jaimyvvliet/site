<script>
    import { 
    Wrapper,
    LinkTree,
    AboutMe,
    HeroTitle,
    Spotify
  } from '$lib/index.js'

  export let content;
</script>

<Wrapper>
  <HeroTitle />
  <AboutMe about={content.about}/>
  <LinkTree linkList={content.linkList}/>
  <Spotify />
</Wrapper>