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
        height: "75%",
      },
      series: [
        {
          name: "Series 1",
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
          name: "Series 2",
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
        }
      ]
    };
    let npk_options = {
      chart: {
        type: "radar",
        height: "75%",
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
        <h3>Heat Over Time</h3>
        <div use:chart={heat_options} />
      </div>
      <div class="card">
        <h3>NPK</h3>
        <div use:chart={npk_options} />
      </div>
    </div>
  </div>
</div>
