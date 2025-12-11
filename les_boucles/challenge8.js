const prompt=require('prompt-sync')();

let ligne = Number(prompt('n° ligne: '))
// Kat-importer module prompt
// Kaytalab mn user: "n° ligne: "
// User kaydkhol: masalan 5
// ligne = 5 → ghadi naffichi 5 lignes
for (let i = 1; i <= ligne; i++) {
//     i = 1: Nbdaw mn ligne 1
// i <= ligne: Ghan3awdo ħtta ligne numéro ligne
// i++: Kol tour nzido ligne jdida

// M3a ligne = 5:

// Tour 1: i = 1 (ligne 1)
// Tour 2: i = 2 (ligne 2)
// Tour 3: i = 3 (ligne 3)
// Tour 4: i = 4 (ligne 4)
// Tour 5: i = 5 (ligne 5)
let etoile ="*".repeat(i-1)
// .repeat(n): Kat3awd string n marra
// i-1: 3adad dyal étoiles f had ligne

// Pourquoi i-1?

// Ligne 1: i=1 → 1-1 = 0 étoiles
// Ligne 2: i=2 → 2-1 = 1 étoile: *
// Ligne 3: i=3 → 3-1 = 2 étoiles: **
// Ligne 4: i=4 → 4-1 = 3 étoiles: ***
// Ligne 5: i=5 → 5-1 = 4 étoiles: ****

// Exemples dyal .repeat():

// "*".repeat(0) → "" (walo)
// "*".repeat(1) → "*"
// "*".repeat(3) → "***"
// "A".repeat(4) → "AAAA"
let espace = " ".repeat(ligne-i)
// " ".repeat(n): Kat3awd espace n marra
// ligne-i: 3adad dyal espaces 9bal étoiles

// M3a ligne = 5:

// Ligne 1: i=1 → 5-1 = 4 espaces: "    "
// Ligne 2: i=2 → 5-2 = 3 espaces: "   "
// Ligne 3: i=3 → 5-3 = 2 espaces: "  "
// Ligne 4: i=4 → 5-4 = 1 espace: " "
// Ligne 5: i=5 → 5-5 = 0 espaces: ""

// Pourquoi ligne-i?

// Bach étoiles yjiw f triangle (décalage يمين)
// Kol ma nzlo ligne, 3adad espaces kayن9as


console.log(espace, etoile);

}