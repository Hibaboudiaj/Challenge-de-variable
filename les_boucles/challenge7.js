const prompt = require("prompt-sync")();
let sum = 0;
// sum: Variable li ghadi n7asbo fiha somme 
// Nbdaw b 0 7it mazal madakhal walo
// Exemple: Ida dkhalti 5, 10, 3 → sum = 5 + 10 + 3 = 18
for (let i = 1; i <= 10; i++) {
// let i = 1: Nbdaw mn 1 (awel tour)
// i <= 10: Ghanb9aw n3awdo htta 10 tours (ghantalbo 10 l3adad)
// i++: Kol tour i kayzi 1
  let N = Number(prompt("entrer nb: "));
// Kayban luser: "entrer nb: "
// User kaydkhol: masalan 7
// N = 7 → hada l3adad li dkhal user had tour
// /Kol tour: variable nb jdida (kayت9ra 3adad jdid)

  if (N >= 0) {
// nb >= 0: Kayn9lbo wash l3adad positif wla zéro
// Ida true (positif): Ghanzidoh l sum
// Ida false (négatif): Maghadich nzidoh (ghant9afzoh)
    sum += N;
//     sum += nb hiya mukhtasar dyal sum = sum + nb
// Kanzido l3adad li dkhal user l sum
// Ghir ida kان positif
  }
}
console.log(sum);
