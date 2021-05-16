module.exports = {
	name: 'ping',
	description: 'Gecikmeyi gösterir.',
	execute(client, message, args) {
		message.channel.send(`Pong! Gecikmem **${client.ws.ping}ms**.`);
	},
};
