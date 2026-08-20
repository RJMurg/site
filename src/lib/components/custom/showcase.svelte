<script lang="ts">
	import ShowcaseCard from '$lib/components/custom/showcaseCard.svelte';

	let {
		title,
		categories,
		imageDirectory,
		noimage = false
	}: {
		title?: string;
		categories: categories;
		imageDirectory: string;
		noimage: boolean;
	} = $props();
</script>

<svelte:head>
	<title>RJM - {title}</title>
</svelte:head>

<section class="overflow-visible">
	{#if title}
		<h1 class="mt-20 text-center text-4xl">{title}</h1>
	{/if}

	<div class="mb-10">
		{#each categories as category (category.title)}
			<h2 class="mt-20 text-center text-2xl font-bold lg:text-3xl lg:font-semibold">
				{category.title}
			</h2>
			<div class="grid grid-cols-1 gap-6 transition-all duration-200 lg:grid-cols-2 xl:grid-cols-3">
				{#each category.items as item (item.title)}
					<ShowcaseCard
						title={item.title}
						image={'/' + imageDirectory + '/' + item.image}
						link={item.link}
						subtitle={item.shortDescription}
						description={item.description}
						{noimage}
					/>
				{/each}
			</div>
		{/each}
	</div>
</section>
