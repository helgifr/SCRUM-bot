const Discord = require('discord.js');
const bot = new Discord.Client();

let date = 'Engin dagsetning';
let ok = false;
let ko = false;

bot.on('message', (message) => {
    if (message.channel.guild.name === 'Bíó Appið') {
		if (message.content === '!date') {
			message.channel.send(date);
		} else if (message.content.substring(0,8)  === '!newDate') {
			date = message.content.substring(9);
			let newDate = `Nýja dagsetningin er: ${date}`;
			message.channel.send(newDate);
		} else if (message.content === '!help') {
			message.channel.send(`Skipanir eru !date, !newDate og !greet`);
		} else if (message.content === '!help') {
		message.channel.send(`Skipanir eru !alive !greet`);
		} else if (message.content === '!greet') {
			message.channel.send(`What is up guys, it's ya boi. Comin' at ya live through the power of Discord`);
		} else if (message.content === '!alive') {
			message.channel.send(`https://media1.giphy.com/media/3oEjI6hkw6nbYNQkz6/giphy.gif`);
		}
    } else if (message.author.id === '243985999976202241' && ko) {
		message.reply(`Tegidu`);
	} else if (message.author.id === '274566876426928129' && ok) {
		message.reply(`Tegidu`);
	} else if (message.content === '!help') {
		message.channel.send(`Skipanir eru !alive !greet`);
	} else if (message.content === '!greet') {
		message.channel.send(`What is up guys, it's ya boi. Comin' at ya live through the power of Discord`);
	} else if (message.content === '!alive') {
		message.channel.send(`https://media1.giphy.com/media/3oEjI6hkw6nbYNQkz6/giphy.gif`);
	} else if (RegExp('hjalti er negri', 'i').test(message.content) && !message.author.bot) {
		message.channel.send(`Satt`);
	} else if (RegExp('hjalti', 'i').test(message.content) && !message.author.bot) {
		message.channel.send(`Hjalti er negri`);
	} else if (message.content == '!boi' && message.channel.guild.ownerID === message.author.id) {
		ok = !ok;
	} else if (message.content == '!hoe' && message.channel.guild.ownerID === message.author.id) {
		ko = !ko;
	}
});

bot.login(process.env.BOT_TOKEN);