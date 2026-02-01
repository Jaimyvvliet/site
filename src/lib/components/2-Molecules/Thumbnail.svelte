<script>
	import { Wrapper } from '$lib/index.js';
	export let src;
	export let width;
	export let height;
</script>

<div>
	<img {src} {width} {height} alt="thumbnail" />
</div>

<style>
	div {
		max-height: 50dvh;
		display: flex;
    justify-content: center;
	}
	img {
    object-fit: contain;
    max-height: 50dvh;
    width: auto;
	}
</style>
