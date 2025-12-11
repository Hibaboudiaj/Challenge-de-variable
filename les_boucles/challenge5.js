const prompt = require("prompt-sync")();
const num = Number(prompt("Entrez un nombre :"));

for (let i = 2; i <= num; i++) {
  // i = 2 --> Nbdaw mn 2 (awel 3adad premier)
  // i <= num --> Ghan9albo 3la kol a3dad mn 2 htta num
  // i++ --> Kol tour, i kayzid 1

// Exemple m3a num = 10:
// Tour 1: i = 2 (ghaynchofo wash 2 premier?)
// Tour 2: i = 3 (ghaynchofo wash 3 premier?)
// Tour 3: i = 4 (ghaynchofo wash 4 premier?)
// ...
// Tour 9: i = 10 (ghaynchofo wash 10 premier?)
let premier = true;
// premier = true: Kan9olo "oui, had l3adad premier" 
// Ida l9ina chi diviseur: Ghanb9aw nchangiw premier L false
// Ida mal9inach walo: Ghaybka true o ghayn3arfo bli premier

  for (let j = 2; j < i; j++) {
// j = 2: Nbdaw n9asmo 3la 2
// j < i: Ghanjarbo kol 3adad mn 2 Htta i-1
// Pourquoi j < i? 7it kol 3adad kayt9assam 3la rasou, makaynach ma3na njarbo
// Exemple: Ida i = 6
// Tour 1: j = 2 → wash 6 kayt9assam 3la 2?

    if (i % j === 0) {
      // i % j: Hadi kat3tik ba9i dyal 9isma (le reste)
      // === 0: Ida ba9i 0, ma3naha i kayt9assam 3la j
      premier = false;
      // premier = false: Kayn9olo "la2, had l3adad machi premier"

      break;
      // break: Kharrjna mn boucle interne
    }
  }

  if (premier) console.log(i);
}
