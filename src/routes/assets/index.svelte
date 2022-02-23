<script lang="ts">
	import { io, Manager } from 'socket.io-client';
	import { onMount } from 'svelte';
	import { Tooltip } from 'sveltestrap';

	let myHtmlElementA, myHtmlElementB;
	let socket;
	let leftPos = 234;

	const initSocket = async () => {
		console.log('creating socket...');
		socket = io('http://localhost:3001', { transports: ['websocket'] });

		socket.on('connect', () => {
			// always works in preview...
			console.log('socket created with ID:', socket.id);
		});

		socket.on('connect_error', (error) => {
			// permanently fired in dev...
			console.error('Failed to connect', error);
		});

		socket.on('error', (error) => {
			console.error('Error on socket', error);
		});

		socket.on('event', (data) => {
			// works in preview when server emits a message of type 'foo'..
			console.log('movement Event:', data);

			if (data.distance > 8) {
				leftPos += parseInt(data.distance);
			}
		});
	};

	onMount(async () => {
		initSocket();
	});

	const send = async () => {
		socket.emit('positions', {
			msg: 'hello'
		});
	};
</script>

<div class="building">
	<div class="asset" style="left: {leftPos}px;" bind:this={myHtmlElementA}>&nbsp;</div>
    <Tooltip target={myHtmlElementA}>
        <pre>
Triangle Asset
AssetID: #1
Last Seen: {new Date().toDateString()}
Last Location: HOME
        </pre>

    </Tooltip>
</div>

<style lang="scss">
	.building {
		background-image: url('images/house.png');
		background-size: cover;
		height: 500px;
		width: 500px;
	}
	.asset {
		top: 264px;
		left: 234px;
		position: absolute;
		width: 10px;
		height: 10px;
		background-color: red;
		transition: left 1s;
	}
</style>
