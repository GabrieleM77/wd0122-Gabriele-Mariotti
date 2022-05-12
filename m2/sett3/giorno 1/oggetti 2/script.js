class Automobile{
    constructor(_marca, _colore){
     this.marca = _marca
     this.colore = _colore
     this.ruote = 4
     this.prezzo = 10000
    }
    sconto(percentuale){
        this.prezzo = (this.prezzo/100) * (100 - percentuale)
    }
}

let mercedes = new Automobile('Mercedes', 'Nero')

console.log(mercedes);
mercedes.sconto(40)
console.log(mercedes);