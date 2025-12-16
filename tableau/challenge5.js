const prompt = require("prompt-sync")();

let Myarray = [];

for (let i = 0; i < 7; i++) {
  let N = Number(prompt("Entrer 7 nombre entier :"));
  Myarray.push(N);
}

console.log("Votre tableau : ", Myarray);

let max = Myarray[0];

for(let i = 1; i < Myarray.length; i++) {
    if(Myarray[i] > max) {
        max = Myarray[i];
    }
}

console.log("Le plus grand:", max);

let min = Myarray[0];

for(let i = 1; i < Myarray.length; i++) {
    if(Myarray[i] < min) {
        min = Myarray[i];
    }
}

console.log("Le plus petit:", min);

