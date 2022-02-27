<script lang="ts">
	import { io, Manager } from 'socket.io-client';
	import { onMount } from 'svelte';
	import { dataset_dev } from 'svelte/internal';
	import {
		Button,
		CardHeader,
		CardTitle,
		ListGroup,
		ListGroupItem,
		TabContent,
		TabPane,
		Tooltip
	} from 'sveltestrap';

	let myHtmlElementA, noConn;
	let socket;
	let leftPos = 234;
	let events: any[] = [];
	let connectedToWS = false;

	const initSocket = async () => {
		console.log('creating socket...');
		socket = io('http://localhost:3001', { transports: ['websocket'] });

		socket.on('connect', () => {
			// always works in preview...
			console.log('socket created with ID:', socket.id);
			connectedToWS = true;
			// events.push(`${new Date().toLocaleString()} - socket created with ID: ${socket.id}`);
		});

		socket.on('connect_error', (error) => {
			// permanently fired in dev...
			console.error('Failed to connect', error);
			connectedToWS = false;
			events.push(`${new Date().toLocaleString()} - Failed to connect ${error}`);
		});

		socket.on('error', (error) => {
			console.error('Error on socket', error);
			connectedToWS = false;
			events.push(`${new Date().toLocaleString()} - Error on socket ${error}`);
		});

		socket.on('event', (data) => {
			// works in preview when server emits a message of type 'foo'..
			console.log('event received:', data);
			if (data.eui === 'AC1F09FFFE0526F0') data['name'] = 'Tatami Room';
			if (data.eui === 'AC1F09FFFE052B55') data['name'] = 'Bed Room';
			data['time'] = new Date().toLocaleString();
			const seen_tag = events.findIndex((tag) => tag.tag_addr == data.tag_addr);
			if (seen_tag >= 0 && parseInt(events[seen_tag].distance, 16) >= parseInt(data.distance, 16)) {
				events[seen_tag] = data;
			}
			if (seen_tag === -1) {
				events.push(data);
			}
			events = events;
		});
	};

	onMount(async () => {
		initSocket().then(() => send());
	});

	const clearLog = () => {
		events = [];
	};

	const send = async () => {
		socket.emit('positions', {
			msg: 'hello'
		});
	};
</script>

<div class="container">
	<div class="row">
		<div class="col-sm">
			<TabContent>
				<TabPane tabId="event" tab="Event Log" active>
					<div class="card">
						<CardHeader>
							<CardTitle>
								{#if connectedToWS == false}
									<span bind:this={noConn}>🔴</span>
									<Tooltip target={noConn}>Not connected</Tooltip>
								{/if}
								{#if connectedToWS == true}
									<span bind:this={noConn}>🟢</span>
									<Tooltip target={noConn}>Connection is Active</Tooltip>
								{/if}
								Event Log ({events.length})
								<Button color="danger" style="float: right;" on:click={clearLog}>Clear Log</Button>
							</CardTitle>
						</CardHeader>
						<div class="card" style="max-height:500px;">
							<ListGroup>
								{#if events.length == 0}
									<ListGroupItem>No Events Yet</ListGroupItem>
								{/if}
								{#each events as event}
									<ListGroupItem>
										Tag: "{event.tag_addr}"
										{#if event.name}
											is in: {event.name}
										{:else}
											is Distance: {event.distance}
											from ancher: {event.eui}
										{/if}
										at: {event.time}
									</ListGroupItem>
								{/each}
							</ListGroup>
						</div>
					</div>
				</TabPane>
				<TabPane tabId="history" tab="Event History" active>
					<div class="card">
						<CardHeader>
							<CardTitle>Event History</CardTitle>
						</CardHeader>
						<div class="card" style="max-height:500px;" />
					</div>
				</TabPane>
			</TabContent>
		</div>
		<div class="col-sm">
			<div class="card">
				<CardHeader>
					<CardTitle>Visual Location</CardTitle>
				</CardHeader>
				<div class="card" style="max-height:500px;">
					<div class="building">
						<button on:click={send}>Send</button>
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
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.building {
		background-image: url('images/house.png');
		background-size: cover;
		height: 500px;
		width: 500px;
	}
	.asset {
		top: 31%;
		left: 46%;
		position: relative;
		width: 10px;
		height: 10px;
		background-color: red;
		transition: all 2s;
	}

	#clearLogBtn {
		float: right;
	}
</style>
