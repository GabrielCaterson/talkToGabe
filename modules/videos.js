const Discord = require('discord.js');
const { prefix } = require('../config.json');

const content = function(message, command, args, color) {
	if (command === "stopvid") {
		message.channel.send("https://youtu.be/uOGMQcfuftM");
		return true;

	} else if (command === "nowvid") {
		message.channel.send("https://youtu.be/o2CUN5P-slA");
		return true;

	} else if (command === "p4vid") {
		message.channel.send("https://youtu.be/r9-a4aZJ89w");
		return true;

	} else if (command === "meltdownvid") {
		message.channel.send("https://youtu.be/yTOVu8y-6zA");
		return true;

	} else if (command === "videos") {
		const videoEmbed = new Discord.MessageEmbed()
			.setColor(color)
			.setTitle('Some of the best videos on YouTube')
			.setDescription("Play them in VC! \n \u200B")
			.addFields(

				{ name: '**STOP**', value: 'https://youtu.be/uOGMQcfuftM \n \u200B', inline: true },
				{ name: '**Now...**', value: 'https://youtu.be/o2CUN5P-slA \n \u200B', inline: true },
				{ name: '**P4**', value: 'https://youtu.be/r9-a4aZJ89w \n \u200B', inline: true },
				{ name: '**Meltdown**', value: 'https://youtu.be/yTOVu8y-6zA \n \u200B', inline: true },

			)
			.setFooter("Music to my ears. :)");

		message.channel.send(videoEmbed);

		return true;
	} else return false;


}

module.exports = {content}
