const prompt = require("prompt-sync")();
let nom = prompt(" saisir votre nome : ");
let Pass = Number(prompt(" saisir votre Password : "));

const role = "admine";
const password = 1234;

if (nom === role && Pass === password) {
  console.log(" Bienvenue Admin ");
} else if (nom === "admine" && Pass !== 1234) {
  console.log(" Mot de passe incorrect ");
} else {
  console.log(" Utilisateur introuvable ");
}
