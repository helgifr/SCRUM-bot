const Discord = require('discord.js');
const bot = new Discord.Client();

let date = 'Engin dagsetning';

bot.on('message', (message) => {
    if (message.content === '!date') {
        message.reply(date);
    } else if (message.content.substring(0,8)  === '!newDate') {
        date = message.content.substring(9);
        let newDate = `Nýja dagsetningin er: ${date}`;
        message.reply(newDate);
    } else if (message.content === '!help') {
		message.reply(`Skipanir eru !date og !newDate`);
	}
});

bot.login('NDEyNTkxOTI5Njk2NTgzNjgw.DWNAHg.dpiJEUBGqKu6yv7s-p18KG-shj0');