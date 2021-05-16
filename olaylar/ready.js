const ayarlar = require('../ayarlar.js');

module.exports = {
	name: 'ready',
	once: false,
	execute(client) {
		setInterval(() => {
			client.user.setActivity(`${ayarlar.botPrefix} | ${client.users.cache.size} üye, ${client.channels.cache.size} kanal, ${client.guilds.cache.size} sunucu!`, {type: 'PLAYING'})
		}, 10000);
		console.log(`[BOT] ${client.user.tag} adı altında giriş yapıldı.`);
	},
};
