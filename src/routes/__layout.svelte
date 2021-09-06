<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.scss';

	import Drawer, {
	  AppContent,
	  Content,
	  Title,
	  Subtitle,
	  Scrim,
	} from '@smui/drawer';
	import Button, { Label } from '@smui/button';
	import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';
	import H6 from '@smui/common/H6.svelte';
   
	let open = false;
	let active = 'Inbox';
   
	function setActive(value) {
	  active = value;
	  open = false;
	}
</script>

<Header />

<div class="drawer-container">
	<!-- Don't include fixed={false} if this is a page wide drawer.
		  It adds a style for absolute positioning. -->
	<Drawer variant="modal" fixed={false} bind:open>
	  <Header>
		<Title>Super Mail</Title>
		<Subtitle>It's the best fake mail app drawer.</Subtitle>
	  </Header>
	  <Content>
		<List>
		  <Item
			href="javascript:void(0)"
			on:click={() => setActive('Inbox')}
			activated={active === 'Inbox'}
		  >
			<Graphic class="material-icons" aria-hidden="true">inbox</Graphic>
			<Text>Inbox</Text>
		  </Item>
		  <Item
			href="javascript:void(0)"
			on:click={() => setActive('Star')}
			activated={active === 'Star'}
		  >
			<Graphic class="material-icons" aria-hidden="true">star</Graphic>
			<Text>Star</Text>
		  </Item>
		  <Item
			href="javascript:void(0)"
			on:click={() => setActive('Sent Mail')}
			activated={active === 'Sent Mail'}
		  >
			<Graphic class="material-icons" aria-hidden="true">send</Graphic>
			<Text>Sent Mail</Text>
		  </Item>
		  <Item
			href="javascript:void(0)"
			on:click={() => setActive('Drafts')}
			activated={active === 'Drafts'}
		  >
			<Graphic class="material-icons" aria-hidden="true">drafts</Graphic>
			<Text>Drafts</Text>
		  </Item>
   
		  <Separator />
		  <Subheader component={H6}>Labels</Subheader>
		  <Item
			href="javascript:void(0)"
			on:click={() => setActive('Family')}
			activated={active === 'Family'}
		  >
			<Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
			<Text>Family</Text>
		  </Item>
		  <Item
			href="javascript:void(0)"
			on:click={() => setActive('Friends')}
			activated={active === 'Friends'}
		  >
			<Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
			<Text>Friends</Text>
		  </Item>
		  <Item
			href="javascript:void(0)"
			on:click={() => setActive('Work')}
			activated={active === 'Work'}
		  >
			<Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
			<Text>Work</Text>
		  </Item>
		</List>
	  </Content>
	</Drawer>
   
	<Scrim fixed={false} />
	<AppContent class="app-content">
	  <main>
		<Button on:click={() => (open = !open)}>
		  <Label>Toggle Drawer</Label>
		</Button>
		<!-- <slot /> -->
	  </main>
	</AppContent>
</div>
<Footer />
