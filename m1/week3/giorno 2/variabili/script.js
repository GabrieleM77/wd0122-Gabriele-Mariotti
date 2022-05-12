/*stringhe ed escape*/

var saluto = "ciao"
var domanda = "com'è oggi il tempo"
var domanda2 = 'com\'è oggi il tempo?'
var html = '<div calss="blocco"></div>'
var html2 = "<div class=\"blocco\"></div>"

var nome = 'Giovanni'; //valore ipoteticamente definito dall'utente
var frase = "Ciao" + nome + "come stai?";
var frase2 = 

console.log(frase, 'color:red');
console.log(frase.lenght)
console.log(frase[0])

console.log(frase[frase.lenght-1]  )

/*let e const*/

const PASSWORD = 'CWUHFUIHFIUEFHE'
console.log(PASSWORD);
//PASSWORD = 'GFGTSGSGTBSRTGTR' ERRORE perchè è una costante e non viene cambiata//
const OBJ = {
    nome: 'Mario'
}

var x = 1;
{
console.log(x);
}

let y = 2;
{
    console.log(y);
}





{
    var x2 = 1;

console.log(x2);
}
console.log(x2) // essendo che var ingnora il block scope la variabile è raggiungibile

{
    let y2 = 2; //variabile locale che appartiene alle graffee a nient'altro//
    console.log(y2);
}
//console.log(y2); errore perchè i let non viene raggiunto dopo la parentesi graffa

function scriviSaluto (){
var s = 'ciao';
    document.write(s)
    return s;
}

document.write (scriviSaluto() )

scriviSaluto();

/*conversione variabili*/


let num = 4
let testo = '4'
let prezzo = '4€'

console.log(num + testo); //num viene trasformato in stringa
console.log(num * testo); //testo viene trasformato in numero e quindi moltiplicato
console.log(num * prezzo);


let bool = false;
let valore = "<br>il valore della variabile booleana è" + bool + '<br>'
document.write(valore)

console.log(num*bool); //se convertito in numero un valore booleano si trasforma in 0 se è false e in 1 se è true

let booleano = Number(true)
let errore = Number ('4a')
let stringa = String(4)
console.log(booleano, errore, stringa);

let arr = ['a', 'b','c','d',60]
document.write (arr); //i valori vengono concatenati in una stringa e separati tra loro con una virgola


let nomi = 'Mario, giovanni, '

nomi += 'Carlo';
console.log(nomi);

let conto = 5;

conto += 5;

console.log(conto);