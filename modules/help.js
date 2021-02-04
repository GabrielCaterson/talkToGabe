const Discord = require('discord.js');
const { prefix, token } = require('../config.json');

const content = function(message, color1) {
	if (message.content === `${prefix}help`) {
	const helpEmbed = new Discord.MessageEmbed()
		.setColor(color1)
		.setTitle('Commands')
		.setAuthor('by whyZaya')
		.setDescription("Here\'s what I can do. \n \u200B")
		.addFields(

			{ name: '**!size**', value: 'Shows the number of people in the server. \n \u200B', inline: true },
			{ name: '**!dice**', value: 'Rolls dice. You can include a number (like !dice 100) to get a number between 1 and that number. \n \u200B', inline: true },
			{ name: '**!contradiction**', value: 'Gives an example of one of the problems with contradictions. You can include a proposition to be used in the example. \n \u200B', inline: true },
			{ name: '**!user-info**', value: 'Shows your user ID. \n \u200B', inline: true },
			{ name: '**!videos**', value: "Quick access to links to James\' videos. \n \u200B", inline: true },

		)
		.setTimestamp()
		.setFooter('I also nag people sometimes. :)');

		message.channel.send(helpEmbed);
		return true;
	} else return false;
}

module.exports = {content};

let testABC = "this is a test atohuroheucheur feild "
