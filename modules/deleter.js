const Discord = require('discord.js');
const { prefix, token, nickname } = require('../config.json');
const isNumber = require("./isNumber.js");
const errorMessage = require("./errorMessage.js");
const color = require("./color.js");
//const botZaya = require("../botZaya.js");


const content = function(message, command, args, embedColor, deleterIsRunning) {
	if ((command === "b") || (command === "d") || (command === "logicboisucks" ) || (command === "logicboigotrektbybruff" )) {


		const emojiList = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];



		/*function removeReactions(counter, originalNum) {
			counter = parseInt(counter);
			//console.log("removeReactions " + counter);
			if (counter === 0) {

				return true;
			}
			console.log("removeReactions --- counter: " + counter);
			console.log("originalNum: " + originalNum);
			let testVar = originalNum + 1;
			console.log("originalNum + 1: " + testVar);
			testVar = originalNum + 1 - counter;
			console.log("originalNum + 1 - counter: " + testVar);
			console.log();

			setTimeout(() => {
				message.reactions.cache.get(emojiList[counter]).remove();
				console.log("removed: " + counter);
				let testVar2 = counter - originalNum;
				console.log("counter - originalNum: " + testVar2);
				console.log();

				if (counter === 0) {
					//message.delete();
				}

			}, 1000 * (originalNum + 1 - counter));

			counter--;
			removeReactions(counter, originalNum);
		}


		function addReactions(counter, originalNum) {
			counter = parseInt(counter);
			if (counter === 0) {
				console.log("hit 0");
				//removeReactions(originalNum, originalNum);

				return true;
			}

			console.log(emojiList[counter] + " Test");
			/*message.react(emojiList[counter]).then(() => {
				counter--;
				console.log(counter);
				addReactions(counter);
			});*/
/*
			setTimeout(() => {
				message.react(emojiList[counter]);
			}, 2 * counter);

			counter--;
			addReactions(counter);
		}*/









		function embedCountDown(counter) {
			counter = parseInt(counter);

			let timerBar = "";
			for (let i = counter; i > 0; i-=2) {
				timerBar += "🗑";
			}

			let prefixAndNumberLength = prefix.length + 1;
			if (isNumber.content(args[0])) {
				prefixAndNumberLength += args[0].length + 1;
			}

			let deleterEmbed = new Discord.MessageEmbed()
				.setColor(embedColor)
				.setTitle(message.content.substring(prefixAndNumberLength))
				.setAuthor("deleting " + message.member.user.tag + "\'s message in " + counter + " seconds")
				.setDescription("**🗑" + timerBar + "**");

			message.channel.send(deleterEmbed).then(sentMessage => {

				function editText () {
					if (timerBar.length > 1) {
						setTimeout(() => {
							timerBar = timerBar.slice(0,-2);
							counter -= 2;

							deleterEmbed = new Discord.MessageEmbed()
								.setColor(embedColor)
								.setTitle(message.content.substring(prefixAndNumberLength))
								.setAuthor("deleting " + message.member.user.tag + "\'s message in " + counter + " seconds")
								.setDescription("**🗑" + timerBar + "**")

							sentMessage.edit(deleterEmbed);
							editText();
						}, 2000);

					} else {
						message.delete();
						sentMessage.delete();
						return true;
					}
				}

				editText();

			}).catch(err => {});

		}


		function countDown(counter) {
			counter = parseInt(counter);
			//addReactions(counter, counter);
			//removeReactions(counter, counter);


			counter = parseInt(counter);
			if (counter === 0) {
				message.delete();
				return true;
			}

			if (counter % 2 === 1) {
				message.react(emojiList[counter]).then(() => {
					setTimeout(() => {
						message.reactions.cache.get(emojiList[counter]).remove();
						counter--;
						countDown(counter);
					}, 1000);
				}).catch(() => {
					return true;
				});
			} else {
				counter--;
				countDown(counter);
			}
			return true;
		}






		if (deleterIsRunning == true) {

			return errorMessage.r(message, "WAIT FOR ME TO FINISH THE LAST ONE. JEEZE.")
				.then(sentMessage => {

				setTimeout(() => {
					sentMessage.delete()
				}, 10000);
				return true; //returns deleterIsRunning as true

			}).catch();

			//return true; //returns deleterIsRunning as true

		} else {

			deleterIsRunning = true;




			if (!isNumber.content(args[0])) {
				embedCountDown(5);

			} else if (parseInt(args[0]) > 120) {
				embedCountDown(120);

			} else if (parseInt(args[0]) === 1) {
				embedCountDown(1);

			} else {
				embedCountDown(args[0]);

			}
			/*
			return () => {
				if (isNumber.content(args[0])) {
					setTimeout( ()=> {
						return false; //returns deleterIsRunning as false

					}, parseInt(args[0]) * 1000);
				} else {
					setTimeout( ()=> {
						return false; //returns deleterIsRunning as false

					}, 5000);
				}
			}*/

		}


	} //else return false;

}

module.exports = {content}
