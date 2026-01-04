<script>
    import { 
    Wrapper,
    LinkTree,
    AboutMe
  } from '$lib/index.js'

  export let content;
  console.log(content)

</script>

<Wrapper>
  <AboutMe about={content.about}/>
  <LinkTree linkList={content.linkList}/>
</Wrapper>