<script lang="ts">
	import Navbar from '$lib/components/custom/navbar.svelte';
	import partyIdeas from '$lib/contents/partyIdeas.json';
	import Showcase from '$lib/components/custom/showcase.svelte';
</script>

<svelte:head>
	<title>RJM's Party Ideas</title>
</svelte:head>

<Navbar />

<Showcase categories={partyIdeas.categories} imageDirectory="" noimage />
