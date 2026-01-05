<div>
  <section>
    <slot></slot>
  </section>
</div>



<style>

  div {
    display: flex;
    justify-content: center;

    @media (min-width:500px) {
    padding: 2rem;
    }
  }

  section {
    max-width:600px;
  }
</style>