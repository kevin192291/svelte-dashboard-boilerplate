<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import { addMessages, getLocaleFromNavigator, init, locale, _ } from 'svelte-i18n'
	import en from './en.json';
	import jp from './jp.json';
	import { createEventDispatcher } from 'svelte';
    export let value = 'en';
    const dispatch = createEventDispatcher();
    function handleLocaleChange(event) {
        event.preventDefault();
        dispatch('locale-changed', event.target.value);
		locale.set(event.target.value);
    }

	addMessages('en', en);
	addMessages('en-US', en);
	addMessages('jp', jp);

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator(),
	});
</script>

<svelte:head>
	<title>Hello</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<p>{$_('page_title')}</p>
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		<div class="locale-selector">
			<div class="select">
				<select value={value} on:change={handleLocaleChange}>
					<option value="en">English</option>
					<option value="jp">日本語</option>
				</select>
			</div>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
