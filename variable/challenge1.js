const prompt = require("prompt-sync")();
let nom = prompt("veuillez saisir votre nom : ");
let prenom = prompt("veuillez saisir votre prenom : ");
let age = Number(prompt("veuillez saisir votre age : "));
let sexe = prompt("veuillez saisir votre sex : ");
let tele = Number(prompt("veuillez saisir votre tele : "));
console.log(
  "bonjour Mr/Ms : " +
    nom +
    prenom +
    ",tu as age : " +
    age +
    ";ton sexe est : " +
    sexe +
    ",ton numero de telephone : " +
    tele
);
