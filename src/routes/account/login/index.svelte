<script lang="ts">
	import { goto } from '$app/navigation';
	import { browserSet, Post } from '$lib/dataService';

	import { showFooter, showHeader } from '$lib/stores/app.store';
	import { Spinner, Toast, ToastHeader } from 'sveltestrap';
	showHeader.set(false);
	showFooter.set(false);

	let email = '',
		password = '',
		error = '',
		loggingIn = false,
		isToastOpen = false,
		toastStatus = '',
		toastMessage = '';


	const handleLogin = async () => {
		loggingIn = true;
		// if (browserGet('refreshToken')) {
		// 	localStorage.removeItem('refreshToken');
		// }
		debugger;
		await Post(`http://localhost:3000/auth/login`, {
			email: email,
			password: password
		})
			.then((response) => {
				if (response && response.status === 201) {
					toastMessage = 'Login Successful';
					toastStatus = 'success';
					isToastOpen = true;
					browserSet('jwt', response.token);
					goto('/');
					showHeader.set(true);
					showFooter.set(true);
				} else {
					loggingIn = false;
					toastMessage = 'Login Failed';
					toastStatus = 'danger';
					isToastOpen = true;
					error = response.error;
					throw error;
				}
			})
			.catch((err) => {
				error = err;
				console.log(err);
			});
	};
</script>

<section>
	<div class="login-form">
		<h1><span id="company-name">CropWatch Login</span> <i class="fas fa-atlas" /></h1>
		<img src="/images/cropwatch-logo.png" />
		<h3>Sign in</h3>
		<!-- <p>with your company account</p> -->

		<form>
			<label for="name">Username</label>
			<input type="text" id="name" name="name" bind:value={email} />

			<label for="password">Password</label>
			<input type="password" id="password" name="password" bind:value={password} />

			<button type="button" on:click|once={handleLogin} disabled={loggingIn}>
				{#if loggingIn}
					<Spinner color="primary" />
				{:else}
					Log in
				{/if}
			</button>
		</form>

		<div class="text-info">
			<a href="https://cropwatch.io/login/forgot">Forgot password?</a>
			<p>No account yet? <a href="https://cropwatch.io/trial">Get a free trial</a></p>
		</div>
	</div>
	<div class="login-img">
		<h1>CropWatch Monitoring System</h1>
		<p>System Tagline here</p>
	</div>
</section>

<Toast isOpen={isToastOpen} autohide color="success" style="z-index: 10000; position: absolute; bottom: 10px; right: 10px;">
	<ToastHeader icon='success'>Login {toastStatus}!</ToastHeader>
	{toastMessage}
</Toast>

<style lang="scss">
	section {
		display: flex;
	}

	.login-img {
		display: none;
	}

	.login-form {
		height: 100vh;
		max-width: 80%;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	#company-name {
		display: none;
	}

	.login-form h1 {
		color: var(--cw-sapphire);
		font-size: 5rem;
		padding-bottom: 20px;
	}

	.login-form p {
		font-size: 1.8rem;
	}

	.login-form h3 {
		padding-bottom: 10px;
	}

	form {
		display: flex;
		flex-wrap: wrap;
		margin: 25px 0;
	}

	form > * {
		flex: 100%;
	}

	input {
		border: 1px solid #dcdde1;
		margin-bottom: 15px;
	}

	input:focus {
		outline: none;
		border-color: var(--cw-sapphire);
		box-shadow: 0 0 4px var(--cw-sapphire);
	}

	label {
		margin-bottom: 5px;
	}

	input,
	button {
		border-radius: 5px;
		padding: 15px;
	}

	button {
		background-color: var(--cw-sapphire);
		border: none;
		color: #f5f6fa;
		font-family: inherit;
		font-weight: 700;
		font-size: 1.5rem;
		text-transform: uppercase;
		transition: background-color linear 0.3s;
	}

	button:active,
	button:hover {
		background-color: #3098e1;
	}

	.text-info {
		text-align: center;
	}

	.text-info a,
	.text-info p {
		font-size: 1.5rem;
	}

	.text-info p {
		padding-top: 10px;
	}

	.text-info a {
		color: var(--cw-sapphire);
		text-decoration: none;
		transition: color ease-in 0.3s;
	}

	.text-info a:active,
	.text-info a:hover {
		color: #353b48;
	}

	/* media queries */
	@media screen and (min-width: 990px) {
		.login-img,
		.login-form {
			padding: 5%;
		}
		.login-form #company-name {
			display: inline;
		}

		.login-form h1 {
			font-size: 3rem;
		}

		.login-form i {
			font-size: 2.5rem;
			vertical-align: super;
		}

		.login-img {
			// background: linear-gradient(to bottom, rgba(195, 20, 50, 0.8), rgba(36, 11, 54, 0.8)),
			// url(static/images/field.jpeg);
			background: linear-gradient(to bottom, rgba(99, 232, 255, 0.356), rgba(0, 12, 10, 0.315)),
				url(static/images/field.jpeg);
			background-position: center;
			background-size: cover;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: flex-end;
		}

		.login-img h1,
		.login-img p {
			width: 300px;
		}

		.login-img h1 {
			color: #f5f6fa;
			font-size: 3.5rem;
		}

		.login-img p {
			color: #bebebe;
			line-height: 1.5;
		}
	}
</style>
