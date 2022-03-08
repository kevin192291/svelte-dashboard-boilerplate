<script lang="ts">
	import { Styles } from 'sveltestrap';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import '../app.scss';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';

</script>

<Styles />
<Header />
<Sidebar />

<main>
	<slot />
</main>

<Footer />
