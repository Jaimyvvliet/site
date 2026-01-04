<script>
    import { 
    Wrapper,
    LinkTree,
    AboutMe,
    HeroTitle
  } from '$lib/index.js'

  export let content;
</script>

<Wrapper>
  <HeroTitle />
  <AboutMe about={content.about}/>
  <LinkTree linkList={content.linkList}/>
</Wrapper>