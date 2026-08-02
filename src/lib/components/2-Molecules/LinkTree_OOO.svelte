<script>
	import { Icons, Wrapper, LinkIcon } from '$lib/index.js';
	let linkList = [
  {
    hyperlink: 'https://open.spotify.com/track/3H1pxo4nEqtJArfFsQQjl1?si=b7f365e9804d4d3d',
    titleOfHyperlink: 'Listen to ODD ONE OUT on Spotify!'
  },
  {
    hyperlink: 'https://music.apple.com/nl/album/odd-one-out/6780983024?i=6780983028&l=en-GB',
    titleOfHyperlink: 'Listen to ODD ONE OUT on Apple Music!'
  },
  {
    hyperlink: 'https://youtu.be/ZOYk2N32ACg?si=wvT-_GhX3ycDwLKr',
    titleOfHyperlink: 'Listen to ODD ONE OUT on Youtube'
  },
  {
    hyperlink: 'https://www.deezer.com/en/track/4091497101',
    titleOfHyperlink: 'Subscribe to Jaimy Rafael on Deezer!'
  },
  {
    hyperlink: 'https://tidal.com/album/534015905/u',
    titleOfHyperlink: 'Subscribe to Jaimy Rafael on Tidal!'
  },
  {
    hyperlink: 'https://soundcloud.com/jaimyrafael-music/odd-one-out?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    titleOfHyperlink: 'Subscribe to Jaimy Rafael on Soundcloud!'
  },
    {
    hyperlink: 'https://music.youtube.com/watch?v=ZOYk2N32ACg&si=wtfBq_rfh3y4-kVN',
    titleOfHyperlink: 'Subscribe to Jaimy Rafael on Youtube Music!'
  }
];
</script>

<Wrapper>
	<section>
		<h2>Links</h2>
		{#if linkList.length > 0}
			<ul>
				{#each linkList as link}
					<li>
						<LinkIcon href={link.hyperlink} title={link.titleOfHyperlink} linkTree="true" />
					</li>
				{/each}
			</ul>
		{/if}
	</section>
</Wrapper>

<style>
	section {
		padding: var(--padding-container);
	}
	section ul {
		display: grid;
		gap: var(--gap-regular);

		@media (min-width: 900px) {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
