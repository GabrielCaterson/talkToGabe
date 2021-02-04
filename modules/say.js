const Discord = require('discord.js');
const { prefix, token, nickname } = require('../config.json');

const myID = "224703409515790336"

const content = function(message, command, args, client) {
	if (message.author.id == myID) {
		if (command === "say") {
			let copiedText = message.content.substring(4);
			message.channel.send(copiedText);
			message.delete();
			return true;

		} else if (command === "sayas") {
			const user = message.content.substring(
				message.content.lastIndexOf(":") + 1,
				message.content.lastIndexOf(";")
			);

			let copiedText = message.content.substring((prefix + command + user).length + 4);
			message.guild.me.setNickname(user);
			message.channel.send(copiedText);
			message.guild.me.setNickname(nickname);
			message.delete();
			return true;

		} else if (command === "sayin" ) {
			let copiedText = message.content.substring(7 + args[0].length);
			message.channel.send("sent in: " + args[0] + ": " + copiedText);
			client.channels.cache.get(args[0]).send(copiedText);
			message.delete();
			return true;

		} else return false;
	}
}

module.exports = {content}
