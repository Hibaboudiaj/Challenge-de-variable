const prompt = require("prompt-sync")();

let Myarray = [];

function RemplirTableau() {
  for (let i = 1; i <= 5; i++) {
    let N = Number(prompt("Entrer 5 nombre entier :"));
    Myarray.push(N);
  }
  return Myarray;
}

function calculersomme(array) {
  let somme = 0;
  for (let i = 0; i < array.length; i++) {
// (Condition) i < array.length : Continuer boucle tant que i sghar mn nombre delements exemple i < 5
  somme = somme + array[i];
// Kayzid nombre li f position i dyal array l variable somme, o kay-stocker résultat jdid f somme
// kol tour dyal boucle kanjm3o nombre jdida 7ta kanzaslo l akhr
  }
  return somme;
}

RemplirTableau();
// Kan-appeler fonction RemplirTableau() bach t3mer l-array Myarray b 5 nombres

console.log(calculersomme(Myarray));
