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
		CardTitle
	} from 'sveltestrap';
	import Line from 'svelte-chartjs/src/Line.svelte';
	import { dndzone } from 'svelte-dnd-action';
	import DataCard from '$lib/components/data-card/DataCard.svelte';
	import type { IDataCardItem } from '$lib/interfaces/dataCard.interface';

	let items: IDataCardItem[] = [
		{ id: 1, name: 'item1', value: 1, icon: 'https://via.placeholder.com/75' },
		{ id: 2, name: 'item2', value: 2, icon: 'https://via.placeholder.com/75' },
		{ id: 3, name: 'item3', value: 3, icon: 'https://via.placeholder.com/75' },
		{ id: 4, name: 'item4', value: 4, icon: 'https://via.placeholder.com/75' }
	];

	onMount(() => {
		const quickCardOrder = localStorage.getItem('dashboard_quickcard_order') || '';
		if (quickCardOrder !== '') {
			console.debug('Setting Dashboard Quick View Items from LocalStorage');
			items = JSON.parse(quickCardOrder);
		}
	});
	const flipDurationMs = 300;
	function handleDndConsider(e) {
		items = e.detail.items;
	}
	function handleDndFinalize(e) {
		items = e.detail.items;
		localStorage.setItem('dashboard_quickcard_order', JSON.stringify(items));
	}

	let dataLine = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'My First dataset',
				fill: true,
				lineTension: 0.3,
				backgroundColor: 'rgba(225, 204,230, .3)',
				borderColor: 'rgb(205, 130, 158)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgb(205, 130,1 58)',
				pointBackgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 10,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgb(0, 0, 0)',
				pointHoverBorderColor: 'rgba(220, 220, 220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [65, 59, 80, 81, 56, 55, 40],
				maintainAspectRatio: false
			},
			{
				label: 'My Second dataset',
				fill: true,
				maintainAspectRatio: false,
				lineTension: 0.3,
				backgroundColor: 'rgba(184, 185, 210, .3)',
				borderColor: 'rgb(35, 26, 136)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgb(35, 26, 136)',
				pointBackgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 10,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgb(0, 0, 0)',
				pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [28, 48, 40, 19, 86, 27, 90]
			}
		]
	};

	let config = {
		title: {
			text: 'Solar Employment Growth by Sector, 2010-2016'
		},

		subtitle: {
			text: 'Source: thesolarfoundation.com'
		},

		yAxis: {
			title: {
				text: 'Number of Employees'
			}
		},

		xAxis: {
			accessibility: {
				rangeDescription: 'Range: 2010 to 2017'
			}
		},

		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle'
		},

		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
				pointStart: 2010
			}
		},

		series: [
			{
				name: 'Installation',
				data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
			},
			{
				name: 'Manufacturing',
				data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
			},
			{
				name: 'Sales & Distribution',
				data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
			},
			{
				name: 'Project Development',
				data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
			},
			{
				name: 'Other',
				data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
			}
		],

		responsive: {
			rules: [
				{
					condition: {
						maxWidth: 500
					},
					chartOptions: {
						legend: {
							layout: 'horizontal',
							align: 'center',
							verticalAlign: 'bottom'
						}
					}
				}
			]
		}
	};
</script>

<Card>
	<CardBody>
		<div class="grid-container">
			<div class="dashboard">
				<div
					class="dashboard_overview"
					use:dndzone={{ items, flipDurationMs }}
					on:consider={handleDndConsider}
					on:finalize={handleDndFinalize}
				>
					{#each items as item (item.id)}
						<DataCard {item} />
						<!-- <Card>
							<CardBody>
								<div>
									<img src="https://via.placeholder.com/75" alt="{item.name} icon" />
									<div class="overview_card-info">{item.name}</div>
									<div class="overview_card-value">{item.value}</div>
								</div>
								<CardFooter>
									<Button>More Info...</Button>
								</CardFooter>
							</CardBody>
						</Card> -->
					{/each}
				</div>

				<div class="dashboard_cards">
					<div class="card">
						<CardHeader>
							<CardTitle>Card title</CardTitle>
						</CardHeader>
						<CardBody>
							<Line data={dataLine} options={{ responsive: true, maintainAspectRatio: false }} />
						</CardBody>
					</div>
					<div class="card">
						
					</div>
					<div class="card">
						
					</div>
				</div>
			</div>
		</div>
	</CardBody>
</Card>
