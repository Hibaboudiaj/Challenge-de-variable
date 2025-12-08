const prompt = require("prompt-sync")();
let A = Number(prompt("Entrer votre âge : "));
if (A >= 18) {
    console.log( " Éligibldeux e au vote ");
}
else {
    console.log( " Non éligible" );
}
