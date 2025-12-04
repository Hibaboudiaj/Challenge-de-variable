const prompt = require("prompt-sync")();
let distance = Number(prompt("veuillez saisir la distance : "));
let vitesse = Number(prompt("veuillez saisir la vitesse : "));
console.log("le temps de trajet d’une voiture est : " + distance / vitesse);
