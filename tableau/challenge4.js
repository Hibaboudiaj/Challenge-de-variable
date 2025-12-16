const prompt = require("prompt-sync")();

let Myarray = [];

for (let i = 0; i < 3; i++) {
  let N = (prompt("Entrer 3 chaînes de caractères :"));
  Myarray.push(N);
}

let chaînes_Recherche = (prompt("Entrez la chaîne à rechercher : "));

let positions = Myarray.indexOf(chaînes_Recherche)
// rechrche 3la string f array
if(positions!==-1){
   // Si position n'est pas -1
// Détails:
// positions !== -1 → string existe
// positions === -1 → string makaynch
    console.log('La chaîne ' + chaînes_Recherche + ' a été trouvée à la position : ' + positions);
 }else{
    console.log( ' cette chaînes de caractères pas trouvée .');
    
 }
