<script>
	import { Icons, Wrapper, LinkIcon } from '$lib/index.js';
	let linkList = [
  {
    hyperlink: 'https://open.spotify.com/track/0ejCxQtQDH89xoxCfN1rkL?si=a81d399876384b52',
    titleOfHyperlink: 'Listen to LET ME IN on Spotify!'
  },
  {
    hyperlink: 'https://music.apple.com/nl/album/let-me-in/6806495498?i=6806495499&l=en-GB',
    titleOfHyperlink: 'Listen to LET ME IN on Apple Music!'
  },
  {
    hyperlink: 'https://www.youtube.com/watch?v=tTZj18nCrp4',
    titleOfHyperlink: 'Listen to LET ME IN on Youtube'
  },
  {
    hyperlink: 'https://www.deezer.com/en/track/4253125721',
    titleOfHyperlink: 'Subscribe to Jaimy Rafael on Deezer!'
  },
  {
    hyperlink: 'https://tidal.com/album/556631425/track/556631428',
    titleOfHyperlink: 'Subscribe to Jaimy Rafael on Tidal!'
  },
  {
    hyperlink: 'https://soundcloud.com/jaimyrafael-music/let-me-in?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    titleOfHyperlink: 'Subscribe to Jaimy Rafael on Soundcloud!'
  },
    {
    hyperlink: 'https://music.youtube.com/watch?v=tTZj18nCrp4&si=8SSVXiAiLQWmLQRH',
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
