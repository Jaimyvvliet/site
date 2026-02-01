<script>
	import { Wrapper, LinkTree, AboutMe, HeroTitle, Spotify } from '$lib/index.js';

	export let content;
</script>

<HeroTitle heading="Jaimy Rafael" subheading="Singer & Songwriter" />
<a target="_blank" rel="noopener noreferrer"boutMe about={content.about} teaser="true" />
<LinkTree linkList={content.linkList} />
<Spotify />
