const prompt = require("prompt-sync")();

let array = [];
// Hna kankriyiw un tableau vide smitoh array
// had tableau ghadi nkhazno fih les nombre li ghadi ydakhel user
for (let i = 0; i < 5; i++) {
  // boucle "for" li ghadi trepeter 5 marat 
  // i howa li kaybda mn 0 w kayzid 1 kol mara
  let N = Number(prompt("Entrer 5 nombre entier :"));
  array.push(N);
}
// katb9a tzid nombre li dakhel l user f array
// katkarer 5 marat ya3ni ghadi ikhazn 5 nombre
console.log(array.reverse().join(""));
