<script>
	import { Icons } from '$lib/index.js';
	export let title;
	export let href;

	export let linkTree = false;
</script>

<a target="_blank" rel="noopener noreferrer" {href} class:linktree={linkTree}>
	{#if href.includes('instagram')}
		<Icons icon="Instagram" />
	{:else if href.includes('tiktok')}
		<Icons icon="TikTok" />
	{:else if href.includes('youtube')}
		<Icons icon="Youtube" />
	{:else if href.includes('spotify')}
		<Icons icon="Spotify" />
	{:else if href.includes('linkedin')}
		<Icons icon="LinkedIn" />
	{/if}
	{title}
</a>

<style>
	a {
		width: auto;
		display: flex;
		align-items: center;
		gap: var(--gap-small);
		justify-content: center;
		border-radius: var(--border-radius-regular);
		padding:var(--padding-small) 0;
	}

	a:hover {
		padding:var(--padding-small);
	}

	.linktree,
	.linktree:visited,
	.linktree:link,
	.linktree:active {
		color: var(--color-dark);
		text-decoration: none;
		background: var(--color-secondary);
		padding: var(--padding-regular);
	}

	.linktree:hover {
		background: var(--color-dark);
		color: var(--color-light);
		margin: 0;
	}
</style>
