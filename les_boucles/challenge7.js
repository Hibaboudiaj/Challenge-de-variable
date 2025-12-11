const prompt = require("prompt-sync")();
let sum = 0;
// sum: Variable li ghadi n3asbo fiha somme (jom3) dyal l3adad
// Nbdaw b 0 7it mazal madkhaloch walo
// Exemple: Ida dkhalti 5, 10, 3 → sum = 5 + 10 + 3 = 18
for (let i = 1; i <= 10; i++) {
// let i = 1: Nbdaw mn 1 (awel tour)
// i <= 5: Ghanb9aw n3awdo ħtta 5 tours (ghantalbo 5 l3adad)
// i++: Kol tour i kayzi 1
  let nb = Number(prompt("entrer nb: "));
//   Kayban luser: "entrer nb: "
// User kaydkhol: masalan 7
// nb = 7 → hada l3adad li dkhal user had tour
// /Kol tour: variable nb jdida (kayت9ra 3adad jdid)

  if (nb >= 0) {
// nb >= 0: Kayn9lbo wash l3adad positif wla zéro
// Ida true (positif): Ghanzidoh l sum
// Ida false (négatif): Maghadich nzidoh (ghant9afzoh)
    sum += nb;
//     sum += nb hiya mukhtasar dyal sum = sum + nb
// Kanzido l3adad li dkhal user l sum
// Ghir ida kان positif
  }
}
console.log(sum);
