<script lang="ts">
	import { headerMenuOpen, sideMenuOpen, menuItems } from '$lib/stores/app.store';

	import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'sveltestrap';
	$: outerWidth = 0;
	$: innerWidth = 0;
	$: outerHeight = 0;
	$: innerHeight = 0;

	let items;
	menuItems.subscribe((MenuItems) => items = MenuItems);

	let isOpen: boolean = false;
	headerMenuOpen.subscribe((value) => (isOpen = value));

	const toggle = () => {
		if (innerWidth > 700) {
			headerMenuOpen.set(false);
			sideMenuOpen.set(true);
		} else {
			headerMenuOpen.set(!isOpen);
			sideMenuOpen.set(false);
		}
	};
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<Navbar color="light" light>
	<NavbarBrand href="/" class="me-auto" id="header-nav">
		<img id="logo" src="/images/cropwatch-logo.png" alt="CropWatch logo" />
		CropWatch
	</NavbarBrand>

	<NavbarToggler on:click={toggle} class="me-2" />
	<Collapse {isOpen} navbar>
		<Nav navbar>
			{#each items as item}
				<NavItem>
					<NavLink href="{item.path}">{item.label}</NavLink>
				</NavItem>
			{/each}
		</Nav>
	</Collapse>
</Navbar>

<style lang="scss">
	#logo {
		max-height: 55px;
	}
</style>
