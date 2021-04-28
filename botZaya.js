const Discord = require('discord.js');
const { prefix, token, nickname } = require('./config.json');
const client = new Discord.Client();

//small functions
const color = require("./modules/color.js");
const isNumber = require("./modules/isNumber.js");
const errorMessage = require("./modules/errorMessage.js");


//bot functions
const help = require("./modules/help.js");
const dice = require("./modules/dice.js");
const contradiction = require("./modules/contradiction.js");
const say = require("./modules/say.js");
const occasionalReply = require("./modules/occasionalReply.js");
const autoReaction = require("./modules/autoReaction.js");
const nag = require("./modules/nag.js");
const status = require("./modules/status.js");
const monitor = require("./modules/monitor.js");
const videos = require("./modules/videos.js");
const deleter = require("./modules/deleter.js");
const propLogic = require("./modules/propLogic.js");




//const talkToGPT = require("./modules/talkToGPT.js");





const color1 = "#39FF14";
const color2 = "000000";

let deleterIsRunning = false;







client.once('ready', () => {
	color.g("I'M IN!");

	status.set(client);

});





client.on('message', message => {
	let args = message.content.slice(prefix.length)
								.trim()
								.split(/ +/);
	args[0] = args[0].split(/\n+/);
	args = [].concat(...args);

	const command = args.shift()
						.toLowerCase();

	const combinedArgs = args.slice()
								.join(" ");




	//actions
	occasionalReply.content(message);
	autoReaction.content(message);
	nag.content(message, client);
	monitor.string(client, message, client);


	//commands:
	if (message.author.bot) return;
	/*
	//const webhook = new Discord.WebhookClient(id, token)
	const webhookID = "796929479002816532";
	const webhookToken = "m9vn406B-sJ5T7DeQAdL6vzD7CDrHIZTiaqKlB4wLMmvLrpVkIqAlbRW9t9_CNaheEvy";
	const webhook = new Discord.WebhookClient(webhookID, webhookToken);
	//https://discord.com/api/webhooks/796929479002816532/m9vn406B-sJ5T7DeQAdL6vzD7CDrHIZTiaqKlB4wLMmvLrpVkIqAlbRW9t9_CNaheEvy



	webhook.send(message.content, {username: message.author.tag, avatarURL: message.author.avatarURL()}).catch(err => {
		console.log("Couldn't send: " + message.content);
		console.log(err);
	});
	*/






	//prefixed commands only
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	/*if (talkToGPT.content(message, command, args)) {
		return;
	} else*/ if (help.content(message, color1)) {
		return;
//	} else if ( (message.channel.id === "793934156110364692") ||
//							(command === "talkToZaya")) {

	} else if (message.content === `${prefix}What team?`) {
		message.channel.send('WILDCATS.');

	} else if (command === "ping") {
		message.channel.send('Pong.');

	} else if (command === "beep") {
		message.channel.send('Boop.');

	} else if (command === "size") {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);

	} else if (command === "user-info") {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);

	} else if (dice.content(message, command, args, color2)) {

	} else if (videos.content(message, command, args, color2)) {

	} else if (contradiction.content(message, command, args)) {

	} else if (say.content(message, command, args, client)) {

	} else if (propLogic.content(message, command, args, combinedArgs)) {

	} else if (command === "d") {

		if (deleterIsRunning == true) {
			deleter.content(message, command, args, color2, true);

		} else {

			deleterIsRunning = true;

			let deleteTime = isNumber.content(args[0]) ? parseInt(args[0]) : 5;
			setTimeout(()=> {
				deleterIsRunning = false;
			}, deleteTime * 1000);


			deleter.content(message, command, args, color2, false);

		}

	}

});

client.login(token);

module.exports = {deleterIsRunning};
