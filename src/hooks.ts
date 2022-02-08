import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import type { Handle } from '@sveltejs/kit';
import { browser } from "$app/env";
import { onMount } from 'svelte';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.userid = cookies.userid || uuid();
	console.log(cookies);

	onMount(() => {
		if (browser) {
			localStorage.setItem('jwt', 'jjj');
			console.log(localStorage.getItem('jwt'));
		}
	});

	// TODO https://github.com/sveltejs/kit/issues/1046
	// if (event.params.query.includes('_method')) {
	// 	event.request.method = event.query.get('_method').toUpperCase();
	// }

	const response = await resolve(event);

	if (!cookies.userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers['set-cookie'] = `userid=${event.locals.userid}; Path=/; HttpOnly`;
	}

	return response;
};
