let oggetto = {
    nome: 'Mario'
}


//i due sistemi sotto servono a creare serie di oggetti
//sono come dei libretti di istruzioni che servono a creare oggetti tuti identici come stampini

//2 costruttore dell'oggetto
function CostruttoreOggetto(){
this.nome = ' Mario'
}

let oggetto2 = new CostruttoreOggetto();

//3 classe
class ClasseOggetto{
    constructor(){
        this.nome = 'Mario'
    }
}


let oggetto3 = new ClasseOggetto();

class Automobile{
    constructor(_marca, _colore){
     this.marca = _marca
     this.colore = _colore
     this.ruote = 4
    }
}

let mercedes = new Automobile('Mercedes', 'Nero')
let apino = new Automobile('Piaggio', 'bianca',)
apecar.ruote = 3;
