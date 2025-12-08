const prompt = require("prompt-sync")();
let Anee = Number(prompt("veuillez saisir lannée : "));
if (Anee % 4 === 0 && Anee % 100 !== 0) {
  console.log(Anee + " Cette année est bissextile");
} else if (Anee % 400 === 0) {
  console.log(Anee + " Cette année est bissextile");
} else {
  console.log(Anee + " Cette année non bissextile");
}
