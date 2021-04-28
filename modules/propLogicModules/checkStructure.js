//const Discord = require('discord.js');
const color = require("../color.js");

color.y("Begun.")
let syllogism = "P && Q \n R.S \n S <-> T \n T ⇒ ~ U \n U | V \n ∴ V"
syllogism = [ 'P∧Q', 'R∧S', 'S⇔T', 'T⇒¬U', 'U∨V', '∴V' ];
syllogism = [ '(PPP∧Q)', 'Ran∧S', '(S⇔T)', '(T⇒¬U)⇒¬U', 'U∨V', '¬V' ];
syllogism = [ '(PPP∧Q)', 'Ran∧S', '(S⇔T)', '(P∧(P∧((T⇒¬U)⇒¬U)∧(P∧P)))', 'U∨V', '¬V' ];


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
            let beforeCollapse = afterCollapse.slice();
            color.b(afterCollapse);

            let newAfterCollapse = afterCollapse.map(proposition => {
                proposition = proposition.split("(P∧P)").join("P")
                                            .split("(P)").join("P");
                
                color.b(afterCollapse);
                color.r(proposition);
                
            });
            afterCollapse = newAfterCollapse.slice();
            color.b(afterCollapse);

            afterCollapse = afterCollapse.filter(proposition => {
                
                return  (proposition !== "") &&
                        (proposition !== "P") && 
                        (proposition !== "(P)") && 
                        (proposition !== "P∧P") && 
                        (proposition !== "(P∧P)");

            });
            color.g(afterCollapse);

            i++;
            color.y(beforeCollapse);

            color.w(afterCollapse);

        } while (!(beforeCollapse === afterCollapse) && i<5);
        //} while (i<5);
        


        color.w(afterCollapse);

    }
    checkStructure(syllogism);
}
content(syllogism);
module.exports = {content}
