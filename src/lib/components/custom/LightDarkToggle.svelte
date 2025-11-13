<script lang="ts">
	import { buttonVariants } from '$lib/components/shad/ui/button/index.js';
	import { resetMode, setMode } from 'mode-watcher';

	import { Sun } from '@lucide/svelte';
	import { Moon } from '@lucide/svelte';
	import * as DropdownMenu from '$lib/components/shad/ui/dropdown-menu/index.js';
</script>

<div id="darkModeDialog">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger
			class="{buttonVariants({ variant: 'outline', size: 'icon' })} fixed right-4 bottom-4 z-50"
		>
			<Sun
				class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
			/>
			<span class="sr-only">Toggle theme</span>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content align="end">
			<DropdownMenu.Item onclick={() => setMode('light')}>Light</DropdownMenu.Item>
			<DropdownMenu.Item onclick={() => setMode('dark')}>Dark</DropdownMenu.Item>
			<DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>
