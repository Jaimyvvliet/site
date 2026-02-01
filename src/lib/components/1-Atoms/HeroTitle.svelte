<script>
	import { Wrapper } from '$lib/index.js';
	export let heading = 'no heading found';
	export let subheading = 'no subheading found';
</script>

<Wrapper>
	<section>
		<h1>{heading}</h1>
		<p>{subheading}</p>
	</section>
</Wrapper>

<style>
	section {
		display: grid;
		justify-content: center;
	}

	h1,
	p {
		margin: 0;
	}

	h1 {
		@media (min-width: 500px) {
			font-size: 3rem;
		}
	}

	p {
		text-align: center;
		font-family: var(--font-family-heading);
		@media (min-width: 500px) {
			font-size: 1.5rem;
		}
	}
</style>
