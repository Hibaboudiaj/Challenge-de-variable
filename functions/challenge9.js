const prompt = require("prompt-sync")();
let Myarray = [];
let doubles = 1;

for (let i = 0; i < 5; i++) {
  let D = Number(prompt("Entrer un nombre : "));
  Myarray.push(D);
}

function Doubler(arr) {
  return arr.map((a) => a * 2);
}
console.log(Doubler(Myarray));
