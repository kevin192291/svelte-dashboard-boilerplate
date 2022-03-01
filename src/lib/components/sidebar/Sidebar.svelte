<script lang="ts">
import { menuItems, sideMenuOpen } from '$lib/stores/app.store';
	import { Icon, Offcanvas } from 'sveltestrap';
	import { ListGroup, ListGroupItem } from 'sveltestrap';

	let items;
	menuItems.subscribe((MenuItems) => items = MenuItems);
	
	let open = true;
	sideMenuOpen.subscribe((value: boolean) => (open = value));
	const toggle = () => { sideMenuOpen.set(!open) };

	function menuClick (item) {
		const i = items.find(i => i.name == item.name);
		i.isActive = true;
		menuItems.set(items);
		sideMenuOpen.set(false);
		};
</script>

<header>
	<div>
		<Offcanvas header="CropWatch Menu" backdrop={true} isOpen={open} {toggle}>
			<ListGroup flush>
				{#each items as item}
					<ListGroupItem tag="a" href="{item.path}" on:click={menuClick(item)}>
						<Icon name="{item.icon}" />&nbsp;{item.label}
					</ListGroupItem>
				{/each}
			</ListGroup>
		</Offcanvas>
	</div>
</header>
