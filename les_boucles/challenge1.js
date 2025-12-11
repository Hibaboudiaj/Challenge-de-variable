const prompt = require("prompt-sync")();

let N = Number(prompt("Entrer un nombre :"));

for (let i = 1; i <= 10; i++) {
// (initialization) let i = 1  --> Kay-bda men 1 
// (condition) i <= 10  --> Kay-kemmel ḥtta yousel l 10 o y7bes
// (incrémentation) i++  --> Kol merra kay-zid 1 l i
console.log(N + "X" + i + "=" + N * i);
// table multiplication dyl(N) result N X i = (N*i)
}


 