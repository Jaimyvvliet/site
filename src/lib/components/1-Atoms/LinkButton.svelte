<script>
  export let href = '/';
  export let text = 'cannot find text'
</script>

<a href={href}>{text}</a>

<style>
  a {
    background: var(--color-primary);
    padding: var(--padding-regular);
    border-radius:var(--border-radius-regular);
    text-decoration:none;
    color:var(--color-dark);
  }

a:link {
  color: var(--color-dark);
}

a:visited {
  color:var(--color-dark);
}

a:focus {
  text-decoration: none;
  background: var(--color-primary);
}

a:hover {
  text-decoration: none;
  background: var(--color-primary);
}

a:active {
  background: var(--color-dark);
  color: var(--color-secondary);
}
</style>