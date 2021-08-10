const Discord = require('discord.js');
const { prefix } = require('../config.json');
const color = require("./color.js");


const monitorChannel = "797494643431702549";
const myID = "224703409515790336";

const string = function(client, message, client) {

	let cleanString = message.content.toLowerCase();
	cleanString = cleanString.split("termizaya").join("")
				.split("chadzaya").join("");
	

	function watchFor(user, stringToWatch) {
		
		if (cleanString.includes(stringToWatch.toLowerCase()) 
			&& !message.author.bot) {
			
			client.channels.cache.get(monitorChannel).send(
				`👀 <@${message.author.id}> in <#${message.channel.id}>: ${message.content}\n\n` +
				
				`${message.url}\n` +
				`<@${user}>\n` +
				"``` ```"
			);

		}
	}


	watchFor(myID, "zaya");
	watchFor(myID, "z*ya");
	watchFor(myID, "za*a");
	watchFor(myID, "z**a");


}

module.exports = {string}
