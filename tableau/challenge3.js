const prompt = require("prompt-sync")();

let Myarray = [];

for (let i = 0; i < 8; i++) {
  let N = Number(prompt("Entrer 8 nombre entier :"));
  Myarray.push(N);
}
console.log("Votre tableau : " ,Myarray);

let N_Recherche = Number(prompt("Quel nombre voulez-vous rechercher ? : "));
// On cherche le nombre dans le tableau
let positions = Myarray.indexOf(N_Recherche)
// indexOf() - Méthode dyal array kat-recherch 3la élément

if(positions!==-1){
   // Ila position machi -1 (ya3ni nombre existe)
    console.log('ce nombre est existe et sa position est: ' + positions);
 }else{
    console.log( ' ce nombre existe pas ');
    
 }

