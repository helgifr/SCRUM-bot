const Discord = require('discord.js');
const bot = new Discord.Client();

let date = 'Engin dagsetning';

bot.on('message', (message) => {
	if (message.content === '!date') {
		message.channel.send(date);
	} else if (message.content.substring(0,8)  === '!newDate') {
		date = message.content.substring(9);
		message.channel.send(`Nýja dagsetningin er: ${date}`);
	} else if (message.content === '!help') {
		message.channel.send(`Skipanir eru !date, !newDate og !greet`);
	} else if (message.content === '!greet') {
		message.channel.send(`What is up guys, it's ya boi. Comin' at ya live through the power of Discord`);
	} else if (message.content === '!alive') {
		message.channel.send(`https://media1.giphy.com/media/3oEjI6hkw6nbYNQkz6/giphy.gif`);
	}
});

bot.login(process.env.BOT_TOKEN);