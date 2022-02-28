<script context="module" lang="ts">
	import { beforeNavigate, goto } from '$app/navigation';
	import { Toast, ToastHeader } from 'sveltestrap';
	export const prerender = true;

	const nav = (link: string) => {
		goto(link);
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="container">
	<div class="grid-1 callout"><a href="/assets">Asset Management</a></div>

	<div class="grid-2 callout"><a href="/dashboard">CropWatch</a></div>

	<div class="grid-3 callout"><a href="/water/dashboard">WaterWatch</a></div>

	<div class="grid-4 callout"><a href="/ai/cameras/dashboard">AI</a></div>
</div>

<Toast autohide color="success" style="z-index: 10000; position: absolute; bottom: 10px; right: 10px;">
	<ToastHeader icon='success'>Login Success!</ToastHeader>
	Login Success
</Toast>

<style lang="scss">
	.container {
		display: -ms-grid;
		display: grid;
		-ms-grid-rows: (1fr);
		grid-template-rows: repeat(2, 1fr);
		-ms-grid-columns: (1fr);
		grid-template-columns: repeat(4, 1fr);
		width: 100%;
		height: 100%;
		gap: 2.5px;
	}

	@media screen and (max-width: 60em) {
		.container {
			-ms-grid-rows: (1fr);
			grid-template-rows: repeat(4, 1fr);
		}
	}

	.grid-1 {
		background-image: url('/images/assets/wearhouse.jpg');
		background-size: cover;
		-ms-grid-column: 1;
		grid-column-start: 1;
		grid-column-end: 3;
		-ms-grid-row: 1;
		grid-row: 1;
	}

	@media screen and (max-width: 60em) {
		.grid-1 {
			-ms-grid-column: 1;
			grid-column-start: 1;
			grid-column-end: 5;
			-ms-grid-row: 1;
			grid-row: 1;
		}
	}

	.grid-2 {
		background-image: url('/images/farming/field.jpeg');
		background-size: cover;
		-ms-grid-column: 3;
		grid-column-start: 3;
		grid-column-end: 5;
		-ms-grid-row: 1;
		grid-row: 1;
	}

	@media screen and (max-width: 60em) {
		.grid-2 {
			-ms-grid-column: 1;
			grid-column-start: 1;
			grid-column-end: 5;
			-ms-grid-row: 2;
			grid-row: 2;
		}
	}

	.grid-3 {
		background-image: url('/images/metering/meter.jpg');
		background-size: cover;
		-ms-grid-column: 1;
		grid-column-start: 1;
		grid-column-end: 3;
		-ms-grid-row: 2;
		grid-row: 2;
	}

	@media screen and (max-width: 60em) {
		.grid-3 {
			-ms-grid-column: 1;
			grid-column-start: 1;
			grid-column-end: 5;
			-ms-grid-row: 3;
			grid-row: 3;
		}
	}

	.grid-4 {
		background-image: url('/images/ai/camera.jpg');
		background-size: cover;
		-ms-grid-column: 3;
		grid-column-start: 3;
		grid-column-end: 5;
		-ms-grid-row: 2;
		grid-row: 2;
	}

	@media screen and (max-width: 60em) {
		.grid-4 {
			-ms-grid-column: 1;
			grid-column-start: 1;
			grid-column-end: 5;
			-ms-grid-row: 4;
			grid-row: 4;
		}
	}

	.callout {
		margin: 0;
		text-align: center;

		a {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 5px;
			font-size: 3em;
			height: 100%;
		}

		a:hover {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 5px;
			font-size: 3.5em;
			transition: width 2s, height 2s, transform 2s;
			height: 100%;
		}
	}
</style>
