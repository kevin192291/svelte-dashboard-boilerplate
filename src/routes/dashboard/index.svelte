<script>
  import "./dashboard.scss";
  import { onMount } from 'svelte';
  import {flip} from "svelte/animate";
  import {dndzone} from "svelte-dnd-action";
  import { chart } from "svelte-apexcharts";

    let items = [
        {id: 1, name: "item1", value: 1 },
        {id: 2, name: "item2", value: 2 },
        {id: 3, name: "item3", value: 3 },
        {id: 4, name: "item4", value: 4}
    ];

    const flipDurationMs = 300;
    function handleDndConsider(e) {
        items = e.detail.items;
    }
    function handleDndFinalize(e) {
        items = e.detail.items;
        localStorage.setItem("dashboard_quickcard_order", JSON.stringify(items));
    }
    let bar_options = {
      chart: {
        type: "bar",
        height: '75%'
      },
      series: [
        {
          name: "Income",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    };

    let heat_options = {
      chart: {
        type: "heatmap",
        
      },
      plotOptions: {
        heatmap: {
            radius: 2,
            enableShades: true,
            shadeIntensity: 0.5,
            reverseNegativeShade: true,
            distributed: false,
            useFillColorAsStroke: false,
            colorScale: {
              ranges: [{
                  from: 0,
                  to: 10,
                  color: "blue",
                  fillColor: "red",
                  name: 'cold'
              },
              {
                  from: 11,
                  to: 20,
                  color: "yellow",
                  fillColor: "red",
                  name: 'cool'
              },
              {
                  from: 20,
                  to: 23,
                  color: "green",
                  fillColor: "red",
                  name: 'warm'
              },
              {
                  from: 23,
                  to: 45,
                  color: "red",
                  fillColor: "red",
                  name: 'hot'
              },
            ],
              inverse: false,
              min: 0,
              max: 44
            },        
        }
    },
      series: [
        {
          name: "Month 1",
          data: [{
            x: 'W1',
            y: 22
          }, {
            x: 'W2',
            y: 29
          }, {
            x: 'W3',
            y: 13
          }, {
            x: 'W4',
            y: 32
          }]
        },
        {
          name: "Month 2",
          data: [{
            x: 'W1',
            y: 43
          }, {
            x: 'W2',
            y: 43
          }, {
            x: 'W3',
            y: 43
          }, {
            x: 'W4',
            y: 43
          }]
        },
        {
          name: "Month 3",
          data: [{
            x: 'W1',
            y: 43
          }, {
            x: 'W2',
            y: 43
          }, {
            x: 'W3',
            y: 43
          }, {
            x: 'W4',
            y: 43
          }]
        },
        {
          name: "Month 4",
          data: [{
            x: 'W1',
            y: 43
          }, {
            x: 'W2',
            y: 43
          }, {
            x: 'W3',
            y: 43
          }, {
            x: 'W4',
            y: 43
          }]
        },
        {
          name: "Month 5",
          data: [{
            x: 'W1',
            y: 22
          }, {
            x: 'W2',
            y: 29
          }, {
            x: 'W3',
            y: 13
          }, {
            x: 'W4',
            y: 32
          }]
        },
        {
          name: "Month 6",
          data: [{
            x: 'W1',
            y: 43
          }, {
            x: 'W2',
            y: 43
          }, {
            x: 'W3',
            y: 43
          }, {
            x: 'W4',
            y: 43
          }]
        },
        {
          name: "Month 7",
          data: [{
            x: 'W1',
            y: 43
          }, {
            x: 'W2',
            y: 43
          }, {
            x: 'W3',
            y: 43
          }, {
            x: 'W4',
            y: 43
          }]
        },
        {
          name: "Month 8",
          data: [{
            x: 'W1',
            y: 43
          }, {
            x: 'W2',
            y: 43
          }, {
            x: 'W3',
            y: 43
          }, {
            x: 'W4',
            y: 43
          }]
        },
        {
          name: "Month 9",
          data: [{
            x: 'W1',
            y: 22
          }, {
            x: 'W2',
            y: 29
          }, {
            x: 'W3',
            y: 13
          }, {
            x: 'W4',
            y: 32
          }]
        },
        {
          name: "Month 10",
          data: [{
            x: 'W1',
            y: 43
          }, {
            x: 'W2',
            y: 43
          }, {
            x: 'W3',
            y: 43
          }, {
            x: 'W4',
            y: 43
          }]
        },
        {
          name: "Month 11",
          data: [{
            x: 'W1',
            y: 43
          }, {
            x: 'W2',
            y: 43
          }, {
            x: 'W3',
            y: 43
          }, {
            x: 'W4',
            y: 43
          }]
        },
        {
          name: "Month 12",
          data: [{
            x: 'W1',
            y: 43
          }, {
            x: 'W2',
            y: 43
          }, {
            x: 'W3',
            y: 43
          }, {
            x: 'W4',
            y: 43
          }]
        },
      ]
    };
    let npk_options = {
      chart: {
        type: "radar",
        height: "75%",
      },
      legend: {
        show: false,
      },
    series: [
      {
        name: "Radar Series 1",
        data: [45, 52, 38, 24, 33, 10]
      },
      {
        name: "Radar Series 2",
        data: [26, 21, 20, 6, 8, 15]
      }
    ],
    labels: ['April', 'May', 'June', 'July', 'August', 'September']
  };

    onMount(() => {
      const quickCardOrder = localStorage.getItem("dashboard_quickcard_order") || "";
      if (quickCardOrder !== "") {
        console.debug('Setting Dashboard Quick View Items from LocalStorage');
        items = JSON.parse(quickCardOrder);
      }
    });
</script>



<div class="grid-container">
  <div class="dashboard">
    <div class="dashboard_overview" use:dndzone="{{items, flipDurationMs}}" on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}">
      {#each items as item(item.id)}
      <div class="overview_card" animate:flip="{{duration: flipDurationMs}}">
        <div class="overview_card-info">{item.name}</div>
        <div class="overview_card-icon">{item.value}</div>
      </div>
      {/each}
    </div>

    <div class="dashboard_cards">
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
    </div>
  </div>
</div>
