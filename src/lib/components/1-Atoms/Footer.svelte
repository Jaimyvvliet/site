<script>
	import { Wrapper, LinkSection, Copyright } from '$lib/index.js';
	export let footerData;
</script>

	<footer>
    <Wrapper backgroundColor="var(--color-dark)">
      <LinkSection sectionItems={footerData.footerLinks} />
    </Wrapper>
      <Copyright /> 
	</footer>

<style>
	footer {
		background: var(--color-dark);
		color: var(--color-light);
	}

</style>
