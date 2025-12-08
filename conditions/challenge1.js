const prompt = require("prompt-sync")();
let N = Number(prompt("veuillez saisir un nombre : "));
if (N % 2 == 0) {
  console.log(" pair ");
} 
else {
  console.log(" impair ");
}
// EX
// const num = 5;
// const num2 = "5";
// console.log(num2 == num);
// console.log(num2 === num);
