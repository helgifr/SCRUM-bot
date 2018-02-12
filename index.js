const Discord = require('discord.js');
const bot = new Discord.Client();

let date = 'Engin dagsetning';

bot.on('message', (message) => {
    if (message.content === '!date') {
        message.channel.sendMessage(date);
    } else if (message.content.substring(0,8)  === '!newDate') {
        date = message.content.substring(9);
        let newDate = `Nýja dagsetningin er: ${date}`;
        message.channel.sendMessage(newDate);
    } else if (message.content === '!help') {
		message.channel.sendMessage(`Skipanir eru !date og !newDate`);
	}
});

bot.login(process.env.BOT_TOKEN);