/*For the type, the API only allows:
	PLAYING
	LISTENING (shows as "listening to")
	WATCHING
	COMPETING (shows as "competing in")

*/


const Discord = require('discord.js');
const { prefix, token } = require('../config.json');

const set = function(client) {
	let iterator = Math.floor(Math.random() * 6);
	function setStatus() {

		let nameText = `cries for ${prefix}help, and doing what I can.`;
		let typeText = "LISTENING"

		switch (iterator) {
			case 0:
				nameText = `cries for ${prefix}help, and doing what I can.`;
				typeText = 'LISTENING';

				iterator++;
				break;
			case 1:
				nameText = `${client.users.cache.size} people waste time...`;
				typeText = 'WATCHING';

				iterator++;
				break;
			case 2:
				nameText = `people in ${client.guilds.cache.size} servers!`;
				typeText = "WATCHING";

				iterator++;
				break;
			case 3:
				nameText = "with fire.";
				typeText = "PLAYING";

				iterator++;
				break;
			case 4:
				nameText = "paint dry.";
				typeText = "WATCHING";

				iterator++;
				break;
			case 5:
				nameText = "Talk nerdy to me!";
				typeText = "LISTENING";

				iterator = 0;//remember to change this to iterator++ if you add more.
				break;
			default:
				iterator = 0;
		}

		client.user.setPresence({
			activity: {
				name: nameText,
				type: typeText
			},
			status: 'online'
		});
	}
	setStatus();
	setInterval(()=> {setStatus()}, 1000 * 5 * 60);

	//Uncomment this for testing.
	/*
	client.user.setPresence({
		activity: {
			name: "test",
			type: "streaming"
		},
		status: 'online'
	});
	*/
}

module.exports = {set}
