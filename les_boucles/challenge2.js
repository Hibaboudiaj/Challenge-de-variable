const prompt = require("prompt-sync")();

let N = Number(prompt("entrer un nombre  : "));

let count = 0;

for (let i = 1; i <= N; i++) {
// essayé kol nombre men 1 l N bach nchouf wach 
// diviseur dyal N wella la
if (N % i === 0) {
//Had ssṭer --> Condition:
// N % i --> lopérateur % (modulo) kayrje3 lina baqiya dyal division dyal N 3la i
// === 0 -->  wach baqiya = 0 (ya3ni division exacte, bla baqiya)
// ila kay9sm bla ba9iya ya3ni howa diviseur dyl N

count++; 
// Ila l-condition foq kant true (ya3ni lqina diviseur)
// Ya3ni: Kol merra nlqaw diviseur, kaytsajl f count
}
}

if (count === 2) { 
  console.log(N, "Premier");
} else {
  console.log(N, "Non premier");
}

// **Had l-program kay-dir:**
// 1. Kay-ṭleb mennek raqm
// 2. Kay-ḥseb chem diviseur 3and had raqm
// 3. Ila lqa **ghir 2 diviseurs** (1 w nfso) → **Premier** ✅
// 4. Ila lqa **ktar men 2 diviseurs** → **Non premier** ❌

// **Input: 7**
// ```
// Diviseurs: 1, 7
// count = 2
// Output: 7 Premier ✅
// ```

// **Input: 10**
// ```
// Diviseurs: 1, 2, 5, 10
// count = 4
// Output: 10 Non premier ❌