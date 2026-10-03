<script>
	import { Wrapper, LinkTree, AboutMe, HeroTitle, Spotify } from '$lib/index.js';

	export let content;
	import Newsletter from '../3-Organism/Newsletter.svelte';

</script>

<HeroTitle heading="Jaimy Rafael" subheading="Singer & Songwriter" />
<AboutMe about={content.about}/>
<LinkTree linkList={content.linkList} />
<Spotify />
<Newsletter />
