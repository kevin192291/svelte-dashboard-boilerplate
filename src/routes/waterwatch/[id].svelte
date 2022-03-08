<script lang="ts">
	import { page } from '$app/stores';

	import DataCard from '$lib/components/data-card/DataCard.svelte';
	import { Get } from '$lib/dataService';
	import type { IDataCardItem } from '$lib/interfaces/dataCard.interface';
	import { onMount } from 'svelte';
	import Bar from 'svelte-chartjs/src/Bar.svelte';
	import { CardBody, CardHeader, CardTitle } from 'sveltestrap';

	const eui = $page.url.searchParams.has('eui') ? $page.url.searchParams.get('eui') : '';
	let items: IDataCardItem[] = [];
	let display = false;
	let data = {
		labels: [],
		datasets: [
			{
				label: 'Water Useage',
				data: [],
				borderWidth: 2,
				backgroundColor: ['rgba(255, 99, 132, 0.5)']
			}
		]
	};
	const handleMeterData = async () => {
		await Get(`http://localhost:3000/waterwatch?type=value&last=${24 * 30}&eui=${eui}`).then(
			(response) => {
				// sort array of objects by date
				response.sort((a: any, b: any) => {
					return new Date(a.value.time) - new Date(b.value.time);
				});
				
				items.push({
					value: (response.map((x) => x.value.value).reduce((a, b) => (a/10) + (b/10))) * 110,
					id: 1,
					name: 'Month To Date Cost',
					icon: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Yen_sign.jpg'
				});
				debugger;
				data.datasets[0].data = response.map((x) => x.value.value);
				data.labels = response.map((n) => n.value.value);
				display = true;
			}
		);
	};

	onMount(() => {
		handleMeterData();
	});
</script>

<div class="container">
	<div class="row">
		<div class="col-sm">
			{#if display}
				{#each items as item (item.id)}<DataCard {item} />{/each}
			{/if}
		</div>
	</div>
	<br />
	<div class="card">
		<CardHeader>
			<CardTitle>Overview</CardTitle>
		</CardHeader>
		<CardBody>
			{#if display}
				<Bar {data} width={100} height={300} options={{ maintainAspectRatio: false }} />
			{/if}
		</CardBody>
	</div>
</div>
