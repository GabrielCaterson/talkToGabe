const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log("I'M IN!");
});

client.on('message', message => {
	if (message.content === 'What team?') {
	// send back "Pong." to the channel the message was sent in
	message.channel.send('WILDCATS.');
}
});

client.login(config.token);
