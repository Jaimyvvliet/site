<script>
  export let Images;
  console.log(Images)
</script>
<ul>
  {#each Images as Image}
  <li>
    <img 
    src={Image.url}
    alt={Image.filename}
    width={Image.width}
    height={Image.height}
    > 
  </li>
  {/each}
</ul>

<style>
ul {
  --ratio:1/1
}
ul li img {
  aspect-ratio:var(--ratio);
}
</style>