// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// scelte dell'utente
let userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(`Hai scelto il numero ${userNumber}`);
let userChoice = prompt("Scegli pari o dispari");
console.log(`Hai scelto ${userChoice}`);

//scelta del computer
let computerNumber = rndPcNumber (1, 5)
console.log(`Il computer ha scelto ${computerNumber}`);

//funzione per la scelta del computer
function rndPcNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//somma delle scelte e determinazione pari o dispari
let sum = userNumber + computerNumber
console.log(`La somma dei numeri è ${sum}`);

function isOddOrEven(number) {
  if (sum % 2 === 0) {
    return "pari"
} else {
    return "dispari"
  }
}

let result = isOddOrEven(sum)
console.log(`La somma dei numeri è un numero ${result}`);

//dichiarazione del vincitore
if (result === userChoice) {
  console.log("Hai vinto!");
} else {
  console.log("Hai preso, riprova!");
}