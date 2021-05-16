const Discord = require('discord.js');
const fs = require('fs');
const ayarlar = require('./ayarlar.js');

const client = new Discord.Client();

client.commands = new Discord.Collection();
const komutDosya = fs.readdirSync('./komutlar').filter(dosya => dosya.endsWith('.js'));
for (const dosya of komutDosya) {
	const komut = require(`./komutlar/${dosya}`);
	client.commands.set(komut.name, komut);
}

const olayDosya = fs.readdirSync('./olaylar').filter(dosya => dosya.endsWith('.js'));
for (const dosya of olayDosya) {
	const olay = require(`./olaylar/${dosya}`);
	if (olay.once) {
		client.once(olay.name, (...args) => olay.execute(...args, client));
	} else {
		client.on(olay.name, (...args) => olay.execute(...args, client));
	}
}

client.login(ayarlar.botToken);
