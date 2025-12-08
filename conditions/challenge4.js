const prompt = require("prompt-sync")();
let A = Number(prompt("veuillez saisir un nombre : "));
let B = Number(prompt("veuillez saisir un nombre : "));
if (A > B ){
    console.log( " le plus grand est : " + A);
}
else {
    console.log( " le plus grand est : " + B);
}