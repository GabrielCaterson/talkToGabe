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

				{ name: `**${prefix}size**`, value: 'Shows the number of people in the server. \n \u200B', inline: true },
				{ name: `**${prefix}dice**`, value: 'Rolls dice. You can include a number (like !dice 100) to get a number between 1 and that number. \n \u200B', inline: true },
				{ name: `**${prefix}contradiction {proposition}**`, value: 'Gives an example of one of the problems with contradictions. You can include a proposition to be used in the example. \n \u200B', inline: true },
				{ name: `**${prefix}user-info**`, value: 'Shows your user ID. \n \u200B', inline: true },
				{ name: `**${prefix}videos**`, value: "Quick access to links to James\' videos. \n \u200B", inline: true },
				{ name: `**${prefix}d [seconds]**`, value: "Delete a message after x number of seconds. \n \u200B", inline: true },
				{ name: `**${prefix}join/hopIn/rollUp/squadUp/soph**`, value: "Join the VC! Why? Nobody knows. \n \u200B", inline: true },
				{ name: `**${prefix}leave/dc/dip/disconnect/getOut**`, value: "Leave the VC! Bye. \n \u200B", inline: true },
				//{ name: `**${prefix}check/wc**`, value: "Check the validity of an argument in propositional logic. \n \u200B", inline: true },
				{ name: `**${prefix}say/sayAs [name]/sayIn**`, value: "Talk as the bot. (Only I can use this right now.) \n \u200B", inline: true },
				//{ name: `**${prefix}talk**`, value: "Get botZaya to talk to you using AI! \n \u200B", inline: true },
				//{ name: `**${prefix}trans**`, value: "Quick access to links to James\' videos. \n \u200B", inline: true },
				//{ name: `**${prefix}untrans**`, value: "Quick access to links to James\' videos. \n \u200B", inline: true },
				{ name: `**dialetheism**`, value: "Reacts to your message. Also does not react to your message. \n \u200B", inline: true },
				{ name: `**${prefix}lock**`, value: "Locks you. \n \u200B", inline: true },
				{ name: `**${prefix}unlock**`, value: "Unlocks you. \n \u200B", inline: true }
				//,
				//{ name: '**!proplog**', value: "Quick access to links to James\' videos. \n \u200B", inline: true },

			)
			//.setTimestamp()
			.setFooter('I also nag people sometimes. :)');

		message.channel.send(helpEmbed);
		return true;
	} else return false;
}

module.exports = {content};