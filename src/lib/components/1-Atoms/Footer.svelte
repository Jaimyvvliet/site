  <script>
    import { Wrapper, HyperlinkList, LinkIcon } from '$lib/index.js'
    export let footerData;
    console.log(footerData)
  </script>
  
  <footer>
    <Wrapper backgroundColor='var(--color-dark)'>
      {#each footerData.footerLinks as footerItem}
      {console.log(footerItem)}
      <section>
        <h2>{footerItem.headingOfListOfLinks}</h2>
        <ul>
          {#each footerItem.listOfLinks as linkItem}
          <li>
            <LinkIcon href={linkItem.hyperlink} title={linkItem.titleOfHyperlink}/>
          </li>
          {/each}
        </ul>
      </section>
      {/each}

    </Wrapper>
  </footer>

  <style>
    footer {
      background: var(--color-dark);
      color:var(--color-light);
    }

    footer section h2 {
      text-align: left;
    }

    footer section ul li a {
      color:white
    }
  </style>