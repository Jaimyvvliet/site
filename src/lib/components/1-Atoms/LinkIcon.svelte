<script>
  import { Icons } from '$lib/index.js'
  export let title;
  export let href;
</script>

<a href={href} class="link">
  {#if href.includes('instagram')}
    <Icons icon='Instagram'/>
  {:else if href.includes('tiktok')}
    <Icons icon='TikTok'/>
  {:else if href.includes('youtube')}
    <Icons icon='Youtube'/>
  {:else if href.includes('spotify')}
    <Icons icon='Spotify'/>
  {:else if href.includes('linkedin')}
    <Icons icon='LinkedIn'/>
  {/if}
  {title}
</a>

<style>
  a {
    display: flex;
    align-items: center;
    gap: .3rem;
  }

</style>