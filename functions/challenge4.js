const prompt = require("prompt-sync")();

myarray = [];

for (i = 0; i < 5; i++) {
  let N = Number(prompt("Entrer un nombre :"));
  myarray.push(N);
}

function compterOccurrences(myarray) {
  let repeate = Number(prompt("Entrer le nombre vous vouler rechercher"));
  let recherche = myarray.filter((N) => N === repeate).length;
// (N) → représente kol élément f array
// => → arrow function (fonction fléchée)
// N === repeate → condition: wach N égale à repeate?
  console.log(`ce nombre ${repeate} est repeatée ${recherche} fois `);
}
compterOccurrences(myarray);