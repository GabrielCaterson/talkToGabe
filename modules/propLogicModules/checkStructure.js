//const Discord = require('discord.js');
const color = require("../color.js");

let syllogism1 = "P && Q \n R.S \n S <-> T \n T ⇒ ~ U \n U | V \n ∴ V"
syllogism1 = [ 'P∧Q', 'R∧S', 'S⇔T', 'T⇒¬U', 'U∨V', '∴V' ];
syllogism1 = [ '(PPP∧Q)', 'Ran∧S', '(S⇔T)', '(T⇒¬U)⇒¬U', 'U∨V', '¬V' ];
syllogism1 = [ '(PPP∧Q)', 'Ran∧S', '(S⇔T)', '(P∧(P∧((T⇒¬U)⇒¬U)∧(P∧P)))', 'U∨V', '¬V' ];//bad
let syllogism2 = [ '(PPP∧Q)', 'Ran∧S', '(S⇔T)', '(P∧((P∧((T⇒¬U)⇒¬U))∧(P∧P)))', 'U∨V', '¬V' ];//good
let syllogism3 = [ '(PPP∧Q)', 'Ran∧S', '(S⇔T)⇔P⇔P⇔P⇔P', '(P∧(P∧((T⇒¬U)⇒¬U)∧(P∧P)))', 'U∨V', '¬V' ];//bad
let syllogism4 = [ '(PPP∧Q)', 'Ran∧S', '(S⇔⇔⇔T)', '(P∧((P∧((T⇒¬U)⇒¬U))∧(P∧P)))', 'U∨V', '¬V' ];//bad
let syllogism5 = [ '(PPP∧Q)', 'Ran∧S', '(S⇔T(S⇔T))', '(P∧((P∧((T⇒¬U)⇒¬U))∧(P∧P)))', 'U∨V', '¬V' ];//good


//∧∨⊻⇒⇔∴¬
const content = function(syllogism) {

    function checkStructure(syllogism) {
        checkedSyllogism = syllogism.slice();


        for (let i = 0; i < checkedSyllogism.length; i++) {
            let proposition = checkedSyllogism[i];

            proposition = proposition.split("¬").join("");

            //proposition = proposition.split(/(?=∧)/g);

            proposition = proposition   .split("∧").join(".∧.")
                                        .split("∨").join(".∧.")
                                        .split("⊻").join(".∧.")
                                        .split("⇒").join(".∧.")
                                        .split("⇔").join(".∧.")
                                        .split("(").join(".(.")
                                        .split(")").join(".).");
                    
            proposition = proposition.split(".");//.join("");

            //proposition = proposition.split(".").join("");
            proposition = proposition.filter(function(miniString) { 
                return miniString !== "";
            });

            proposition = proposition.map(function(miniString){
                if (/[A-Za-z]/.test(miniString)) {
                    return "P";
                } else {
                    return miniString;
                }
            });
            

            proposition = proposition.join("");
            
            checkedSyllogism[i] = proposition; 
        }

        let beforeCollapse = checkedSyllogism.slice();
        let afterCollapse = checkedSyllogism.slice();
        let i = 0;
        do {
            beforeCollapse = afterCollapse.slice();
            

            let newAfterCollapse = afterCollapse.map(proposition => {
                return proposition.split("(P∧P)").join("P")
                                            .split("(P)").join("P");
                
            });
            afterCollapse = newAfterCollapse.slice();
            

            afterCollapse = afterCollapse.filter(proposition => {
                
                return  (proposition !== "") &&
                        (proposition !== "P") && 
                        (proposition !== "(P)") && 
                        (proposition !== "P∧P") && 
                        (proposition !== "(P∧P)");

            });

            i++;

        } while (!(beforeCollapse.toString() === afterCollapse.toString()) && (i<10000));
        //TODO: make the limit for i longer?
        
        if (afterCollapse.toString());

        color.r("" + afterCollapse.length);
        return afterCollapse.length;

    }
    checkStructure(syllogism);
}
/*
content(syllogism1);
content(syllogism2);
content(syllogism3);
content(syllogism4);
content(syllogism5);
*/

module.exports = {content}
