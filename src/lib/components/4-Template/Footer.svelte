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
		--size: 10rem;
		background: var(--color-dark);
		color: var(--color-light);
		position:relative;
		display:grid;
		margin-top:calc(var(--size) / 2);
	}

	footer div {
		width:100%;
		height: calc(var(--size) / 2);
		position:relative;
	}
	footer div a {
		width:var(--size);
		height:var(--size);
		margin-top: -5rem;
		position:absolute;
		left: 50%;
    transform: translate(-50%);

		@media (min-width:900px) {
				right: 0;
        top: 0;
        left: unset;
        transform: none;
		}
	}

	footer div a:hover {
		background:none;
	}
</style>
