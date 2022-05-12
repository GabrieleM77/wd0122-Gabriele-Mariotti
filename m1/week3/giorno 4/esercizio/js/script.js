let stringa = "Differenza tra maiuscolo e minuscolo"


let maiuscolo = stringa.toUpperCase();
console.log(maiuscolo);

//sopra e sotto possiamo vedere le differenze fra touppercase e to lower case che trasformano in minuscolo e maiuscolo la frase all'interno della stringa"


let minuscolo = stringa.toLowerCase();
console.log(minuscolo);


let arrayDipersone = [
'Gabriele',
'Chiara',
'Anna',
'Paolo',
'Luca',
'Alessio',
'Marzio'
]

console.log(arrayDipersone);

//nel console log qua sotto si può leggere Anna che è il terzo ogetto dell'array


console.log(arrayDipersone[2]);

let lunghezzaPrima = arrayDipersone.length
console.log(lunghezzaPrima);



//con push ho aggiunto al mio array il nome Giada
var nomeAggiunto = arrayDipersone.push('Giada')
console.log(arrayDipersone);

//ho creato una variabile leggereLunghezza che mi permette di leggere la lunghezza del mio array
let leggereLunghezza = arrayDipersone.length;

console.log(leggereLunghezza);

//funzione con i numeri dell'array
let arrayDinumeri = [1998,1997,1957,1948,1974]

function f (arrayDinumeri) {
    if (arrayDinumeri > 1957) { 
        document.write('i giovani <br>')
        
    } else {
        document.write('i vecchi <br>');
    }
}
f(arrayDinumeri[0])
f(arrayDinumeri[1])
f(arrayDinumeri[2])
f(arrayDinumeri[3])
f(arrayDinumeri[4])








//con pop estraggo l'ultimo elemento dal mio array
let pop = arrayDipersone.pop()
console.log(pop);


//ho estratto il primo nome dala mia lista di array
let rimuovere = arrayDipersone.shift();
console.log(rimuovere);


let aggiungere = arrayDipersone.unshift("Davide")
console.log(aggiungere);

