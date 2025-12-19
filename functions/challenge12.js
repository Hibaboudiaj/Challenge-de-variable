const prompt = require("prompt-sync")();
let myarray = [1 , 2 , 5 , 5 , 7 , 8]

function supprimerDoublons(myarray) {
  return [...new Set(myarray)];
}

console.log(supprimerDoublons(myarray));
