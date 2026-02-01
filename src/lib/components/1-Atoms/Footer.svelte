  <script>
    import { Wrapper, HyperlinkList, LinkIcon } from '$lib/index.js'
    export let footerData;
    console.log(footerData)
  </script>
  

    <Wrapper backgroundColor='var(--color-dark)'>
        <footer>
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
  </footer>
    </Wrapper>


  <style>
    footer {
      background: var(--color-dark);
      color:var(--color-light);
      display: grid;

      @media (min-width:700px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
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
      transition: var(--hover-transition);
    }
    footer section ul li:hover {
      padding: .5rem 0;
    }
  </style>