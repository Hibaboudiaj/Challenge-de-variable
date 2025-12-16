const prompt = require("prompt-sync")();

let chaine = prompt('Entrer un chaine : ').toLowerCase();
let Myarray = ["a" , "e" , "i" , "o" , "u" , "y"];
let count = 0 ;
for (let i = 0 ; i < Myarray.length ; i++ ) {
    for (let j = 0 ; j < chaine.length; j++ ) {
        if (Myarray[i] == chaine[j]) {
            count++;
        }
    }
}
console.log(count);