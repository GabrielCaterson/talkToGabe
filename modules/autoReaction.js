const Discord = require('discord.js');
const { prefix, token } = require('../config.json');

const content = function(message) {
	function autoReaction(prompt, reaction) {
		if (message.content.toLowerCase().includes(prompt) && !message.author.bot) {
			message.react(reaction);
		}
	}

	function swapReaction(prompt, reaction1, reaction2) {
		if (message.content.toLowerCase().includes(prompt) && !message.author.bot) {
			message.react(reaction1).then(
				message.reactions.removeAll()
				.catch(error => console.error('Failed to clear reactions: ', error))
					.then( message.react(reaction2))
			);
			
		}
	}

	autoReaction("dialeth", ':mkay:786013015676944414'); //Should trigger when someone types "dialetheism," "dialetheist," or "dialetheia."
	autoReaction("blob_dance", '<a:blobdance:854149697572831242>');
	autoReaction("blobdance",  '<a:blobdance:854149697572831242>');



	swapReaction("?lock", 	'⏳', '✅');
	swapReaction("?unlock", '⏳', '✅');
	swapReaction("!lock", 	'⏳', '✅');
	swapReaction("!unlock", '⏳', '✅');

}

module.exports = {content}
