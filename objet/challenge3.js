const prompt = require("prompt-sync")();
// 1
let entreprise = {
  adresse: {
    nom: "lara",
    ville: "fbs",
    codePostal: 1224,
  },
};
console.log(entreprise.adresse.ville);
// 2
let produits = [
  { nom: "consiler", prix: 80 , quantite: 10},
  { nom: "Crayon", prix: 15 , quantite: 20},
  { nom: "lipstick", prix: 20 , quantite: 15},
];
let total = 0 
produits.forEach(produit => {
    const valeurProduit = produit.prix * produit.quantite
    total += valeurProduit; // zid l total
})
console.log(`total de projet et ${total}`);


// 3
class Animal{
constructor(nom,type){
    this.nom = nom;
    this.type = type;
} 
parler(){
    console.log(`${this.nom} the ${this.type} makes a noise !`);
}
}
const chien = new Animal ('lofi','dog');
chien.parler();


// 4
let employes = [
  { nom: "hiba" , salaire: 5000},
  { nom: "malak" , salaire: 4000},
  { nom: "hamza" , salaire: 2000},
];
// for (i=0 ; i<employes.length ; i++){
//     if (employes[i].salaire>3000){
//         console.log(employes[i]);
//     }       
// }

console.log(employes.filter(elm => elm.salaire>3000));

// 5

let OB = {
    nom: "hiba" , salaire: 5000,
}
function cloner(obj) {
    return Object.assign({},obj)
    
}
const OB2 = cloner(OB)
console.log(OB2);
