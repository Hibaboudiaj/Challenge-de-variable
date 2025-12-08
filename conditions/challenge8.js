const prompt = require("prompt-sync")();
let  Feu_tricolore = prompt(" Entrer le Feu tricolore :") 
switch ( Feu_tricolore ){
case "rouge":
console.log("Arrêt");
break;
case "jaune":
console.log("Préparez-vous");
break;case "vert":
console.log("Allez");
break;
default:
console.log("Invalid Feu tricolore");
}