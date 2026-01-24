  <script>
    import { Wrapper, HyperlinkList } from '$lib/index.js'
  </script>
  
  <footer>
    <Wrapper backgroundColor='var(--color-dark)'>

    <section>
      <h2>
        Contact
      </h2>
    </section>
    <section>
      <h2>
        Socials
      </h2>
      <ul>
        <li>
          <a href='Instagram'>Instagram</a>
        </li>
      </ul>
    </section>

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