const Discord = require('discord.js');
const { prefix, token, nickname } = require('../config.json');
const py = require('python-shell');
let client = new Discord.Client();

const color = require("./color.js");
const chalk = require("chalk");
chalk.red("Hello!");

let myID = "224703409515790336";



function launchPython() {
	return new Promise(fulfill => {
		let options = {
			args: ['--top-k 40', '--temperature 0.8', '--model_name general', '--length 40'], //added length
			scriptPath: './gpt-2-finetuning/src',
			mode: 'text',
			pythonOptions: ['-u'],
			pythonPath: "Python3.7"
		};
		let pyshell = new py.PythonShell('interactive_conditional_samples.py', options);
		pyshell.on('message', function (message) {
			console.log("Python >>> " + message);
			if (message.includes("$:ready")) {
				console.log("Model prompted normally!");
				fulfill(pyshell);
			}
			if (message.includes("$:prompt:")) {
				handlePythonResponse(message);
			}
		});
		pyshell.on('stderr', function (error) {
			console.log(error);
		});
 });
}
let shell;
launchPython().then((value) => {
	shell = value;
});//What the heck do I do with this?





//You need an activePythonRequest global variable.
let activePythonRequest = 0;
let pythonRequests = [];
function sendPythonRequest(input, channel = null, message = null) {
	let newRequest = {input: input, channel: channel, message: message};
	let id = pythonRequests.length;
	pythonRequests.push(newRequest);
	if (!activePythonRequest) {
		try {
			activePythonRequest = true;
			shell.send(id + "$:input:" + input);
		} catch (e) {
			activePythonRequest = false;
			console.log(e);
		}
	}
}






function handlePythonResponse(message) {
	activePythonRequest = false;
	let id = message.split("$:prompt:")[0];
	let result = message.split("$:prompt:")[1];
	let request = pythonRequests[id];
	let decoded = decodeChannel(result);
	sendHooks(request.channel, decoded);
	if (id < (pythonRequests.length - 1)) {
		let newID = parseInt(id) + 1;
		let request = pythonRequests[newID];
		try {
			shell.send(newID + "$:input:" + request.input);
		activePythonRequest = true;
		} catch (e) {
				console.log("Couldn't process next request: " + e);
		}
	}
}





function decodeChannel(data) {
	color.y("data: " + data);//debug ------------
	let decoded = [];
	let entries = data.split("<|endoftext|>");
	color.y("entries (" + entries.length + "): " + entries);//debug ------------
	for (let entry of entries) {
		try {
			entry = entry.trim();
			let points = entry.split("$:");
			console.log("points(" + points.length + "): " + points);//debug ------------

			if (points.length > 1) {

				let header = points[1].trim();
				let content = points[2].trim();
				color.y("content: " + content);//debug ------------

				if (/^START \d+ \d+$/.test(header)) {
					color.y("RegEx has been evaluated as true");
					let user = header.split(" ")[2];
					color.y("user: " + user);//debug ------------
					decoded.push({author: user, content: content});
					color.y("decoded (before the else): " + decoded);//debug ------------

				}

			} else { //I added this to handle the untrained network.
				color.y("points wasn't greater than 1");

				decoded.push({author: myID, content: points});
				color.y("decoded (inside the else): " + JSON.stringify(decoded));//debug ------------

			}
		} catch (e) {
		}
	}
	color.y("decoded:");

	color.y(decoded);
	return decoded;
}




//const webhook = new Discord.WebhookClient(id, token)
const webhookID = "796929479002816532";
const webhookToken = "m9vn406B-sJ5T7DeQAdL6vzD7CDrHIZTiaqKlB4wLMmvLrpVkIqAlbRW9t9_CNaheEvy";
const webhook = new Discord.WebhookClient(webhookID, webhookToken);
//https://discord.com/api/webhooks/796929479002816532/m9vn406B-sJ5T7DeQAdL6vzD7CDrHIZTiaqKlB4wLMmvLrpVkIqAlbRW9t9_CNaheEvy

function sendHooks(channelID, messages) {
	let channel = client.channels.cache.get(channelID); //edited and added cache
	let delay = 0;
	let hook = webhook;

	color.b("messages.length: " + messages.length);

	for (let message of messages) {

		let text = message.content;
		let userID = message.author;
		let name = "Unknown User";
		let avatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png";
		try {
				name = channel.guild.members.get(userID).displayName;
				avatar = client.users.get(userID).displayAvatarURL;
		} catch (e) {
		}

		color.b("Webhook should run soon. Output is: ");
		color.b(text);

		setTimeout(() => {
			color.p(channelID);
			color.p(typeof channelID);
			color.p(channel);
			color.p(channel.name);
			color.p(message.author.username);

			//channel.createWebhook(message.author.username, {avatar: message.author.avatarURL()}).then(webhook => {
			channel.createWebhook("botZaya", {
					avatar: client.user.displayAvatarURL()
				})
				.then(webhook => {
				webhook.send(text).then(() => {
					color.b("Webhook has run. Output is: " + text);

					webhook.delete();

				}).catch(() => {
					color.r("Webhook didn't send.");
					webhook.delete();
				});
			}).catch(() => {
				color.r("Webhook wasn't created. The text was:");
				color.r(text);
			});


			/*
			hook.send(text, {username: name, avatarURL: avatar}).catch(err => {
				console.log("Couldn't send: " + message.content);
				console.log(err);
			});*/
		}, delay);
		delay += (Math.random() * 2000);

	}
	/*setTimeout(() => {
		color.p(channelID);
		color.p(typeof channelID);
		color.p(channel);
		color.p(channel.name);

		channel.createWebhook(message.author.username, {avatar: message.author.avatarURL()}).then(webhook => {
			webhook.send(text).then(() => {

				webhook.delete();

			}).catch();
		}).catch();


		/*
		hook.send(text, {username: name, avatarURL: avatar}).catch(err => {
			console.log("Couldn't send: " + message.content);
			console.log(err);
		});*/
	/*}, delay);
	delay += (Math.random() * 2000);*/

}



const content = function(mainClient, message, command, args) {
	console.log("Command run.");
	client = mainClient;


	if ((message.channel.id === "793934156110364692") ||
			(command === "talkToZaya")) {
		console.log("talkToZaya command has run.");
		let input = message.content;
		let id = message.id;
		sendPythonRequest(input.replace(/\$:/g, ":") + " $: END " + id + " <|endoftext|>", message.channel.id, message);

		/*message.channel.fetchMessages({limit: 10}).then(result => {
			let encoded = encodeChannel(result.array());
			sendPythonRequest(encoded.replace(/\n/g, " "), message.channel.id, message);
		});*/

		return true;
	} else return false;

}

module.exports = {content}
