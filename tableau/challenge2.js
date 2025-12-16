const prompt = require("prompt-sync")();

let Myarray = [];
let somme = 0;
let moyenne = 0;

for (let i = 0; i < 10; i++) {
// Boucle for: ghadi tkhdem 10 fois (mn 0 ḥta 9), bach n-répéter code 10 mrat
  let N = Number(prompt("Entrer 10 nombre entier :"));
  Myarray.push(N);
  // Kan-ajoutiw nombre li dkhal l-user f array 
  somme +=  Myarray[i];
  // Hadi shortcut dyal: somme = somme + Myarray[i]
  // Kan-ziidou valeur jdida l somme
  moyenne = somme / 10;
  // Moyenne = somme total ÷ nombre d'éléments
}
console.log("la somme :", somme);
console.log("la moyenne :", moyenne);
