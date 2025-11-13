<script lang="ts">
	import * as Card from '$lib/components/shad/ui/card';
	import { ExternalLink } from 'lucide-svelte';
	import { resolve } from '$app/paths';
	import type { RouteId } from '$app/types';

	let {
		title,
		image,
		link,
		subtitle,
		description
	}: { title: string; image: string; link: RouteId; subtitle: string; description: [string] } =
		$props();
</script>

<Card.Root class="m-5 h-full max-w-[30rem] min-w-[16rem]">
	<Card.Header class="align-center flex flex-col items-center">
		{#if image !== '/portfolio/'}
			<img src={image} alt={title} class="h-20 w-20 rounded-full object-cover" />
		{:else}
			<img src="white.svg" alt="Placeholder" class="h-20 w-20 object-cover" />
		{/if}

		{#if link}
			<a
				href={resolve(link)}
				target="_blank"
				class="flex flex-row items-center hover:text-gray-400"
			>
				<Card.Title class="text-bold text-center text-4xl">{title}</Card.Title>
				<ExternalLink class="m-0 ml-2 h-6 w-6 p-0" />
			</a>
		{:else}
			<Card.Title class="text-bold text-center text-4xl">{title}</Card.Title>
		{/if}

		<Card.Description>{subtitle}</Card.Description>
	</Card.Header>
	<Card.Content>
		<ul class="list-disc">
			{#each description as line (line)}
				<li class="m-2">{line}</li>
			{/each}
		</ul>
	</Card.Content>
</Card.Root>
