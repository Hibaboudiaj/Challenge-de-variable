const prompt = require('prompt-sync')();
let array = [];

const menu = `
0-Quitter
1-Addition (+) 
2-Soustraction (-)
3-Multiplication (*) 
4-Division (/) 
5-Puissance
6-Racine carrée
7-Factorielle
8-Historique
`
function addition () {
    console.log("Tu choisis Addition !!");
    let a = Number(prompt('Entrer le premier nombre : ')) ;
    let b = Number(prompt('Entrer le deauxieme nombre : ')) ;
    let sum = a + b; 
    
    console.log(`Addition de ${a} + ${b} est : ${sum} `);
    array.push(${a} + ${b} = ${sum});
    MenuPrincipal()
    
}
function soustraction () {
    console.log("Tu choisis Soustraction !!");
    let a = Number(prompt('Entrer le premier nombre : ')) ;
    let b = Number(prompt('Entrer le deauxieme nombre : ')) ;
    let sum = a - b ;

    console.log(`Soustraction de ${a} - ${b} est : ${sum} `);
    array.push(${a} - ${b} = ${sum});

      MenuPrincipal()
}
function Multiplication () {
    console.log("Tu choisis Multiplication !!");
    let a = Number(prompt('Entrer le premier nombre : ')) ;
    let b = Number(prompt('Entrer le deauxieme nombre : ')) ;  
    let sum = a * b ;

    console.log(`Multiplication de ${a} * ${b} est : ${sum} `);
    array.push(${a} * ${b} = ${sum});

    MenuPrincipal()
    
}
function Division () {
    console.log("Tu choisis Division !!");
    let a = Number(prompt('Entrer le premier nombre : ')) ;
    let b = Number(prompt('Entrer le deauxieme nombre : ')) ;  
    let sum = a / b ;

    console.log(`Division de ${a} / ${b} est : ${sum} `);
    array.push(${a} / ${b} = ${sum});

    MenuPrincipal()
}
function Puissance () {
    console.log("Tu choisis Puissance !!");
    let a = Number(prompt('Entrer la base : ')) ;
    let b = Number(prompt('Entrer la puissance : ')) ; 
    sum = a ** b ;

    console.log(`${a} a la puissance ${b} est : ${sum} `);
    array.push(${a} Puissance ${b} = ${sum});

    MenuPrincipal()

}
function Racinecarrée () {
    console.log("Tu choisis Racinecarrée !!");
    let a = Number(prompt('Entrer un nombre : ')) ;
    sum = Math.sqrt(a);

    console.log(`Racinecarrée de ${a} est : ${sum} `);
        array.push(Racinecarrée ${a} = ${sum});

    MenuPrincipal()

}
function Factorielle () {
    console.log("Tu choisis Factorielle !!");
    let a = Number(prompt('Entrer un nombre : ')) ;
    let sum = 1;
    for(i = 1 ; i <= a ; i++) {
        sum *= i ;
    }

    console.log(Factorielle de ${a} est : ${sum});
    array.push(Factorielle de ${a} = ${sum});

    MenuPrincipal()
}
function Historique () {
    console.log("Historique : ");
    
    console.table(array);
    MenuPrincipal();
}

function MenuPrincipal(){
    console.log(menu);
    let choix = parseInt(prompt('Choisie un operation : '));
    switch (choix) {
        
        case 1: 
        addition();
            break;
        case 2: 
        soustraction();
            break;
        case 3:
        Multiplication();
            break;
        case 4:
        Division();
            break;
        case 5:
        Puissance();
            break;
        case 6:
        Racinecarrée();
            break;
        case 7:
        Factorielle() ;
            break;
        case 8:
        Historique();
            break;
        case 0: 
        console.log("fin");
            break;
    
        default :
        console.log("Choix invalid !!");
        MenuPrincipal();

            break;
    }
    
}
MenuPrincipal()
// array.push(MenuPrincipal());
// console.log(array);