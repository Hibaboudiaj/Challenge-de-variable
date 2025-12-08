const prompt = require("prompt-sync")();
let N = prompt("Donne un mot de passe : ");
let isPasswordContainsNumber = /\d/;
let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

if (N.length < 6) {
  console.log("mot de passe faible");
} 
else if (N.length >= 8 && isPasswordContainsNumber.test(N) && regex.test(N)) {
  console.log("mot de passe fort");
}
else if (N.length >= 6 && isPasswordContainsNumber.test(N)) {
  console.log("mot de passe Moyen");
}
