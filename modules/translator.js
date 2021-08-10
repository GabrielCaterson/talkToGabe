const Discord = require('discord.js');
const { prefix, token } = require('../config.json');
const color = require("./color.js");

const reverseObject = function(oldObject) {
    let newObject = {};

    for (let key in oldObject) {
        newObject[oldObject[key]] = key;
    }
    return newObject;
}

let cypherKey = {
    "a": " Honk",
    "b": " *Honk*",
    "c": " **Honk**",
    "d": " ***Honk***",
    "e": " Snort",
    "f": " *Snort*",
    "g": " **Snort**",
    "h": " ***Snort***",
    "i": " Beep",
    "j": " *Beep*",
    "k": " **Beep**",
    "l": " ***Beep***",
    "m": " Boop",
    "n": " *Boop*",
    "o": " **Boop**",
    "p": " ***Boop***",
    "q": " Damn",
    "r": " *Damn*",
    "s": " **Damn**",
    "t": " ***Damn***",
    "u": " Man",
    "v": " *Man*",
    "w": " **Man**",
    "x": " ***Man***",
    "y": " Why",
    "z": " *Why*"
}

let reverseCypherKey = reverseObject(cypherKey);

const clean = function(string) {
    let returnString = string.toLowerCase().split("1").join("one")
                                        .split("2").join("two")
                                        .split("3").join("three")
                                        .split("4").join("four")
                                        .split("5").join("five")
                                        .split("6").join("six")
                                        .split("7").join("seven")
                                        .split("8").join("eight")
                                        .split("9").join("nine")
                                        .split("0").join("zero");
                                        //.replace(/[^A-Za-z .,!\n]/g, '');
    return returnString;
}

const content = function(message, command, args, combinedArgs) {
	if ((command === "translate" || command === "trans") && message.guild==null) {

        //let translated = combinedArgs.toLowerCase();

        let cleanedString = clean(combinedArgs);

        let translated = "";
        for (const character of cleanedString) {
            translated += cypherKey[character.toLowerCase()] || character;

            //translated.split(key.toLowerCase()).join(cypherKey[key]);
        }

        

        message.channel.send(translated);
        message.channel.send("`" + translated + "`");

		return true;
	} else if (((command === "untranslate" || command === "untrans") && message.guild==null)) {
        
        //let translated = " " + clean(combinedArgs);
        let translated = message.content.slice(prefix.length)
                                        .slice(command.length)
                                        .toLowerCase();
        let reverseKeys = Object.keys(reverseCypherKey).reverse();
        //color.y(translated);

        translated = translated.split("  ").join("_space_finder_")
                                .split(" ").join("_merge_preventer_");

        reverseKeys.forEach( key => {
            //color.y(key);
            //color.b(reverseCypherKey[key]);
            translated = translated.split(key.toLowerCase().trim()).join(reverseCypherKey[key]);
            //color.p(translated);
        });
        translated = translated.split("_space_finder_").join(" ")
                                .split("_merge_preventer_").join(" ");



        message.channel.send(translated);
    } else return false;
}

module.exports = {content}