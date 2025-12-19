const prompt = require("prompt-sync")();
let myarray = [];
let N = Number(prompt("Entrer un nombre : "));

function tableMultiplication(N) {
  for (let i = 1; i <= 10; i++){
    myarray.push(i * N);
  }   
}
tableMultiplication(N);
console.log(myarray);
