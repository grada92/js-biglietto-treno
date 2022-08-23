
const text = prompt ('quanti anni hai?');
const textAsNumber = parseInt(text);

console.log(textAsNumber);

const km = prompt ('quanti km vuoi percorrere?')
const number = parseInt(km);

console.log(km);


let biglietto = km * 0.21;

// Calcolo percentuale 

let Percentuale20 = (biglietto / 100) * 20;
let prezzofinale1 = biglietto - Percentuale20;

let Percentuale30 = (biglietto / 100) * 30;
let prezzofinale2 = biglietto - Percentuale30;

// Imposto la Condizione

if (textAsNumber < '18') {
    console.log(prezzofinale1);
} else {
    console.log(prezzofinale2);
}

