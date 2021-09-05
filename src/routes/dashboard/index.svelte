<script>
	import './dashboard.scss';
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	// import { chart } from 'svelte-apexcharts';

	let items = [
		{ id: 1, name: 'item1', value: 1 },
		{ id: 2, name: 'item2', value: 2 },
		{ id: 3, name: 'item3', value: 3 },
		{ id: 4, name: 'item4', value: 4 }
	];

	const flipDurationMs = 300;
	function handleDndConsider(e) {
		items = e.detail.items;
	}
	function handleDndFinalize(e) {
		items = e.detail.items;
		localStorage.setItem('dashboard_quickcard_order', JSON.stringify(items));
	}
	let bar_options = {
		chart: {
			type: 'bar',
			height: '75%'
		},
		series: [
			{
				name: 'Income',
				data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
			}
		],
		xaxis: {
			categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
		}
	};

	let heat_options = {
		chart: {
			type: 'heatmap'
		},
		plotOptions: {
			heatmap: {
				radius: 2,
				enableShades: false,
				shadeIntensity: 0.5,
				distributed: false,
				useFillColorAsStroke: false,
				colorScale: {
					ranges: [
						{
							from: -100,
							to: 55,
							color: 'blue',
							name: 'Cold'
						},
						{
							from: 55,
							to: 65,
							color: 'yellow',
							name: 'cool'
						},
            {
							from: 65,
							to: 85,
							color: 'green',
							name: 'warm'
						},
            {
							from: 85,
							to: 150,
							color: 'red',
							name: 'hot'
						},
					],
				}
			}
		},
		series: [
			{
				name: 'Month 1',
				data: [
					{
						x: 'W1',
						y: 50
					},
					{
						x: 'W2',
						y: 60
					},
					{
						x: 'W3',
						y: 70
					},
					{
						x: 'W4',
						y: 80
					}
				]
			},
			{
				name: 'Month 2',
				data: [
					{
						x: 'W1',
						y: 90
					},
					{
						x: 'W2',
						y: 80
					},
					{
						x: 'W3',
						y: 70
					},
					{
						x: 'W4',
						y: 43
					}
				]
			},
			{
				name: 'Month 3',
				data: [
					{
						x: 'W1',
						y: 43
					},
					{
						x: 'W2',
						y: 43
					},
					{
						x: 'W3',
						y: 43
					},
					{
						x: 'W4',
						y: 43
					}
				]
			},
			{
				name: 'Month 4',
				data: [
					{
						x: 'W1',
						y: 43
					},
					{
						x: 'W2',
						y: 43
					},
					{
						x: 'W3',
						y: 43
					},
					{
						x: 'W4',
						y: 43
					}
				]
			},
			{
				name: 'Month 5',
				data: [
					{
						x: 'W1',
						y: 22
					},
					{
						x: 'W2',
						y: 29
					},
					{
						x: 'W3',
						y: 13
					},
					{
						x: 'W4',
						y: 32
					}
				]
			},
			{
				name: 'Month 6',
				data: [
					{
						x: 'W1',
						y: 43
					},
					{
						x: 'W2',
						y: 43
					},
					{
						x: 'W3',
						y: 43
					},
					{
						x: 'W4',
						y: 43
					}
				]
			},
			{
				name: 'Month 7',
				data: [
					{
						x: 'W1',
						y: 43
					},
					{
						x: 'W2',
						y: 43
					},
					{
						x: 'W3',
						y: 43
					},
					{
						x: 'W4',
						y: 43
					}
				]
			},
			{
				name: 'Month 8',
				data: [
					{
						x: 'W1',
						y: 43
					},
					{
						x: 'W2',
						y: 43
					},
					{
						x: 'W3',
						y: 43
					},
					{
						x: 'W4',
						y: 43
					}
				]
			},
			{
				name: 'Month 9',
				data: [
					{
						x: 'W1',
						y: 22
					},
					{
						x: 'W2',
						y: 29
					},
					{
						x: 'W3',
						y: 13
					},
					{
						x: 'W4',
						y: 32
					}
				]
			},
			{
				name: 'Month 10',
				data: [
					{
						x: 'W1',
						y: 43
					},
					{
						x: 'W2',
						y: 43
					},
					{
						x: 'W3',
						y: 43
					},
					{
						x: 'W4',
						y: 43
					}
				]
			},
			{
				name: 'Month 11',
				data: [
					{
						x: 'W1',
						y: 43
					},
					{
						x: 'W2',
						y: 43
					},
					{
						x: 'W3',
						y: 43
					},
					{
						x: 'W4',
						y: 43
					}
				]
			},
			{
				name: 'Month 12',
				data: [
					{
						x: 'W1',
						y: 43
					},
					{
						x: 'W2',
						y: 43
					},
					{
						x: 'W3',
						y: 43
					},
					{
						x: 'W4',
						y: 90
					}
				]
			}
		]
	};
	let npk_options = {
		chart: {
			type: 'radar',
			height: '75%'
		},
		legend: {
			show: false
		},
		series: [
			{
				name: 'Radar Series 1',
				data: [45, 52, 38, 24, 33, 10]
			},
			{
				name: 'Radar Series 2',
				data: [26, 21, 20, 6, 8, 15]
			}
		],
		labels: ['April', 'May', 'June', 'July', 'August', 'September']
	};

  let ApexCharts;
  let loaded = false;

  const chart = (node, options) => {
    if (!loaded) return;

    let myChart = new ApexCharts(node, options);
    myChart.render();

    return {
      update(options) {
        myChart.updateOptions(options);
      },
      destroy() {
        myChart.destroy();
      }
    };
  };

	onMount(async () => {

		const quickCardOrder = localStorage.getItem('dashboard_quickcard_order') || '';
		if (quickCardOrder !== '') {
			console.debug('Setting Dashboard Quick View Items from LocalStorage');
			items = JSON.parse(quickCardOrder);
		}

    const module = await import('apexcharts');
		ApexCharts = module.default;
		window['ApexCharts'] = ApexCharts
		loaded = true

	});
</script>

<div class="grid-container">
	<div class="dashboard">
		<div
			class="dashboard_overview"
			use:dndzone={{ items, flipDurationMs }}
			on:consider={handleDndConsider}
			on:finalize={handleDndFinalize}
		>
			{#each items as item (item.id)}
				<div class="overview_card" animate:flip={{ duration: flipDurationMs }}>
					<div class="overview_card-info">{item.name}</div>
					<div class="overview_card-icon">{item.value}</div>
				</div>
			{/each}
		</div>

		<div class="dashboard_cards">
      {#if loaded}
			<div class="card">
				<h3>Income</h3>
				<div use:chart={bar_options} />
			</div>
			<div class="card">
				<h3>Average Heat By Week</h3>
				<div use:chart={heat_options} />
			</div>
			<div class="card">
				<h3>NPK</h3>
				<div use:chart={npk_options} />
			</div>
      {/if}
		</div>
	</div>
</div>
