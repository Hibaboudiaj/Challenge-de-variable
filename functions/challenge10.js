const prompt = require("prompt-sync")();
let arr1 = ["dog" , "elephent" , "lion"];
let arr2 = ["snack" , "fox" , "panda"];

function fusionner() {
return arr1.concat(arr2)
}
console.log(fusionner());

// console.log("Veullier remplir le premier table");

// for (i = 0; i < 5; i++) {
//   let N = Number(prompt("entrer un nombre : "));
//   arr1.push(N);
// }
// console.log("Veullier remplir le deuxieme table");

// for (j = 0; j < 5; j++) {
//   let Nbr = Number(prompt("Entrer un nombre : "));
//   arr2.push(Nbr);
// }