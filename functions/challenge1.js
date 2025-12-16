const prompt = require("prompt-sync")();

function remplirTableau(length){
    let arr = []
    for (let index = 0; index < length; index++) {
        let nbr = Number(prompt('entrer des nombre: '))
        arr.push(nbr)
    }
    // return arr;
    console.log(arr)

} 
remplirTableau(5);