const prompt = require("prompt-sync")();
let Myarray = [];

for (i = 0; i < 5; i++) {
  let N = Number(prompt("Entrer un nombre : "));
  Myarray.push(N);
}

function minTableau(Myarray) {
  let min = Math.min(...Myarray);
// ...Myaraay (Spread operator) smitha "spread operator" kayfk array kayraj3 kol element bohdo 
  return `Le min nombre dans le tableau est : ${min}`;
}
console.log(minTableau(Myarray));