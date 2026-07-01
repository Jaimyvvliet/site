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

		{#if about?.paragraph}
			<Paragraph>
				<p>{about.paragraph.content}</p>

				{#if about?.paragraph.additionalSections}
					{#each about?.paragraph.additionalSections as section}
						<h3>{section.sectionTitle}</h3>
						<p>{section.contentOfSection}</p>
					{/each}
				{/if}
			</Paragraph>
		{/if}
</Wrapper>
