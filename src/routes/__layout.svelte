<script lang="ts">
	import { Styles } from 'sveltestrap';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import '../app.scss';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import jwt_decode, { JwtPayload } from 'jwt-decode';
	import { browser } from '$app/env';
	import { navigating } from '$app/stores';
import { goto } from '$app/navigation';

	// if (browser) {
	// 	// Use Goto to redirect users if neccessary
	// 	console.log('layout loaded');

	// 	navigating.subscribe((run) => {
	// 		if (browser && run) {
	// 			console.log(`Navigating from ${run.from} to ${run.to}`);
	// 			const jwtString = localStorage.getItem('jwt');
	// 			if (jwtString) {
	// 				const decodedJwt: any = jwt_decode<JwtPayload>(jwtString);
	// 				debugger;
	// 				if (new Date(decodedJwt.exp * 1000) <= new Date()) {
	// 					console.log('JWT has expired by');
	// 					localStorage.removeItem('jwt');
	// 					goto('/login');
	// 				}
	// 			} else {
	// 				goto('/login');
	// 			}
	// 		}
	// 	});
	// }
</script>

<Styles />
<Header />
<Sidebar />

<main>
	<slot />
</main>

<Footer />
