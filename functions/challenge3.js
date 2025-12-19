const prompt = require("prompt-sync")();
let Myarray = [];

for (i = 0; i < 5; i++) {
  let N = Number(prompt("Entrer un nombre : "));
  Myarray.push(N);
}

function maxTableau(Myarray) {
  let max = Math.max(...Myarray);
// ...Myaraay (Spread operator) smitha "spread operator" kayfk array kayraj3 kol element bohdo 
  return `Le max nombre dans le tableau est : ${max}`;
}
console.log(maxTableau(Myarray));