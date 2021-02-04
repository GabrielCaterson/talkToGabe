const Discord = require('discord.js');
const { prefix, token } = require('../config.json');

const content = function(message) {
	function autoReaction(prompt, output) {
		if (message.content.toLowerCase().includes(prompt) && !message.author.bot) {
			message.react(output);
		}
	}

	autoReaction("dialeth", ':mkay:786013015676944414'); //Should trigger when someone types "dialetheism," "dialetheist," or "dialetheia."
}

module.exports = {content}
