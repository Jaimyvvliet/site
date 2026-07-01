<script>
	import { marked } from 'marked';
	export let content;
</script>

{#if content === null || content === undefined}
	<p>No content available.</p>
{:else}
	<div class="markdown">
		{@html marked(content)}
	</div>
{/if}

