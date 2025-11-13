<script lang="ts">
	import * as Table from '$lib/components/shad/ui/table/index.js';
</script>

<svelte:head>
	<title>PrimaryStyle</title>
</svelte:head>

<div class="h-screen w-screen">
	<div class="flex h-full flex-col items-start justify-end p-5">
		<h1 class="flex flex-col text-6xl lg:block lg:text-8xl">
			<span class="font-black">Primary</span><span class="text-8xl font-medium text-neutral-500"
				>Style</span
			>
		</h1>

		<h2 class="text-lg font-light">v2.1</h2>
	</div>
</div>

<div class="h-screen w-screen">
	<div class="flex h-full flex-col items-start justify-end bg-red-500">
		<h1
			class="md:-pl-28 md:text-10xl text-8xl font-bold transition-all duration-500 md:mb-32 md:-ml-16 md:-rotate-90 xl:mb-24"
		>
			Fonts
		</h1>
	</div>
</div>

<div class="font-montserrat h-screen w-screen border-b-4 border-neutral-900">
	<div class="m-5 flex h-full flex-col items-start justify-end">
		<h1 class="mb-10 h-1/2 text-6xl font-bold">Montserrat</h1>

		<div class="h-full w-full text-center">
			<Table.Root>
				<Table.Row class="border-0 ">
					<Table.Cell class="text-lg font-extralight sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">Montserrat Extra Light</span>
						</div>
					</Table.Cell>
					<Table.Cell class="text-lg font-light sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">Montserrat Light</span>
						</div>
					</Table.Cell>
					<Table.Cell class="text-lg font-normal sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">Montserrat Regular</span>
						</div>
					</Table.Cell>
				</Table.Row>
				<Table.Row class="border-0 ">
					<Table.Cell class="text-lg italic sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal not-italic md:text-lg"
								>Montserrat Regular Italics</span
							>
						</div>
					</Table.Cell>
					<Table.Cell class="text-lg font-medium sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">Montserrat Medium</span>
						</div>
					</Table.Cell>
					<Table.Cell class="text-lg font-semibold sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">Montserrat Semi-Bold</span>
						</div>
					</Table.Cell>
				</Table.Row>
				<Table.Row class="border-0 ">
					<Table.Cell class="text-lg font-bold sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">Montserrat Bold</span>
						</div>
					</Table.Cell>
					<Table.Cell class="text-lg font-extrabold sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">Montserrat Extra Bold</span>
						</div>
					</Table.Cell>
					<Table.Cell class="text-lg font-black sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">Montserrat Black</span>
						</div>
					</Table.Cell>
				</Table.Row>
			</Table.Root>
		</div>
	</div>
</div>

<div class="h-screen w-screen border-b-4 border-neutral-900 font-mono">
	<div class="m-5 flex h-full flex-col items-start justify-end">
		<h1 class="mb-10 h-1/2 text-6xl font-bold">JetBrains Mono</h1>

		<div class="h-full w-full text-center">
			<Table.Root>
				<Table.Row class="border-0 ">
					<Table.Cell class="text-lg font-thin sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">JBM Thin</span>
						</div>
					</Table.Cell>
					<Table.Cell class="text-lg font-extralight sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">JBM Extra Light</span>
						</div>
					</Table.Cell>
					<Table.Cell class="text-lg font-light sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">JBM Light</span>
						</div>
					</Table.Cell>
				</Table.Row>
				<Table.Row class="border-0 ">
					<Table.Cell class="text-lg font-normal sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">JBM Regular</span>
						</div>
					</Table.Cell>
					<Table.Cell class="text-lg italic sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal not-italic md:text-lg">JBM Regular Italics</span>
						</div>
					</Table.Cell>
					<Table.Cell class="text-lg font-medium sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">JBM Medium</span>
						</div>
					</Table.Cell>
				</Table.Row>
				<Table.Row class="border-0 ">
					<Table.Cell class="text-lg font-semibold sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">JBM Semi-Bold</span>
						</div>
					</Table.Cell>
					<Table.Cell class="text-lg font-bold sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">JBM Bold</span>
						</div>
					</Table.Cell>
					<Table.Cell class="text-lg font-extrabold sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">JBM Extra Bold</span>
						</div>
					</Table.Cell>
				</Table.Row>
			</Table.Root>
		</div>
	</div>
</div>

<div class="h-screen w-screen font-philosopher">
	<div class="m-5 flex h-full flex-col items-start justify-end">
		<h1 class="mb-10 h-1/2 text-6xl font-bold">Philosopher</h1>

		<div class="h-full w-full text-center">
			<Table.Root>
				<Table.Row class="border-0">
					<Table.Cell class="text-lg font-normal sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">Philosopher Regular</span>
						</div>
					</Table.Cell>
					<Table.Cell class="text-lg font-bold sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal md:text-lg">Philosopher Bold</span>
						</div>
					</Table.Cell>
				</Table.Row>
				<Table.Row class="border-0">
					<Table.Cell class="text-lg font-normal italic sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal not-italic md:text-lg"
								>Philosopher Regular Italics</span
							>
						</div>
					</Table.Cell>
					<Table.Cell class="text-lg font-bold italic sm:text-2xl lg:text-6xl">
						<div class="flex flex-col">
							ABCdef
							<span class="text-sm font-normal not-italic md:text-lg">Philosopher Bold Italics</span
							>
						</div>
					</Table.Cell>
				</Table.Row>
			</Table.Root>
		</div>
	</div>
</div>

