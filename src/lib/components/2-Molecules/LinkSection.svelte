<script>
	import { LinkIcon } from '$lib/index.js';

	export let sectionItems;
</script>

<div>
	{#each sectionItems as footerItem}
		<section>
			<h2>{footerItem.headingOfListOfLinks}</h2>
			<ul>
				{#each footerItem.listOfLinks as linkItem}
					<li>
						<LinkIcon href={linkItem.hyperlink} title={linkItem.titleOfHyperlink} />
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</div>

<style>
	div {
		display: grid;

		@media (min-width: 700px) {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	div section {
		padding: 1rem 0;
	}

	div section h2 {
		text-align: left;
		color:var(--color-primary);
	}
	
	div section ul {
		gap: var(--gap-small);
    display: grid;
	}

	div section ul li {
		width: fit-content;
		transition: var(--hover-transition);
	}
</style>
