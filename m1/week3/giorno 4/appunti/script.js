let arr = [1,2,3,4]
console.log(arr);

let pizze = [
    'margherita',
    'diavola',
    '4 stagioni'
]


let pizzaDiavola = pizze[1]
console.log(pizzaDiavola);

console.log(pizze);
console.log(pizze[0]);



pizze[0] = 'capricciosa'


console.log(pizze);



let ul = document.querySelector('ul'); //questo significa il primo ul della pagina

console.log(ul.innerHTML);


let nomi = [
'Mario',
'Zaira',
'Luca',
'Massimo',
'Adriana',
]
nomi.sort()

console.log(nomi);

//aggiungere e rimuovere elementi di un array

nomi.push ('Ivona')
console.log(nomi);


let nomeEliminato = nomi.pop() //è possibile asegnare ad una variabile il risultato di pop(), in questo modo otterremo una copia di cio che abbiamo eliminato
console.log(nomi);
console.log('Hai eliminato il nome' + nomeEliminato);

nomi = [
    'Mario',
    'Zaira',
    'Luca',
    'Massimo',
    'Adriana', 
]

nomi.splice(2,1)

console.log(nomi);

nomi.splice (2,1,'Ledio')
console.log(nomi);

//concat

let nomi1 = ['Gabriele','Chiara']
let nomi2 = ['Anna','Paolo']
let nomi3 = ['Luca', 'Marzio', 'Alessio']
                                          //posso unire tutti insieme diversi array con concat permettendomi di visualizzarli tutti insieme
let unito = nomi1.concat(nomi2 , nomi3)
console.log(unito);







let x = [1,2,3,4,'ciao',[4,8,96,['a','b','c'], 'ciao' ] ]

console.log(x [2]);
console.log(x [5][2]);


var salutoalCane = "ciao Otto, portami l'osso"

var newsaluto = salutoalCane.replace("Otto" , "Nove")

console.log(newsaluto);


//split e join

frase = "La mia pizza preferita è la Diavola";

let arrFrase = frase.split(' ')

console.log(arrFrase);
console.log(arrFrase [0]);

let citta = 'Roma, Milano, Napoli, Firenze';
console.log(citta);


let arrayCitta = citta.split(',') //posso far diventare una stringa un array con split
console.log(arrayCitta);



let nuovoArrayCitta = [ 'Roma, Milano, Napoli, Firenze' ]
let nuovaStringaCitta = nuovoArrayCitta.join('#')
console.log(nuovaStringaCitta);


//math


let z = 1

console.log(z);

z++ //posso incrementare di uno il valore della variabile numerica con ++ e serve solo per incrementare di 1
console.log(z);
//se volessi incrementare non di 1 ma di N
//z = z+N //dove N è il numero che voglio aggiungere alla mia variabile z

//stessa cosa utilizzando il -- o il = z-N


//arrotondare

let n1 = 5.3;//round arrotonda sia per difetto che per eccesso a seconda di dove si trova il numero decimale
let n2 = 5.5;
console.log(Math.round(n2) );



console.log(Math.ceil(n1)); //ceil arrotonda sempre per eccesso
console.log(Math.floor(n1));//floor arrotonda sermpre per difetto



let target = document.querySelector('#grazie')

let ringraziamenti = ['Grazie', 'Grazie Mille', 'Tante Grazie','Wow Grazie']
let punteggiatura = [' ', '!', '!!']
let smyle = ['', ':D', ':)']

function generaRandom(arr){
    return Math.floor(Math.random() * arr.length)
}



let rand = generaRandom(ringraziamenti)
let rand1 = generaRandom(punteggiatura)
let rand2 = generaRandom(smyle)

console.log(rand);

let fraseN = ringraziamenti[rand] + ' ' +punteggiatura[rand1] + ' '+ smyle[rand2]

console.log(fraseN);

target.innerHTML = fraseN






















