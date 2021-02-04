const Discord = require('discord.js');
const { prefix } = require('../config.json');

const monitorChannel = "797494643431702549";

const string = function(client, message, color, client) {
	function watchFor(user, stringToWatch) {
		if (message.content.toLowerCase().includes(stringToWatch.toLowerCase()) && !message.author.bot) {
			
			client.channels.cache.get(monitorChannel).send(`Message from ${message.author.tag}: ${message.content} \n-Posted in: ${message.channel.name} \n-<@${user}>\n`);

		}
	}


	//watchFor("whyZaya");
	watchFor("224703409515790336", "zaya");
	watchFor("224703409515790336", "Z*ya");
	watchFor("224703409515790336", "Za*a");
	watchFor("224703409515790336", "Z**a");

}

module.exports = {string}
