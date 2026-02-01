<script>
	import { Icons } from '$lib/index.js';
	export let linkList;
	export let includeIcons = false;
</script>

<ul>
	{#each linkList as link}
		<li>
			<a href={link.hyperlink}>
				{#if includeIcons}
					{#if link.hyperlink.includes('instagram')}
						<Icons icon="Instagram" />
					{:else if link.hyperlink.includes('tiktok')}
						<Icons icon="TikTok" />
					{:else if link.hyperlink.includes('youtube')}
						<Icons icon="Youtube" />
					{:else if link.hyperlink.includes('spotify')}
						<Icons icon="Spotify" />
					{:else if link.hyperlink.includes('linkedin')}
						<Icons icon="LinkedIn" />
					{/if}
				{:else}
					{link.titleOfHyperlink}
				{/if}
			</a>
		</li>
	{/each}
</ul>
