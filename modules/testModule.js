//testModules
const { prefix, token } = require('../config.json');

let randomNum = function(message) {
	console.log("it worked!");

	if (message.content === `${prefix}zayaTest`) {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('It worked!');
		return true;
	}	else return false;

	//return Math.floor(Math.random() * (max + 1));
}

module.exports = {randomNum};
