const Discord = require('discord.js');
const { prefix, token } = require('../config.json');
const contradiction = require("./contradiction.js");
const isNumber = require("./isNumber.js");


const content = function(message, command, args, color) {
	if (command === "dice") {
		if (!args.length) { //no argument
			let number = Math.ceil(Math.random() * 6);

			const diceEmbed = new Discord.MessageEmbed()
				.setColor(color)
				.setTitle('Rolled **' + number + "** out of 6")
			message.channel.send(diceEmbed);

		} else if (isNumber.content(args[0])){
			let number = Math.ceil((Math.random() * args[0]));

			const diceEmbed = new Discord.MessageEmbed()
				.setColor(color)
				.setTitle('Rolled **' + number + "** out of " + args[0])
			message.channel.send(diceEmbed);

		} else {
			args.push("is a number");
			contradiction.content(message, "contradiction", args);

		}
		return true;
	} else return false;
}

module.exports = {content}
