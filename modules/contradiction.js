const Discord = require('discord.js');
const { prefix, token } = require('../config.json');

const subjectNoun = [ "the universe",
											"the ocean",
											"your head",
											"Abraham Lincoln's mom",
											"Hitler",
											"the Illuminati",
											"every single potato on earth",
											"Tigger",
											"your mom",
											"your left shoe",
											"(insert political party you don't like)",
											"SpongeBob SquarePants",
											"my source code",
											"your best day ever",
											"the Stanford Encyclopedia of Philosophy",
											"a bowl of spaghetti",
											"Kanye West",
											"God",

											//b-11/AY memes
											"the number that comes after 19",
											"diet Mountain Dew",
											"puppychowism",
											"tewy",
											"discord light theme",
											"wutang",
											"a soundness checking bot",
											"backup-11",
											"the AY server",
											"the dialectical discourse",
											"Footsoldier's hat stack",
											"Set Theory, Logic and their Limitations",
											"a weak little man who can't put down a cheeseburger",
											"dialetheism",
											"truth scroll 4"
										];
const linkingVerb = [ "is made of",
											"looks like",
											"tastes like",
											"is full of",
											"contains",
											"is the exact same thing as",
											"is the opposite of",
											"is maybe possibly sort of completely the same as the opposite of the equivalent of what does not equate to the p-zombie possible world version of",
											"automatically generates",
											"feels like",
											"is roughly analogous to",
											"equates to",
											"entails"/**,
											"is materially implied by",
											"is materially equivalent to",
											"is biconditionally equivalent to"*/
										];
const predicateNoun = [	"toads",
											"school",
											"crippling depression",
											"small brain moves",
											"guacamole",
											"one hundred trillion miniature nuclear warheads",
											"a Nigerian prince who needs your help transferring money overseas after the military coup killed his family and he just barely escaped with his life, but is now being hounded by international banking cartels who are keeping his secret girlfried hostage until he hands over all of his money, but he doesn't care about his girlfriend. He just wants that money, so he's asking you to transfer it by paying a $1000 transfer fee, and then when he reaches the united states, he'll give you half of his $8.7 million fortune as payment",
											"a perpetual motion machine",
											"bad vibes and negative energy",
											"moral realism",
											"transitivity",
											"jello",
											"square circles",
											"the set of every possible syllogism from every possible system of formal logic",
											"a contradiction",
											"a sound argument",
											"a justified true belief",

											//b-11/AY memes
											"the argument for P4",
											"a false dichotomy",
											"pragma",
											"a James alt",
											"a spaz alt",
											"a Mist alt",
											"a Bryn alt",
											"Wittgensteinian family resemblance",
											"a brick",
											"a banana with ketchup, chickpeas, and stale rice (eaten with a fork) 😋",
											"Pogan getting tipsy",
											"how you feel when you get banned from AY for the very first time",
											"your face when you're getting 6 stepped by Avi",
											"infinity",
											"∃S ∈ $w such that ∅ 6= S ∩ [φ] ⊆ [ψ] and ∃T ∈ $w such that ∅ 6= T ∩ [ψ] ⊆ [φ], then ∃Z ∈ $w such that ∅ 6= Z ∩ [φ] = Z ∩ [ψ]. Suppose the antecedent and the negation of the consequent. Then ∅ 6= C ∩ [φ] ⊆ [ψ] and ∅ 6= D ∩ [ψ] ⊆ [φ]. ∀Z ∈ $w(Z ∩ [φ] 6= Z ∩ [ψ] ∨ ∅ = Z ∩ [φ]) and ∅ 6= C ∩ [φ] imply C ∩ [φ] 6= C ∩ [ψ]. Since ∅ 6= D ∩ [ψ] ⊆ [φ] implies ∅ 6= D ∩ [φ], by the same reasoning as above we get D ∩ [φ] 6= D ∩ [ψ]. If x ∈ C ∩ [φ] and x /∈ C ∩ [ψ], x ∈ C ∩ [φ] ⊆ [ψ] implies x ∈ C ∩ [ψ] which is impossible; so x /∈ C ∩ [φ] and x ∈ C ∩ [ψ]. Parallel reasoning shows that there is a y such that y ∈ D∩[φ] and y /∈ D∩[ψ]. By nesting, either C ⊆ D or D ⊂ C. If C ⊆ D, then x ∈ D ∩ [ψ] ⊆ [φ] implies x ∈ C ∩ [φ] which is impossible. But if D ⊂ C, then y ∈ C ∩ [φ] ⊆ [ψ] implies y ∈ D ∩ [ψ] which is impossible. This proves the lemma. Now consider an arbitrary world w ∈ N of an arbitrary model such that (φ  ψ)ρw1 and (ψ  φ)ρw1. By the lemma, ∃Z ∈ $w such that ∅ 6= Z ∩ [φ] = Z ∩ [ψ]. Then it is clear that Z ∩ [φ] ⊆ [χ] if and only if Z ∩ [ψ] ⊆ [χ]. Thus, in no logically accessible world can your contradiction be successfully established in a dialectical sense",
											"wendy's mustard",
											"two hamburgers and a chicken sandwich that are going to be thrown away (or given to someone else)",
											"a grandmother",
											"a notorious sophist",
											"the google doc"

										];


const content = function(message, command, args) {
	if(command === "contradiction") {
		const proposition = args.join(" ");
		const subjectNounChance = Math.floor(Math.random() * subjectNoun.length);
		const linkingVerbChance = Math.floor(Math.random() * linkingVerb.length);
		const predicateNounChance = Math.floor(Math.random() * predicateNoun.length);

		if (proposition.includes("@")) {
			message.channel.send("CONTRADICTION!!! You are asserting that it is the case that you're a sophist and a glitch abuser, and it is not the case that you're a sophist and a glitch abuser. Therefore, by the principle of explosion, it must be the case that " + subjectNoun[subjectNounChance] + " " + linkingVerb[linkingVerbChance] + " " + predicateNoun[predicateNounChance] + ".");
			return true;
		}
		if (args.length) {
			
			message.channel.send("CONTRADICTION!!! You are asserting that it is the case that " + proposition + ", and it is not the case that " + proposition + ". Therefore, by the principle of explosion, it must be the case that " + subjectNoun[subjectNounChance] + " " + linkingVerb[linkingVerbChance] + " " + predicateNoun[predicateNounChance] + ".");

		} else {
			
			message.channel.send("CONTRADICTION!!! You are asserting that it is the case that P, and it is not the case that P. Therefore, by the principle of explosion, it must be the case that " + subjectNoun[subjectNounChance] + " " + linkingVerb[linkingVerbChance] + " " + predicateNoun[predicateNounChance] + ".");
		}
		return true;

	} else return false;
}

module.exports = {content}
