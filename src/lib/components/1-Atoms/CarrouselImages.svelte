<script>
  export let Images;
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
  --ratio:1/1;
  width:100%;
  display:flex;
  gap:var(--gap-regular);
  height:100%;
  max-height:600px;

  overflow-y: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

ul::-webkit-scrollbar {
  display: none; 
}

ul li {
  aspect-ratio:var(--ratio);
  height:100%;
  width:70%;

  scroll-snap-align: center;
}
ul li img {
  aspect-ratio:var(--ratio);
}
</style>