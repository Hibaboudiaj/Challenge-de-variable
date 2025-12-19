const prompt = require("prompt-sync")();

let Myaraay =[]

function filter_pairs() {
  for (let i = 0; i < 5; i++) {
    let P = Number(prompt("entrer un nombre :"));
    Myaraay.push(P);
  }
  let array =[]
  for(let i=0 ; i<Myaraay.length ; i++){
    if(Myaraay[i] % 2 ==0){
    array.push(Myaraay[i])
    console.log(array);
  }
  }
}
filter_pairs();


