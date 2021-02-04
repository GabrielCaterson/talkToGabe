const Discord = require('discord.js');
const { prefix, token, nickname } = require('../config.json');
const client = new Discord.Client();



function r(message, errorText) {
	return message.channel.send("```diff\n- " + errorText + "```");
}


module.exports = {r};
