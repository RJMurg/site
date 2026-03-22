<script lang="ts">
	import * as Card from '$lib/components/shad/ui/card';
	import { resolve } from '$app/paths';
	import { ChevronLeftIcon, ExternalLink } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Builder's Plate</title>
</svelte:head>

<Card.Root class="w-full md:w-2/3">
	<Card.Header class="flex flex-row items-center">
		<a
			class="mr-4 text-muted-foreground transition-all duration-150 ease-in-out hover:scale-150"
			href={resolve('/')}
		>
			<ChevronLeftIcon />
		</a>
		<div>
			<Card.Title class="text-4xl font-black">Builder's Plate</Card.Title>
			<Card.Description>Running v2.3.0</Card.Description>
		</div>
	</Card.Header>

	<Card.Content class="flex flex-col gap-4">
		<p>
			This site is made using the amazing
			<a
				target="_blank"
				href="https://svelte.dev/"
				class="inline-flex items-center gap-1 whitespace-nowrap text-blue-500 transition-all duration-100 ease-in-out hover:text-blue-400"
			>
				Svelte 5 and SvelteKit 2
				<ExternalLink class="h-4 w-4 shrink-0" />
			</a>, a web framework that I cannot recommend higher.
			<br />
			Designed for everything from edge-based Web Apps, PWAs and even static sties, it is a breeze to
			work with it.
		</p>

		<p>
			Icons are provided by the beautifully refined
			<a
				target="_blank"
				href="https://lucide.dev/"
				class="inline-flex items-center gap-1 whitespace-nowrap text-blue-500 transition-all duration-100 ease-in-out hover:text-blue-400"
			>
				Lucide Icon Pack
				<ExternalLink class="h-4 w-4 shrink-0" />
			</a>, and components from the
			<a
				target="_blank"
				href="https://www.shadcn-svelte.com/"
				class="inline-flex items-center gap-1 whitespace-nowrap text-blue-500 transition-all duration-100 ease-in-out hover:text-blue-400"
			>
				Shadcn-Svelte
				<ExternalLink class="h-4 w-4 shrink-0" />
			</a>.
		</p>

		<p>
			For information on the fonts, colours, logos, and other styling universal to all my technical
			and non-technical projects, check out my <a
				href={resolve('/brand')}
				class="text-blue-500 transition-all duration-100 ease-in-out hover:text-blue-400"
				>PrimaryStyle</a
			>.
		</p>

		<p>
			The original source code for this site, and its container is hosted and built on my
			infrastructure using
			<a
				target="_blank"
				href="https://lucide.dev/"
				class="inline-flex items-center gap-1 whitespace-nowrap text-blue-500 transition-all duration-100 ease-in-out hover:text-blue-400"
			>
				Forgejo
				<ExternalLink class="h-4 w-4 shrink-0" />
			</a>
			and mirrored to my
			<a
				target="_blank"
				href="https://lucide.dev/"
				class="inline-flex items-center gap-1 whitespace-nowrap text-blue-500 transition-all duration-100 ease-in-out hover:text-blue-400"
			>
				GitHub
				<ExternalLink class="h-4 w-4 shrink-0" />
			</a>
			.
		</p>

		<p>
			This Builder's Plate is inspired by
			<a
				target="_blank"
				href="https://haripm.com/"
				class="inline-flex items-center gap-1 whitespace-nowrap text-blue-500 transition-all duration-100 ease-in-out hover:text-blue-400"
			>
				Hari Mohan's
				<ExternalLink class="h-4 w-4 shrink-0" />
			</a>
			<a
				target="_blank"
				href="https://haripm.com/colophon/"
				class="inline-flex items-center gap-1 whitespace-nowrap text-blue-500 transition-all duration-100 ease-in-out hover:text-blue-400"
			>
				colophon
				<ExternalLink class="h-4 w-4 shrink-0" />
			</a>
			, and named after the metal plates attached to locomotives.
		</p>
	</Card.Content>
</Card.Root>
