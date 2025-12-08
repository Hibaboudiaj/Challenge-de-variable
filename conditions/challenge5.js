const prompt = require("prompt-sync")();
let S = Number(prompt("veuillez saisir le score : "));
if (S >= 90 && S <= 100) {
  console.log(" le score est : A ");
} else if (80 <= S && S <= 89) {
  console.log(" le score est : B ");
} else if (70 <= S && S <= 79) {
  console.log(" le score est : C ");
} else if (60 <= S && S <= 69) {
  console.log(" le score est : D ");
} else if (60 > S) {
  console.log(" le score est : F ");
}
