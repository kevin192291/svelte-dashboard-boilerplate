<script lang="ts">
	import './dashboard.scss';
	import { onMount } from 'svelte';
	import {
		Button,
		Card,
		CardBody,
		CardFooter,
		CardHeader,
		CardSubtitle,
		CardText,
		CardTitle,
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle
	} from 'sveltestrap';
	import { dndzone } from 'svelte-dnd-action';
	import DataCard from '$lib/components/data-card/DataCard.svelte';
	import type { IDataCardItem } from '$lib/interfaces/dataCard.interface';
	import FullWeatherChart from '$lib/components/full-weather-chart/full-weather-chart.svelte';
	import Line from 'svelte-chartjs/src/Line.svelte';
	import Bar from 'svelte-chartjs/src/Bar.svelte';
	import { Navbar, NavbarBrand } from 'sveltestrap';
	import RadarChart from '$lib/components/radar-chart/radar-chart.svelte';
	import LineChart from '$lib/components/line-chart/line-chart.svelte';

	let items: IDataCardItem[] = [
		{ id: 1, name: 'item1', value: 1, icon: 'https://via.placeholder.com/75' },
		{ id: 2, name: 'item2', value: 2, icon: 'https://via.placeholder.com/75' },
		{ id: 3, name: 'item3', value: 3, icon: 'https://via.placeholder.com/75' },
		{ id: 4, name: 'item4', value: 4, icon: 'https://via.placeholder.com/75' }
	];
	const flipDurationMs = 300;
	function handleDndConsider(e) {
		items = e.detail.items;
	}
	function handleDndFinalize(e) {
		items = e.detail.items;
		localStorage.setItem('dashboard_quickcard_order', JSON.stringify(items));
	}

	let data = [20, 10, 5, 2, 20, 30, 45];

	onMount(() => {
		const quickCardOrder = localStorage.getItem('dashboard_quickcard_order') || '';
		if (quickCardOrder !== '') {
			console.debug('Setting Dashboard Quick View Items from LocalStorage');
			items = JSON.parse(quickCardOrder);
		}
	});
</script>

<!-- <Card>
	<CardBody> -->
<div class="mb-3" style="padding-top:10px; width: 100%;">
	<Dropdown group size="lg" style="float: right;">
		<DropdownToggle caret>Large Dropdown</DropdownToggle>
		<DropdownMenu>
			<DropdownItem>Shave the modern way</DropdownItem>
		</DropdownMenu>
	</Dropdown>
</div>
<div class="grid-container">
	<div class="dashboard">
		<div
			class="dashboard_overview"
			use:dndzone={{ items, flipDurationMs }}
			on:consider={handleDndConsider}
			on:finalize={handleDndFinalize}
		>
			{#each items as item (item.id)}<DataCard {item} />{/each}
		</div>

		<div class="dashboard_cards">
			<div class="two--col">
				<div class="card" style="max-height:500px;">
					<CardHeader>
						<CardTitle>Card title</CardTitle>
					</CardHeader>
					<LineChart />
					<CardBody />
				</div>
				<div class="card">
					<CardHeader>
						<CardTitle>Card title</CardTitle>
					</CardHeader>
					<CardBody>
						<RadarChart />
					</CardBody>
				</div>
			</div>
			<div class="card">
				<CardHeader>
					<CardTitle>Full Weather Chart</CardTitle>
				</CardHeader>
				<FullWeatherChart />
			</div>
			<div class="card">
				<CardHeader>
					<CardTitle>Another Chart</CardTitle>
				</CardHeader>
				<div class="card" style="max-height:500px;">
					<Bar {data} width={270} height={50} options={{ maintainAspectRatio: true }} />
				</div>
			</div>
		</div>
	</div>
</div>
<!-- </CardBody>
</Card> -->
