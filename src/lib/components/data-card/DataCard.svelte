<script lang="ts">
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
  import type { IDataCardItem } from './../../interfaces/dataCard.interface';
  export let item: IDataCardItem = {
    id: 1,
    name: "un-named",
    value: NaN,
    icon: 'https://via.placeholder.com/75'
  };
</script>

<style lang="scss">
  @import "./dataCard.scss";
</style>

<Card class="data-card">
  <CardBody>
    <div class="card-content">
      <img src="https://via.placeholder.com/75" alt="{item.name} icon" />
      <div class="overview_card-info">{item.name}</div>
      <div class="overview_card-value">{item.value.toFixed(2)}</div>
    </div>
    <CardFooter>
      <Button>More Info...</Button>
    </CardFooter>
  </CardBody>
</Card>