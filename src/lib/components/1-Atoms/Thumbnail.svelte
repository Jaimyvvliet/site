<script>
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
    width: auto;
    object-fit: contain;
  }
  </style>