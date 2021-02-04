const Discord = require('discord.js');
const { prefix, token } = require('../config.json');

const monitorChannel = "797494643431702549";
const nagChannel = "797601662523932673";

const content = function(message, client) {
	function occasionalAnnoy(user, output, frequency, location) {
		let willNotSend = Math.floor(Math.random() * frequency);

		if (message.author.id == user) {
			let oddsOfSending = frequency;

			if (!willNotSend) {
				let messageNum = Math.floor(Math.random() * output.length);
				if (location.toLowerCase() === "dm") {
					message.author.send(output[messageNum]);
					//client.channels.cache.get(nagChannel).send(output[messageNum] + " <@" + user + ">");


				} else {
					client.channels.cache.get(nagChannel).send(output[messageNum] + " <@" + user + ">");
				}
			}
		}
	}


	const hashemArray = [ "Time to take the prop logic test!",
											"TAKE. THE. PROP. LOGIC. TEST.",
											"Why haven't you taken the prop logic test?",
											"Did you know this server has a prop logic test?",
											"Hashem is the type of man who needs to take the prop logic test already.",
											"You are NOT ALLOWED to turn 18 until you take the prop logic test.",
											"Wanna see something cool? Go to #bots and type !pl q.",
											"Taking the prop logic test has been shown to increase IQ by over 19 points.",
											"Dude, do the thing already.",
											"I'm giving you ONE chance to take the prop logic test.",
											"(Prop logic test)."];

	const jamesArray = ["Stop wasting time.",
										"Get off discord.",
										"You're wasting time again.",
										"Why are you here? Go do stuff.",
										"\"@whyZaya would you mind doing a thing similar to reminding hashem to take the pl quiz but instead it tells me to stop wasting my time?\"",
										"\"Hi, my name is James, and I'm about to get off discord and go do important stuff.\"",
										"Leave.",
										"Guess what time it is? Time to go do something else.",
										"JAMES. GET OFF DISCORD. NOW. OR ELSE."];

	const myArray = ["Stop wasting time.",
										"Get off discord.",
										"You're wasting time again.",
										"Why are you here? Go do stuff.",
										"\"Hi, my name is Gabe, and I'm about to get off discord and go do important stuff.\"",
										"Leave.",
										"Guess what time it is? Time to go do something else.",
										"GABE. GET OFF DISCORD. NOW. OR ELSE."];

	//occasionalAnnoy("484373389692108801", hashemArray, 5, "chat"); //Targets Hashem
	occasionalAnnoy("224703409515790336", myArray, 100, "server"); //Targets me
	//occasionalAnnoy("494277308748660773", jamesArray, 5, "chat"); //Targets James



}

module.exports = {content}
