<script>
	import Radar from 'svelte-chartjs/src/Radar.svelte';

	let dataRadar = {
		labels: ['(N) Nitrogen', '(P) Phosphorus', '(K) Potassium', 'PH'],
		datasets: [
			{
				label: 'NPK, PH',
				backgroundColor: 'rgba(194, 116, 161, 0.5)',
				borderColor: 'rgb(194, 116, 161)',
				data: [65, 59, 90, 6]
			},
		]
	};
</script>

<Radar data={dataRadar} options={{ responsive: true, maintainAspectRatio: false }} />
