<script>
	import { Wrapper, Icons, LinkSection, Copyright } from '$lib/index.js';
	export let footerData;
</script>

<footer>
	<Wrapper backgroundColor="var(--color-dark)">
		<div>
			<a href="/">
				<Icons icon="Logo" backgroundColor="var(--color-primary)" color="var(--color-dark)"/>
			</a>
		</div>
		<LinkSection sectionItems={footerData.footerLinks} />
	</Wrapper>
	<Copyright />
</footer>

<style>
	footer {
		background: var(--color-dark);
		color: var(--color-light);
		position:relative;
		display:grid;
	}

	footer div {
		--ratio: 10rem;
		width:100%;
		height: calc(var(--ratio) / 2);
		position:relative;
	}
	footer div a {
		width:var(--ratio);
		height:var(--ratio);
		margin-top: -5rem;
		position:absolute;
		right:0;
	}

	footer div a:hover {
		background:none;
	}
</style>
