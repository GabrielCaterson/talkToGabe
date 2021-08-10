/*Truth trees:
    * Set up branching rules as functions from two categories: 
        * one for non-branching functions that returns the branch result 
        * one for branching functions that returns two sets of branching results

    - Figure out if there are the correct number of parenthesis. If not, throw an error
    - throw an error if there are illegal characters
    * Figure out if each proposition has only two variables or sub propositions by making a copy of the proposition, wrapping in parenthesis, and collapsing at the first closing parenthesis over and over

    - Remove spaces from argument and convert symbols to the correct ones
    - Set up array of propositions to be evaluated and add all propositions
    - Separate propositions from conclusion
    - Add negation of conclusion to list of propositions to be evaluated
    * Set up array of propositional variables that have been proved on the current branch and move all line propositional variables to it
    * Start iterating through propositions
    * For each proposition, find the biggest group that can be described as one of the branching rules
        * Do this by collapsing parenthesis?
        * Make sure to include negation
    * Apply non branching rules using the functions
    * Apply branching rules using the functions
    * Look at each branch. If there’s a contradiction, close the branch. If not, continue if you can (recursion). Otherwise, move to the next branch.
    * If all branches are closed, the syllogism is valid.



    * Negate conclusion ✅ 
    * Apply non-branching rules
    * Apply branching rules
    * If you hit a contradiction, move to a new branch
    * If there are no more branches, the syllogism is valid




Extra

    * Give counterexamples if invalid
    * Tell if vacuously valid
    * Test the propositions without the conclusion
    * If the branches all lead to contradictions, it’s vacuously valid



//∧∨⊻⇒⇔∴¬
//⊥∃∀□◇⊤
*/


const Discord = require('discord.js');
const { prefix, token } = require('../config.json');
const color = require("./color.js");
const checkStructure = require("./propLogicModules/checkStructure.js");
const vulcanPropLogic = require("./propLogicModules/vulcanPropLogic.js");




const content = function(message, command, args, combinedArgs) {
    //color.y("checking (outside command) -- " + command);
    //color.y(command);
	if (/*command === "check" ||*/ command === "wcheck" || command === "wc") {

        color.w("checking...");
        

        //Convert syllogism to an array with each proposition as an element.
        
        let syllogism = combinedArgs.slice(0);
        color.P("syllogism:")
        color.p(syllogism);
        console.log(syllogism);
        color.B("combinedArgs: ")
        color.b(combinedArgs);
        color.Y("args:")
        color.y(args);
        function cleanSyllogism(syllogism) {
            syllogism = syllogism   .split("&&").join("∧")
                                    .split("&").join("∧")
                                    .split(".").join("∧")

                                    .split("||").join("∨")
                                    .split("|").join("∨")
                                    .split("+").join("∨")
                                    
                                    .split("⊕").join("⊻")
                                    .split("≢").join("⊻")

                                    .split("<->").join("⇔")
                                    .split("<=>").join("⇔")
                                    .split("≡").join("⇔")
                                    .split("↔").join("⇔")
                                    .split("<>").join("⇔")

                                    .split("=>").join("⇒")
                                    .split("->").join("⇒")
                                    .split(">").join("⇒")
                                    .split("→").join("⇒")
                                    .split("⊃").join("⇒")

                                    .split("!").join("¬")
                                    .split("~").join("¬")

                                    .split("%").join("∴")
                                    ;
            color.Y("syllogism (during cleaning):");
            color.y(syllogism);
            syllogism = syllogism.split(" ").join("").split("\n");
            syllogism[0].length === 0 ? syllogism.shift(): 0;

            syllogism = syllogism.filter(function(proposition) { 
                return proposition !== "";
            });

            return syllogism;
        }
        color.Y("syllogism (before cleaning): ");
        color.y(syllogism)
        syllogism = cleanSyllogism(syllogism);
        color.P("syllogism (after being cleaned):");
        color.p(syllogism);
        
        
        
        if (/[^A-Za-z()∧∨⊻⇒⇔∴¬]/.test(syllogism.join(""))) {
            message.channel.send("You used an illegal character.");
            return true;
        }



    
        if (checkStructure.content(syllogism)) {
            color.r("Bad structure.");
            message.channel.send("Please fix your argument structure.");

            return true;
        } else {
            color.y("Good structure.");

        }

        
            



        color.y("syllogism:")
        color.y(syllogism);
        //color.y("treeSyllogism:")
        //color.y(treeSyllogism);
        color.b(syllogism[syllogism.length - 1]);

        let treeSyllogism = syllogism.slice();
        treeSyllogism[treeSyllogism.length - 1] = "¬" + treeSyllogism[treeSyllogism.length - 1].split("∴").join("");
        
        /*let vulcanSyllogism = syllogism.slice();
        //let vulcanConclusion = vulcanSyllogism
        //vulcanSyllogism = [[vulcanSyllogism.splice(vulcanSyllogism.length -1)], 
        //vulcanSyllogism[vulcanSyllogism.length - 1] =  treeSyllogism[treeSyllogism.length - 1].split("∴").join("");
        vulcanSyllogism = [vulcanSyllogism, vulcanSyllogism.pop()];
        color.B("vulcanSyllogism:");
        color.b(vulcanSyllogism);*/
        color.P("syllogism (in):");
        color.p(syllogism);

        
        //const proof = vulcan.prove(vulcanSyllogism);
        vulcanPropLogic.check(syllogism.join("*{splitter}"), message);

        


        

        function branch(var1, var2, branchRule) {

            switch (branchRule) {
                case "disjunction":
                    message.channel.send("disjunction: \n branch 0: " + var1 + ", " + var2);
                    return ({
                                branch0: [var1, var2], 
                                branch1: [],
                                isBranching: 0
                            });
                case "negatedDisjunction":
                    message.channel.send("negated disjunction: \n branch 0: ¬" + var1 + " \n branch 1: ¬" + var2);

                    return ({
                                branch0: ["¬" + var1], 
                                branch1: ["¬" + var2],
                                isBranching: 1
                            });
                default:
                    color.y("nonexistent branching rule");

            }
        }

        //color.w(branch(args[0], args[1], args[2]));

        const doesItBranch = {
            conjunction: 0,
            negatedConjunction: 1,
            disjunction: 1,
            negatedDisjunction: 0,
            implication: 1,
            negatedImplication: 0,
            biconditional: 1,
            negatedBiconditional: 1,
            doubleNegation: 0
        }







		
		return true;
	} else return false;
}

module.exports = {content}
