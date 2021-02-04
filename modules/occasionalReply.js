const Discord = require('discord.js');
const { prefix, token } = require('../config.json');

const content = function(message) {
	function occasionalReply(prompt, output, frequency) {
		if (message.content.toLowerCase().includes(prompt) && !message.author.bot) {
			let oddsOfSending = Math.floor(Math.random() * frequency);

			if (oddsOfSending == 0) {
				message.channel.send(output);
			}
		}
	}

	occasionalReply("strawman", "You are STRAWMANNING ME.", 300);
	occasionalReply("stop", "STOP. STOP. STOP. STOP. STOP. STOP. STOP. STOP.", 500);
	occasionalReply(" now ", "NOW. NOW. NOW. NOW. NOW. NOW. NOW. NOW.", 900);
	occasionalReply("argument", "CAN? YOU? DELIVER? A SOUND ARGUMENT?", 300);
	occasionalReply("ntt", "NAM TRAT", 300);
}

module.exports = {content}
