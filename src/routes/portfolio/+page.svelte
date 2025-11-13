<script lang="ts">
	import Navbar from '$lib/components/custom/navbar.svelte';
	import portfolioItems from '$lib/contents/portfolio.json';
	import Showcase from '$lib/components/custom/showcase.svelte';
</script>

<Navbar />

<Showcase title="Portfolio" categories={portfolioItems.categories} imageDirectory="portfolio" />
