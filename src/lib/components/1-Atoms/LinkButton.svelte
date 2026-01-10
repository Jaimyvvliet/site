<script>
  export let href = '/';
  export let text = 'cannot find text'
  export let center = false
</script>

<div class:center={center}>
  <a href={href}>{text}</a>
</div>


<style>

  div {
    padding: var(--padding-container);

    @media (min-width:700px) {
      padding: none;
    }
  }

  .center {
    display: flex;
    justify-content: center;
  }

  a {

    --color:var(--color-light);
    --background:var(--color-tertiary);

    background: var(--background);
    color:var(--color);

    padding: var(--padding-regular);
    border-radius:var(--border-radius-regular);
    text-decoration:none;
    color:var(--color-light);
    font-size: var(--font-size-medium);
    border: solid .1em var(--background);
  }

a:link {
  color: var(--color);
}

a:visited {
  color:var(--color);
}

a:focus {
  text-decoration: none;
  background: var(--color-primary);
}

a:hover {
  text-decoration: none;
  background: var(--color-primary);
  color:var(--color-dark);
  border: solid .1em var(--color-dark);
}

a:active {
  background: var(--color-dark);
  color: var(--color-secondary);
}
</style>