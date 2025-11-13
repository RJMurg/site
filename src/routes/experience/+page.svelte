<script lang="ts">
	import Navbar from '$lib/components/custom/navbar.svelte';
	import Showcase from '$lib/components/custom/showcase.svelte';
	import experienceItems from '$lib/contents/experience.json';
</script>

<Navbar />

<Showcase title="Experience" categories={experienceItems.categories} imageDirectory="experience" />
