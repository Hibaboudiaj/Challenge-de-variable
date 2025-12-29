const prompt = require("prompt-sync")();
let Myarray = [];
function RemplirTableau() {
  for (let i = 1; i <= 5; i++) {
    let N = Number(prompt("Entrer 5 nombre entier :"));
    Myarray.push(N);
  }
  return Myarray;
  // Hna kan-retourner array kamla bach console.log t-afficher liste dyal les nombres!
}
console.log(RemplirTableau());

