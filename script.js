
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

let Percentuale40 = (biglietto / 100) * 40;
let prezzofinale2 = biglietto - Percentuale40;

// Imposto la Condizione

if (textAsNumber < '18') {
    console.log(prezzofinale1);
} else {
    console.log(prezzofinale2);
}

// document.writeln('prezzofinale2');


