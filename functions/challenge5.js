const prompt = require("prompt-sync")();

let myarray = [];

function inverserTable() {
  for (let i = 0; i < 5; i++) {
    let T = prompt("Entrer : ");
    myarray.push(T);
  }
  console.log(myarray.reverse());
  
}
inverserTable()
