const prompt = require("prompt-sync")();
let etudiant = {
  nom: "hiba",
  age: 21,
  sePresenter: function () {
    console.log(
      "Bonjour, je mappelle " + this.nom + " et jai " + this.age + " ans"
    );
  },
};
etudiant.sePresenter();
let personne = {
  nom: "hiba",
  city: "fbs",
  annee: 2004,
};
for (let cle in personne) {
  console.log(cle + ":" + personne[cle]);
}
// Ici, on crée un objet appelé classe qui contient une propriété etudiant. Cette propriété est un tableau (array) avec trois noms d'étudiantes
let classe = {
  etudiant: ["hiba", "malak", "imane"],
};
// Utilise la méthode .forEach() pour parcourir chaque élément du tableau
function showStudents() {
  // Pour chaque élément el, elle l'affiche dans la console avec console.log(el)
  classe.etudiant.forEach((el) => console.log(el));
}
// **On appelle (exécute) la fonction `showStudents()`
showStudents();

let livers = [
  { titre: "la boite a mervielle", auteur: "ahmad sefrioui", annee: 1954 },
  { titre: "Antigone", auteur: "jean anouilh", annee: 1944 },
  {
    titre: "le dernier jour dun condamne ",
    auteur: "victor hego",
    annee: 1829,
  },
];
for (let livre of livers) {
  console.log(livre.titre);
}
function trouverLivre(livers) {
  let name = prompt(" Entrer un titre : ");
  let trouve = livers.find((livre) => livre.titre === name);
  if (trouve){
    console.log(" Lauteur est : " + trouve.auteur + " ,Lannee est : " + trouve.annee);
  }
  else{
    console.log("Ne trouve pas .");
    
  }
}
trouverLivre(livers);
