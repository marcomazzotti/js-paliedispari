// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

// parola dell'utente
let word = prompt("Inserire una parola");
console.log(word);

// funzione
function isPalindroma (word) {
  let reverseWord = word.split("").reverse().join("");
  return reverseWord === word;
}

// cosa succede se la parola è palindroma
if (isPalindroma(word)) {
  console.log(`${word} è una parola palindroma`);
} else {
  console.log(`${word} non è una parola palindroma`);
}
