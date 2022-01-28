<script lang="ts">
	import { page } from '$app/stores';
	import { Offcanvas } from 'sveltestrap';
	import { ListGroup, ListGroupItem } from 'sveltestrap';
	let open = false;
	export const toggle = () => (open = !open);
</script>

<header>
	<div>
		<Offcanvas header="No Backdrop" backdrop={true} isOpen={open} {toggle}>
			<ListGroup flush>
				<ListGroupItem disabled tag="a" href="#" active>Active</ListGroupItem>
				<ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
				<ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
				<ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
				<ListGroupItem tag="a" href="#" disabled>Disabled</ListGroupItem>
			</ListGroup>
		</Offcanvas>
	</div>
</header>
