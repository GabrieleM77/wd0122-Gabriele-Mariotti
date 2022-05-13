//usare un array per descrivere è sbagliato, descrivo in maniera precisa con delle parentesi graffe indicando precisamente a cosa mi riferisco
let  smartphone = {
    Marca: 'samsung',
    modello: 'galaxy s7 edge',
    prezzo: '150',
    accendi : function () {
        //fa qualcosa
    }
} 

// lettura e scrittura degli oggetti

let oggetto = {} //oggetto vuoto da riempire

let pizza = {
    gusto: 'Margherita',
    tipo: 'Napoletana',
    prezzo: 5,
    dettagli: function(){
        console.log('la pizza Margherita costa 5 euro');
    }
}

console.log(pizza.gusto);


pizza.gusto = 'Diavola'

console.log(pizza.gusto);

document.write(pizza) //errore perchè non è possibile la conversione in strigna sul foglio html

document.write(pizza.prezzo)//forma corretta per visualizzare il prezzo

pizza.dettagli()// questo è un metodo a differenza della riga 41 che è una funzione, e si ricollega direttamente all'oggetto creato sopra

function dettagli() {
    console.log('è una funzione differente');
    
}
dettagli() //è una funzione diversa dal metodo alla riga 35 e richiama una funzione




//costruttore di oggetti

function Pizza (g,t = 'Napoletana',p = 5) {
    this.gusto = g
    this.tipo = t
    this.prezzo = p
    this.dettagli = function(){
        console.log('La pizza ' + this.gusto+ 'di tipo ' + this.tipo + 'costa ' + this.prezzo + 'euro');
    }
    

}

let margherita = new Pizza('Margherita')
let margherita2 = new Pizza('Margherita','Pinsa',7)
let diavola = new Pizza('Diavola','Napoletana',1)




console.log(margherita);
//margherita2.tipo = 'Romana'
console.log(margherita2);


margherita.dettagli()
margherita2.dettagli()
diavola.dettagli()



Pizza.prototype.disponibilita = true //con prototype aggiungiamo qualcosa alla nostra funzione in ogni momento
Pizza.prototype.prova = function(){
    this.dettagli()//posso lanciare un metodo all'interno dell'oggetto a cui appartiene
}

diavola.prova()














