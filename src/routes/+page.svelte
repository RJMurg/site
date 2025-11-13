<script lang="ts">
	import Hero from '$lib/components/custom/hero.svelte';

	const subtitles = [
		'1st Class Honours Student',
		'Computer Science w/ German',
		'Systems Administrator',
		'Former Societies President',
		'WorldSkills Ireland Champion',
		'STAR Student @ SAP'
	];

	let tempSubtitles = subtitles;
	let subtitle = updateSubtitle();

	function updateSubtitle() {
		const index = Math.floor(Math.random() * tempSubtitles.length);

		const newSubtitle = tempSubtitles[index];
		tempSubtitles = tempSubtitles.filter((_, i) => i !== index);

		if (tempSubtitles.length === 0) {
			tempSubtitles = subtitles;
		}

		return newSubtitle;
	}

	setInterval(() => {
		subtitle = updateSubtitle();
	}, 3000);
</script>

<Hero {subtitle} />
