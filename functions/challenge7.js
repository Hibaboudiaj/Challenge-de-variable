const prompt = require("prompt-sync")();
let Myarray = [];
let resultat = 1;

for (let i = 0; i < 4; i++) {
  let N = Number(prompt("Entrer un nombre : "));
  Myarray.push(N);
}
function multiplication(arr) {
  for (let index = 0; index < arr.length; index++) {
    resultat *= arr[index];
  }
  return resultat;
}
console.log(multiplication(Myarray));