<div class="h-screen w-screen">
	<div class="flex h-full flex-col items-start justify-end bg-red-500">
		<h1
			class="md:text-10xl text-8xl font-bold transition-all duration-500 md:mb-32 md:-ml-28 md:-rotate-90"
		>
			Colours
		</h1>
	</div>
</div>

<div class="h-screen w-screen border-b-4 border-neutral-900">
	<div class="m-5 flex h-full flex-col items-start justify-start">
		<h1 class="mb-10 h-1/2 text-6xl font-bold">Primary Colours</h1>

		<div class="h-full w-full text-center">
			<Table.Root>
				<Table.Row class="border-0">
					<Table.Cell class="m-2 border-8 border-black bg-red-500">
						<div class="flex flex-col items-start justify-end">
							<p class="text-2xl font-black">Red-500</p>
							<p class="text-lg font-normal">#EF4444</p>
						</div>
					</Table.Cell>

					<Table.Cell class="m-2 border-8 border-black bg-orange-500">
						<div class="flex flex-col items-start justify-start">
							<p class="text-2xl font-black">Orange-500</p>
							<p class="text-lg font-normal">#F97316</p>
						</div>
					</Table.Cell>

					<Table.Cell class="m-2 border-8 border-black bg-yellow-500">
						<div class="flex flex-col items-start justify-start">
							<p class="text-2xl font-black">Yellow-500</p>
							<p class="text-lg font-normal">#EAB308</p>
						</div>
					</Table.Cell>
				</Table.Row>

				<Table.Row class="border-0">
					<Table.Cell class="m-2 border-8 border-black bg-green-500">
						<div class="flex flex-col items-start justify-start">
							<p class="text-2xl font-black">Green-500</p>
							<p class="text-lg font-normal">#22C55E</p>
						</div>
					</Table.Cell>

					<Table.Cell class="m-2 border-8 border-black bg-blue-500">
						<div class="flex flex-col items-start justify-start">
							<p class="text-2xl font-black">Blue-500</p>
							<p class="text-lg font-normal">#3B82F6</p>
						</div>
					</Table.Cell>

					<Table.Cell class="m-2 border-8 border-black bg-violet-500">
						<div class="flex flex-col items-start justify-start">
							<p class="text-2xl font-black">Violet-500</p>
							<p class="text-lg font-normal">#8B5CF6</p>
						</div>
					</Table.Cell>
				</Table.Row>

				<Table.Row class="border-0">
					<Table.Cell class="m-2 border-8 border-black bg-neutral-500">
						<div class="flex flex-col items-start justify-start">
							<p class="text-2xl font-black">Neutral-500</p>
							<p class="text-lg font-normal">#737373</p>
						</div>
					</Table.Cell>

					<Table.Cell class="m-2 border-8 border-black bg-indigo-500">
						<div class="flex flex-col items-start justify-start">
							<p class="text-2xl font-black">Indigo-500</p>
							<p class="text-lg font-normal">#6366F1</p>
						</div>
					</Table.Cell>

					<Table.Cell class="m-2 border-8 border-black bg-teal-500">
						<div class="flex flex-col items-start justify-start">
							<p class="text-2xl font-black">Teal-500</p>
							<p class="text-lg font-normal">#14B8A6</p>
						</div>
					</Table.Cell>
				</Table.Row>
			</Table.Root>
		</div>
	</div>
</div>

<div class="h-screen w-screen">
	<div class="m-5 flex h-full flex-col items-start justify-start">
		<h1 class="mb-10 h-1/5 text-6xl font-bold">Gradients</h1>

		<div class="h-full w-full text-center">
			<Table.Root>
				{#each ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'neutral', 'indigo', 'teal'] as color (color)}
					<Table.Row class="border-0">
						{#each ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as intensity (intensity)}
							<Table.Cell class={`bg-${color}-${intensity} m-2 border-8 border-black`}>
								<div class="flex flex-col items-start justify-start">
									<p class={`text-lg font-bold ${parseInt(intensity) < 400 ? 'text-black' : ''}`}>
										{color.charAt(0).toUpperCase() + color.slice(1)}-{intensity}
									</p>
								</div>
							</Table.Cell>
						{/each}
					</Table.Row>
				{/each}
			</Table.Root>
		</div>
	</div>
</div>

<div class="h-screen w-screen">
	<div class="flex h-full flex-col items-start justify-end bg-red-500">
		<h1
			class="md:text-10xl mb-8 text-8xl font-bold transition-all duration-500 md:mb-28 md:-ml-20 md:-rotate-90"
		>
			Logos
		</h1>
	</div>
</div>

<div class="h-screen w-screen">
	<div class="m-5 flex h-full flex-col items-start justify-start">
		<h1 class="mb-6 text-6xl font-bold">Logos</h1>

		<div class="flex h-full w-full items-center justify-center self-center md:w-2/3">
			<Table.Root>
				<Table.Row class="border-0 ">
					<Table.Cell class="m-2 border-4 border-neutral-900 bg-black">
						<div class="flex flex-col items-center justify-center">
							<img src="/white.webp" alt="RJM Logo" class="h-fit w-fit" />
						</div>
					</Table.Cell>

					<Table.Cell class="m-2 border-4 border-neutral-900 bg-white">
						<div class="flex flex-col items-center justify-center">
							<img src="/black.webp" alt="RJM Logo" class="h-fit w-fit" />
						</div>
					</Table.Cell>
				</Table.Row>
			</Table.Root>
		</div>
	</div>
</div>
