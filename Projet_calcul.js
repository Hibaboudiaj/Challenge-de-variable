const prompt = require("prompt-sync")();
let myarray = [];
const menu = `
1:laddition
2:soustraction
3:multiplication
4:division
5:puissance
6:racine_carrée
7:factorielle
8:historique
`;
function laddition() {
  let N1 = Number(prompt("veuillez entrer le premier nombre : "));
  let N2 = Number(prompt("veuillez entrer le deuxiem nombre : "));
  let sum = N1 + N2;
  console.log("la somme", sum);
  myarray.push(`${N1} + ${N2} = ${sum}`);
  menuprincipal();
}
function soustraction() {
  let N1 = Number(prompt("veuillez saisir le premier nombre :"));
  let N2 = Number(prompt("veuillez saisir la deuxiem nombre :"));
  let sous = N1 - N2;
  console.log("la soustraction est", sous);
  myarray.push(`${N1} - ${N2} = ${sous}`);

  menuprincipal();
}
function multiplication() {
  let N1 = Number(prompt("entrer le premier nombre :"));
  let N2 = Number(prompt("entrer le deuxiem nombre :"));
  let multip = N1 * N2;
  console.log("la multiplication est", multip);
  myarray.push(`${N1} * ${N2} = ${multip}`);
  menuprincipal();
}
function division() {
  let N1 = Number(prompt("entrer le premier nombre :"));
  let N2 = Number(prompt("entrer la deuxiem nombre :"));
  let div = N1 / N2;
  console.log("la division est :", div);
  myarray.push(`${N1} / ${N2} = ${div}`);
  menuprincipal();
}
function puissance() {
  let N1 = Number(prompt("entrer un nombre :"));
  let N2 = Number(prompt("entrer la puissance :"));
  let puiss = N1 ** N2;
  console.log("la puissance est :", puiss);
  myarray.push(`${N1} ** ${N2} = ${puiss}`);
  menuprincipal();
}
function racinecarrée() {
  let N1 = prompt("entrer un nombre :");
  let racin = Math.sqrt(N1);
  console.log("la racine carrée est :", racin);
  myarray.push(`racinecarrée est : ${N1} = ${racin}`);

  menuprincipal();
}
function factorielle() {
  let N1 = prompt("entrer un nombre :");
  let sum = 1;
  for (i = 1; i <= N1; i++) {
    sum *= i;
  }
  console.log("la factorielle est :", sum);
  myarray.push(`"factorielle est :" ${N1} = ${sum}`);
  menuprincipal();
}
function historique() {
  console.table(myarray);
}
function menuprincipal() {
  console.log(menu);
  let choix = parseInt(prompt("Choisie un operation : "));
  switch (choix) {
    case 1:
      laddition();
      break;
    case 2:
      soustraction();
      break;
    case 3:
      multiplication();
      break;
    case 4:
      division();
      break;
    case 5:
      puissance();
      break;
    case 6:
      racinecarrée();
      break;
    case 7:
      factorielle();
      break;
    case 8:
      historique();
      break;
    default:
      break;
  }
}
menuprincipal();
