<script>
  import './register.scss';
	import {
		ProgressIndicator,
		ProgressStep,
		Button,
		Modal,
		DataTable,
    OverflowMenu,
    OverflowMenuItem,
    Toolbar,
    ToolbarContent,
    ToolbarSearch,
    ToolbarMenu,
    ToolbarMenuItem,
    ToolbarBatchActions,
    Pagination,
	} from 'carbon-components-svelte';
  import Save16 from "carbon-icons-svelte/lib/Save16";

  const headers = [
    { key: "name", value: "Name" },
    { key: "port", value: "Port" },
    { key: "rule", value: "Rule" },
    { key: "overflow", empty: true },
  ];

  const rows = [
    { id: "a", name: "Load Balancer 3", port: 3000, rule: "Round robin" },
    { id: "b", name: "Load Balancer 1", port: 443, rule: "Round robin" },
    { id: "c", name: "Load Balancer 2", port: 80, rule: "DNS delegation" },
    { id: "d", name: "Load Balancer 6", port: 3000, rule: "Round robin" },
    { id: "e", name: "Load Balancer 4", port: 443, rule: "Round robin" },
    { id: "f", name: "Load Balancer 5", port: 80, rule: "DNS delegation" },
    
  ];

  let currentIndex = 0;
	let thirdStepCurrent = true;
  let selectedRowIds = [rows[0].id, rows[1].id];
	let open = false;
</script>

<DataTable batchSelection sortable {headers} {rows}>
  <span slot="cell" let:cell>
    {#if cell.key === 'overflow'}
      <OverflowMenu flipped>
        <OverflowMenuItem text="Restart" />
        <OverflowMenuItem
          href="https://cloud.ibm.com/docs/loadbalancer-service"
          text="API documentation"
        />
        <OverflowMenuItem danger text="Delete" />
      </OverflowMenu>
    {:else}{cell.value}{/if}
  </span>
  <Toolbar size="sm">
    <ToolbarBatchActions>
      <Button icon={Save16}>Save</Button>
    </ToolbarBatchActions>
    <ToolbarContent>
      <ToolbarSearch />
      <ToolbarMenu>
        <ToolbarMenuItem primaryFocus>Restart all</ToolbarMenuItem>
        <ToolbarMenuItem href="https://cloud.ibm.com/docs/loadbalancer-service">
          API documentation
        </ToolbarMenuItem>
        <ToolbarMenuItem danger>Stop all</ToolbarMenuItem>
      </ToolbarMenu>
      <Button on:click={() => (open = true)}>Add Device</Button>
    </ToolbarContent>
  </Toolbar>
</DataTable>
<Pagination totalItems={102} page={4} />

<Modal
	bind:open
	modalHeading="Create database"
	primaryButtonText="Confirm"
	secondaryButtonText="Cancel"
	on:click:button--secondary={() => (open = false)}
	on:open
	on:close
	on:submit
>
	<ProgressIndicator preventChangeOnClick spaceEqually bind:currentIndex>
		<ProgressStep
			bind:current={thirdStepCurrent}
			label="Step 1"
			description="The progress indicator will listen for clicks on the steps"
		/>
		<ProgressStep
			label="Step 2"
			description="The progress indicator will listen for clicks on the steps"
		/>
		<ProgressStep
			label="Step 3"
			description="The progress indicator will listen for clicks on the steps"
		/>
		<ProgressStep
			label="Step 4"
			description="The progress indicator will listen for clicks on the steps"
		/>
	</ProgressIndicator>

	<div style="margin: var(--cds-layout-02) 0">
		<Button
			kind={currentIndex === 2 ? 'secondary' : 'primary'}
			on:click={() => {
				currentIndex++;
				if (currentIndex === 3) {
					thirdStepCurrent = false;
				}
				console.log('button clicked', currentIndex);
			}}
		>
			Go to step {currentIndex + 2}
		</Button>
	</div>

	<h3>Current index: {currentIndex}</h3>

	<div>Is the third step currently selected? {thirdStepCurrent}</div>
</Modal>
