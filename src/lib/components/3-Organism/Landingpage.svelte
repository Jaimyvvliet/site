<script>
    import { 
    Wrapper,
    LinkTree,
    AboutMe
  } from '$lib/index.js'

  export let content;
</script>

<Wrapper>
  <AboutMe about={content.about}/>
  <LinkTree />
</Wrapper>