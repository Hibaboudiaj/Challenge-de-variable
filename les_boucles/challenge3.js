const prompt = require("prompt-sync")();

let sum = 0;
let maximum = 0;

while (true) {
// while --> boucle li katrépéter code ma 7ad condition = true
  let N = Number(prompt("donner un nombre :"));

if (N >= 100) {
    break;
// hna fin t7bas boucle ila t7a9e9 had chart
}

else if (N < 100 && /[1-9]0/.test(N)) { 
// [1-9]  →  أي رقم من 1 ل 9
// 0      →  متبوع مباشرة ب 0

sum = sum + N
// kol mara kanzido N jdid la somme li kant 9bal o kayjm3 kolchi o ystokih f sum bach izid 3lih tani

if (N > maximum) {
    maximum = N
// maximum kaytbadl mn li N kaykon kbar mn l max li kan
}

console.log("la somme :" , sum);
console.log("la maximum :" , maximum);

}
}
