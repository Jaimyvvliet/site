<script>
  import { Wrapper } from '$lib/index.js'
  export let src;
  export let width;
  export let height;

</script>
    <img 
    src={src}
    width={width}
    height={height}
    alt="thumbnail"
    >


  <style>
    img {
    max-height: 50dvh;
    object-fit: contain;
  }
  </style>