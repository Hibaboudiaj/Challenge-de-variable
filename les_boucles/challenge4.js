const prompt = require("prompt-sync")();

let N = prompt("entré un nombre: ");

N = N.split("");
N = N.reverse();
N = N.join("");
console.log(N);
