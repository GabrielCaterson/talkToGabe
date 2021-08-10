//∧∨⊻⇒⇔∴¬
//⊥∃∀□◇⊤

const Discord = require('discord.js');
const color = require("../color.js");
const vulcan = require("vulcan");



function cleanSyllogism(syllogism) {
    syllogism = syllogism   .split("&&").join("&")
                            .split("&").join("&")
                            .split(".").join("&")
                            .split("∧").join("&")

                            .split("||").join("|")
                            .split("|").join("|")
                            .split("+").join("|")
                            .split("∨").join("|")
                            
                            .split("⊕").join("<->!")//this is xor (⊻)
                            .split("≢").join("<->!")
                            .split("⊻").join("<->!")

                            .split("<->").join("<->")
                            .split("<=>").join("<->")
                            .split("≡").join("<->")
                            .split("↔").join("<->")
                            .split("<>").join("<->")
                            .split("⇔").join("<->")

                            .split("=>").join("->")
                            .split("->").join("->")
                            .split(">").join("->")
                            .split("→").join("->")
                            .split("⊃").join("->")
                            .split("⇒").join("->")


                            .split("!").join("!")
                            .split("~").join("!")
                            .split("¬").join("!")

                            .split("%").join("")
                            .split("∴").join("")


                            .split("<-->").join("<->")
                            ;

    syllogism = syllogism.split(" ").join("").split("*{splitter}");
    syllogism[0].length === 0 ? syllogism.shift(): 0;

    syllogism = syllogism.filter(function(proposition) { 
        return proposition !== "";
    });

    return syllogism;
}




color.y("vulcanPropLogic.js");
const check = function(syllogism, message) {
    color.G("syllogism (in vulcanPropLogic):")
    color.g(syllogism);

    syllogism = cleanSyllogism(syllogism);
    color.P("syllogism (after being cleaned in vulcanPropLogic)");
    color.p(syllogism);


    let vulcanSyllogism = syllogism.slice();
    vulcanSyllogism = [vulcanSyllogism, vulcanSyllogism.pop()];

    color.B("vulcanSyllogism (split):");
    color.b(vulcanSyllogism[0]);
    color.b(vulcanSyllogism[1]);

    /*const testProof = vulcan.prove(["A -> B", // the knowledgebase
                                    "B <-> C", 
                                    "C & D",
                                    "D | E"],
                                    "B -> !D"); // the query*/
    //color.Y("Before test proof");
    /*const testProof2 = vulcan.prove(["!A|B",
                                        "((C|D)&(D|E))->F|G",
                                        "(H->I)<->(J&K)"],
                                    "H|I"); // the query
    color.Y("Test proof:");
    color.y(vulcan.isProofComplete(testProof2));*/
    
    //const proveSyllogism = vulcan.prove(vulcanSyllogism[0], vulcanSyllogism[1]);
    
    let isArgumentValid = vulcan.isProofComplete(vulcan.prove(vulcanSyllogism[0], vulcanSyllogism[1]));


    color.b("isArgumentValid");
    console.log(isArgumentValid);

    //color.b("testProof");

    //console.log(testProof);



    if (isArgumentValid) {
        let validMessages = ["Ayooooooooo that sylly is VALID and doesn't need approval from its parents to be worthy."];
        message.channel.send(validMessages[Math.floor(Math.random() * validMessages.length)]);
    } else {
        message.channel.send("Lol. No. Not even close.");
    }

    return isArgumentValid;
}

//check();

module.exports = {check};
