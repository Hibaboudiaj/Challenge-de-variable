const prompt = require("prompt-sync")();
let C = Number(prompt("veuillez saisir température en Celsius : "));
let f = C * 1.8 + 32;
console.log(" température de Fahrenheit en Celsius est ", f);
