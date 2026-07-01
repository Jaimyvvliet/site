<script>
	import { Paragraph, Markdown, Thumbnail, Wrapper, LinkButton, HeroTitle } from '$lib/index.js';
	export let about;
</script>

<Wrapper>
		<Thumbnail
			src={about.thumbnail.url}
			width={about.thumbnail.width}
			height={about.thumbnail.height}
		/>

		{#if about?.newParagraph}
			<Paragraph>
			<h2>{about.newParagraph.mainTitle}</h2>

			<Markdown content={about.newParagraph.content.markdown}></Markdown>

				{#if about?.newParagraph.additionalSections}
					{#each about?.newParagraph.additionalSections as section}
						<h3>{section.sectionTitle}</h3>
						<p>{section.contentOfSection}</p>
					{/each}
				{/if}
			</Paragraph>
		{/if}
</Wrapper>
