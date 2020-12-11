const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log("I'M IN!");
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();


	if (message.content === 'What team?') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('WILDCATS.');

	} else if (message.content.startsWith(`${prefix}ping`)) {
		message.channel.send('Pong.');

	} else if (message.content.startsWith(`${prefix}beep`)) {
		message.channel.send('Boop.');

	} else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);

	} else if (message.content === `${prefix}user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);

	} else if (message.content === `${prefix}dice`) {
		let number = Math.floor((Math.random() * 6) + 1);
		message.channel.send(number);

	} else if (command === 'args-info') {
			if (!args.length) {
				return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
			} else if (args[0] === 'foo') {
				return message.channel.send('bar');
			}

			message.channel.send(`First argument: ${args[0]}`);
	} else if (command === 'kick') {
		// grab the "first" mentioned user from the message
		// this will return a `User` object, just like `message.author`
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');

		} else {
			const taggedUser = message.mentions.users.first();
			message.channel.send(`You wanted to kick: ${taggedUser.username}`);
		}
	} else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
		});

		// send the entire array of strings as a message
		// by default, discord.js will `.join()` the array with `\n`
		message.channel.send(avatarList);
	}



});

client.login(token);
