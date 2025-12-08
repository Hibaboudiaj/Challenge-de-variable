const prompt = require("prompt-sync")();
let N = Number (prompt(" Entrer un nombre :"))
if (N % 3 === 0 && N % 5 === 0) {
    console.log( " FizzBuzz ");
}
else if (N % 3 === 0){
    console.log("Fizz");
    
}
else if (N % 5 === 0){
    console.log("Buzz");
    
}
else{
    console.log(N);
}