const Discord = require('discord.js');
const { prefix } = require('../config.json');

const monitorChannel = "797494643431702549";
const myID = "224703409515790336";

const string = function(client, message, color, client) {
	function watchFor(user, stringToWatch) {
		if (message.content.toLowerCase().includes(stringToWatch.toLowerCase()) && !message.author.bot) {
			
			client.channels.cache.get(monitorChannel).send(
				`Message from <@${message.author.id}>: ${message.content}\n\n` +
				
				`Posted in: <#${message.channel.id}>\n` +
				`${message.url}\n` +
				`<@${user}>\n` +
				"``` ```"
			);

		}
	}


	//watchFor("whyZaya");
	watchFor(myID, "zaya");
	watchFor(myID, "Z*ya");
	watchFor(myID, "Za*a");
	watchFor(myID, "Z**a");

}

module.exports = {string}
