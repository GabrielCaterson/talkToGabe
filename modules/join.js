const Discord = require('discord.js');
const { prefix, token } = require('../config.json');
const contradiction = require("./contradiction.js");
const isNumber = require("./isNumber.js");


const content = function(message, command, args) {
    let connection;
	if (command === "join"      ||
        command === "squadup"   ||
        command === "rollup"    ||
        command === "hopin"     ||
        command === "soph"
        ) {

		if (message.member.voice.channel) {
            connection = message.member.voice.channel.join();
            let joinMessages = ["I'm in the VC now. Sing me your sweet songs.",
                                "I'm sure you're all wondering why I've gathered you here...",
                                "I'm joining VC. Quick, everyone pretend you weren't just talking about me, or pretend you weren't all just sitting there in silence so I don't think you were talking about me.",
                                "I'm HERE!!!!!!!!", 
                                "Okay, I'll join VC I guess, but you better actually have something interesting to say this time.",
                                "Beep boop. I'm in VC.",
                                "Eww. No."];
            message.channel.send(joinMessages[Math.floor(Math.random() * joinMessages.length)]);

        } else {
            message.channel.send("You aren't in a VC, silly! Join one to use this useless command!!!");
        }
		return true;
	} else if ( command === "leave"         ||  
                command === "getout"        ||  
                command === "dip"           ||  
                command === "disconnect"    ||
                command === "dc"
        ) {

        if (message.member.voice.channel) {
            //connection.disconnect();
            message.member.voice.channel.leave();
            let leaveMessages = ["Okay, bye.", 
                                "Bye then.",
                                "Wait, I can change!!! Don't leave me!!!",
                                "k bye",
                                "I'll be back!!!",
                                "lol ok :("];
            message.channel.send(leaveMessages[Math.floor(Math.random() * leaveMessages.length)]);

        } else {
            message.channel.send("How can I leave a VC I'm not in?");
        }
        return true;
    } else return false;
}

module.exports = {content}