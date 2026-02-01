<script>
	import { Wrapper, LinkTree, AboutMe, HeroTitle, Spotify } from '$lib/index.js';

	export let content;
</script>

<HeroTitle heading="Jaimy Rafael" subheading="Singer & Songwriter" />
<AboutMe about={content.about} teaser="true" />
<LinkTree linkList={content.linkList} />
<Spotify />
