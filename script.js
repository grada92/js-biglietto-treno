
const text = prompt ('quanti anni hai?');
const textAsNumber = parseInt(text);

console.log(textAsNumber);

const km = prompt ('quanti km vuoi percorrere?')
const number = parseInt(km);

console.log(km);


let biglietto = km * 0.21;

// Calcolo percentuale 



// Imposto la Condizione

if (textAsNumber < 18) {
    let Percentuale20 = (biglietto / 100) * 20;
    biglietto = biglietto - Percentuale20;
    
} else if (textAsNumber > 65) {
    let Percentuale40 = (biglietto / 100) * 40;
    biglietto = biglietto - Percentuale40;
}
//   console.log(biglietto)
// document.writeln('prezzofinale2');

document.getElementById('ticket').innerHTML = 'il prezzo del biglietto è' + biglietto


