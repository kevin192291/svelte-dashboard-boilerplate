<script>
  import "./dashboard.scss";
  import { onMount } from 'svelte';
  import {flip} from "svelte/animate";
  import {dndzone} from "svelte-dnd-action";

    let items = [
        {id: 1, name: "item1", value: 1 },
        {id: 2, name: "item2", value: 2 },
        {id: 3, name: "item3", value: 3 },
        {id: 4, name: "item4", value: 4}
    ];

    onMount(() => {
      const quickCardOrder = localStorage.getItem("dashboard_quickcard_order") || "";
      if (quickCardOrder !== "") {
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
        localStorage.setItem("dashboard_quickcard_order", JSON.stringify(items));
    }
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
      <div class="card">Card A</div>
      <div class="card">Card B</div>
      <div class="card">Card C</div>
    </div>
  </div>
</div>
