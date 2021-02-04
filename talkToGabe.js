const Discord = require('discord.js');
const { prefix, talkToToken } = require('./config.json');
const client = new Discord.Client();

const chalk = require("chalk");
const log = console.log;
log(chalk.keyword("orange")("Hello!"));

//Modules
const color = require("./modules/color.js");
const errorMessage = require("./modules/errorMessage.js");


const status = require("./modules/status.js");

const talkToGPT = require("./modules/talkToGPT.js");



client.once('ready', () => {
	color.g("Let's chat!");

	status.set(client);

});

const color1 = "#39FF14";
const color2 = "000000"


client.on('message', message => {
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	//actions


	if (message.author.bot) return;

	color.p(message.content);

	//message.channel.createWebhook(message.author.username, {avatar: message.author.avatarURL()}).then(webhook => {
	/*message.channel.createWebhook(message.author.username, {avatar: message.author.avatarURL()}).then(webhook => {
		webhook.send(message.content).then(() => {

			webhook.delete();

		}).catch();
	}).catch();*/








	//commands:


	if (talkToGPT.content(client, message, command, args)) {
		return;
	}

	//prefixed commands only
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	color.r("----------------------------------------------------------------");
	console.log();

});

client.login(talkToToken);
