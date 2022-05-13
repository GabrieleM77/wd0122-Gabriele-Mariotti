/*function Pizza (g,t = 'Napoletana',p = 5) {
    this.gusto = g
    this.tipo = t
    this.prezzo = p
    this.dettagli = function(){
        console.log('La pizza ' + this.gusto+ 'di tipo ' + this.tipo + 'costa ' + this.prezzo + 'euro');
    }
    

}*/



class Pizza{
    //all'interno del constructor inizializzo le propietà
    //ma posso anche lanciare funzioni o avviare processi
constructor(g ,t = 'Napoletana',p = 5){
    this.gusto = g
    this.tipo = t
    this.prezzo = p

    this.dettagli()
    }
dettagli(){
    console.log('La pizza ' + this.gusto+ 'di tipo ' + this.tipo + 'costa ' + this.prezzo + 'euro');
}

}




let margherita = new Pizza('Margherita')




//sistema furbo per oggetti che hanno tanti argomenti


class Prova{
    constructor(obj){
        this.gusto = obj.gusto || 'Margherita'
        this.tipo = obj.tipo || 'Napoletana'
        this.prezzo = obj.prezzo || prezzo
        this.sconto = 0
    }
}

let info = {
    gusto: 'Diavola',
    tipo: 'Napoletana',
    prezzo : 6
}

let prova = new Prova(info)

console.log(Prova);



// ereditarietà


class Persona{
constructor(nome,cognome,anni){
    this.nome = nome
    this.cognome = this.cognome
    this.eta = anni
}
presentazione(){
    console.log('Ciao, mi chiamo' + this.nome + this.cognome + 'ed ho' + this.anni + 'anni')
}
}

let persona = new Persona ('Mario', 'Rossi', 30)
persona.presentazione()

class Studente extends Persona{

    constructor(nome,cognome,anni){
        super(nome,cognome,anni)//attiva il costruttore della classe genitore valorizzando di fatto le propietà ed eventualmente lanciando le stesse funzioni
    }
}





let studente = new Studente('Maria', 'Rosa', 20)
Studente.presentazione();