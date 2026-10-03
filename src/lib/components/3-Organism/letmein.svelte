<script>
	import { LinkTree, Wrapper } from '$lib/index.js';
	export let content;
</script>

<Wrapper>
	<LinkTree linkList={content.linkList} />
</Wrapper>
