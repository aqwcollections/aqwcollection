<script lang="ts">
	// Component Import
	import Navbar from '$lib/components/navbar/Navbar.svelte';

	// TailwindCSS
	import '../app.css';
</script>

<Navbar />

<main>
	<slot />
</main>
