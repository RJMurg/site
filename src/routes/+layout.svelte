<script lang="ts">
	import '../app.css';
	import LightDarkToggle from '$lib/components/custom/LightDarkToggle.svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ModeWatcher />
<div class="flex h-screen w-screen flex-col items-center justify-center">
	{@render children()}

	<LightDarkToggle />
</div>
