const prompt = require("prompt-sync")();

let N = Number(prompt('entrer nb : '))
let exposant = Number(prompt('entrer exposant : '))
// exposant = 5 → had exposant (ch7al mn marra ghandarbo fiha N)
// Had l code kay7sb: N ^ exposant = 2 ^ 5 = 2 × 2 × 2 × 2 × 2 = 32
let result = N
let i = 1
// Nbdaw mn 1 7it deja 3andna N ^ 1 f result
// Ghanwaslo l exposant bach n9asdo N ^ exposant
while(i< exposant){
// while: Boucle li katb9a t3awd htta condition twali false
// i < exposant: Tanb9aw ndarbo htta i ywsel l exposant
    result *= N ;
// result *= N hiya mukhtasar dyal result = result * N
// Kol tour kandarbo result f N
    i++
// i++ hiya mukhtasar dyal i = i + 1
// Kol tour i kayzi waħed
// Bach nwaslo l condition dyal sortie (i < exp wali false)
}

console.log(result);