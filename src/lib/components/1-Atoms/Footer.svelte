  <script>
    import { Wrapper, HyperlinkList, LinkIcon } from '$lib/index.js'
    export let footerData;
    console.log(footerData)
  </script>
  
  <footer>
    <Wrapper backgroundColor='var(--color-dark)'>
      {#each footerData.footerLinks as footerItem}
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
      display: grid;
    }

    footer section {
      padding: 1rem 0;
    }

    footer section h2 {
      text-align: left;
      margin-block: .3rem
    }

    footer section ul li {
      width: fit-content;
    }
  </style>