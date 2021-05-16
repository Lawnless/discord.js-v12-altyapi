const ayarlar = require('../ayarlar.js');

module.exports = {
	name: 'message',
	once: false,
	execute(message, client) {
		if (!message.content.startsWith(ayarlar.botPrefix) || message.author.bot) return;

		const args = message.content.slice(ayarlar.botPrefix.length).trim().split(/ +/);
		const command = args.shift().toLowerCase();

		if (!client.commands.has(command)) return;

		try {
			client.commands.get(command).execute(client, message, args);
		} catch (error) {
			console.error(error);
			message.reply('Komut oynatılırken bir sorun oluştu, konsolu kontrol edin!');
		}
	},
};
