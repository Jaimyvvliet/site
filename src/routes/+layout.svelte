<script>
	import { Header, Footer } from '$lib/index.js';
	import { onMount } from 'svelte';

	onMount (() => {
  (function (s, e, n, d, er) {
    s['Sender'] = er;
    s[er] = s[er] || function () {
      (s[er].q = s[er].q || []).push(arguments)
    }, s[er].l = 1 * new Date();
    s[er].on = function(event, callback) {
      s[er].listeners = s[er].listeners || {};
      (s[er].listeners[event] = s[er].listeners[event] || []).push(callback);
    };
    var a = e.createElement(n),
        m = e.getElementsByTagName(n)[0];
    a.async = 1;
    a.src = d;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
  sender('4b4e3f376b9971')
	})

	
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children, data } = $props();
</script>

<Header variant="default" />
<main>{@render children?.()}</main>
<Footer footerData={data.footer} />
