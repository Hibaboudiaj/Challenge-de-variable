const prompt = require("prompt-sync")();
let voiture ={
marque :"fiat550" , 
modelle : "nastro" ,
annee : 1978 
};
console.log(`la marque est : ${voiture.marque}  et l'annee est : ${voiture.annee}`);

voiture.annee = 2000 ;
console.log(`la marque est : ${voiture.marque}, le modelle est : ${voiture.modelle}, l'annee est : ${voiture.annee}`);

voiture.couleur = "pink" ;
console.log(`la marque est : ${voiture.marque}, le modelle est : ${voiture.modelle}, l'annee est : ${voiture.annee}, la couleur est : ${voiture.couleur}`);

delete voiture.modelle ;
console.log(voiture);
