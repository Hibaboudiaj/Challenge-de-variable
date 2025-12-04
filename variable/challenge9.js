const prompt = require("prompt-sync")();
let Km = Number(prompt("veuillez saisir la distance en kilomètres : "));
let M = Km / 1.609;
console.log(" la distance en miles est ", M);

