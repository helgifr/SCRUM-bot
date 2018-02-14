const Discord = require('discord.js');
const bot = new Discord.Client();

let date = 'Engin dagsetning';
let scrumfundur = false;
let stage = 0;

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
	} else if (message.content === '!scrumfundur') {
		scrumfundur = true;
		message.channel.send('Hvenær hittist hópurinn síðast?')
	}
		if(message.content === '!next' && scrumfundur) {
			if(stage === 0)
				message.channel.send('Hvað hafiði gert síðan að hópurinn hittist síðast?')
			else if (stage === 1)
				message.channel.send('Hvenær ætlar hópurinn að hittast næst?')
			else if (stage === 2)
	 		  message.channel.send('Hvað ætliði að gera þangað til að hópurinn hittist næst?')
			else if (stage === 3){
				message.channel.send('Hver eru aðal vandamálin sem þið glímið við núna?')
				scrumfundur = false;
				stage = -1;
			}
			stage++;
		}

});

bot.login(process.env.BOT_TOKEN);
