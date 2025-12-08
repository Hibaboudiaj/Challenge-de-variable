const prompt = require("prompt-sync")();
let N = Number(prompt("veuillez saisir un nombre : "));
if (N > 0) {
    console.log( " positif ");
}
else if (N < 0) {
    console.log( " négatif ");
}
else  {
    console.log( " nul ");
}
