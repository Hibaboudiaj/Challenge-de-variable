const prompt = require("prompt-sync")();

let Myarray = [8, 5, 9, 4];
let carres = Myarray.map((nombre) => nombre * nombre);
console.log(carres);


// .map() = créer tableau jdid b transformation
// * = multiplication
// ** = puissance (carré): 5 ** 2 = 25