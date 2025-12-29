const prompt = require("prompt-sync")();
let myarray = ["hiba" , "imane" , "malaki" , "oussama"];
function motsLongs(myarray, longueur) {
  return myarray.filter(mot => mot.length >= longueur);
}
console.log(motsLongs(myarray, 5));