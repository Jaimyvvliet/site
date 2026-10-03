<script>
	function handleSubmit() {
		alert('Thanks for signing up!');
	}
</script>

<section class="newsletter">
	<div class="newsletter__inner">
		<h2>Stay in the loop</h2>

		<p>
			New music, shows and unreleased tracks — straight to your inbox.
		</p>

		<form on:submit|preventDefault={handleSubmit}>
			<input
				type="email"
				placeholder="Your email address"
				aria-label="Email address"
				required
			/>

			<button type="submit">
				Join
			</button>
		</form>
	</div>
</section>

<style>
	.newsletter {
		width: 100%;
		padding: 64px 20px;
	}

	.newsletter__inner {
		max-width: 700px;
		margin: 0 auto;
		text-align: center;
	}

	h2 {
		margin: 0 0 12px;
		font-size: 2rem;
	}

	p {
		margin: 0 0 24px;
	}

	form {
		display: flex;
		justify-content: center;
		gap: 10px;
		flex-wrap: wrap;
	}

	input {
		min-width: 260px;
		padding: 12px 16px;
		border: 1px solid currentColor;
		border-radius: 999px;
		background: transparent;
		color: inherit;
		font: inherit;
	}

	button {
		padding: 12px 24px;
		border: 1px solid currentColor;
		border-radius: 999px;
		background: transparent;
		color: inherit;
		font: inherit;
		cursor: pointer;
	}

	button:hover {
		opacity: 0.7;
	}
</style>

