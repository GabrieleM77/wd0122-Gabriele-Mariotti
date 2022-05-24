"use strict";
// comando per sincornizzare tutti file: tsc script.ts classi.ts superclassi.ts --sourcemap --outfile app.js -w
class Car {
    constructor(mod, mar, col, p) {
        this.scontoRivenditore = 30;
        this.modello = mod;
        this.marca = mar;
        this.colore = col;
        this.prezzo = p;
    }
    dettagliAuto() {
        return this.modello + " " + this.marca + " " + this.colore;
    }
    set cambiaScontoRivenditore(n) {
        this.scontoRivenditore = n;
    }
    get prezzoFinale() {
        return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100) + '$';
    }
    static nazione() {
        console.log('Italia');
    }
}
let fiat = new Car('500', 'Fiat', 'grigio', 10000);
console.log(fiat.modello);
console.log(fiat.prezzoFinale);
//console.log(fiat.scontoRivenditore); non posso accedere alle propietà protected o private
fiat.cambiaScontoRivenditore = 20;
console.log(fiat);
console.log(fiat.prezzoFinale);
// fiat.nazione()
Car.nazione();
//enumeratori
var Months;
(function (Months) {
    Months[Months["Gennaio"] = 1] = "Gennaio";
    Months[Months["Febbraio"] = 2] = "Febbraio";
    Months[Months["Marzo"] = 3] = "Marzo";
    Months[Months["Aprile"] = 4] = "Aprile";
})(Months || (Months = {}));
console.log(Months.Gennaio, Months[1]);
console.log(Months.Aprile);
console.log(Months);
var Color;
(function (Color) {
    Color["Bianco"] = "#fff";
    Color["Nero"] = "#000";
})(Color || (Color = {}));
let colore = Color.Bianco;
// funzioni e oggetti
const states = {
    italy: 'Rome',
    england: 'London',
    id: function () {
        return this.italy + ' ' + this.england;
    }
};
console.log(states.italy, states.england, states.id());
function somma(a, b, c) {
    if (!c) {
        return a + b;
    }
    else {
        return a + b + c;
    }
}
class Veicoli {
    constructor(ruote, marca, modello, prezzo, tipo) {
        this.ruote = ruote;
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.tipo = tipo;
    }
    dettagliVeicolo() {
        return `Modello: ${this.modello}, Marca: ${this.marca}, Ruote:${this.ruote}`;
    }
}
let apecar = new Veicoli(4, 'Piaggio', '', 1500, 'apecar');
class Cars extends Veicoli {
    constructor(marca, modello, prezzo) {
        super(4, marca, modello, prezzo, 'Automobile');
    }
}
let auto = new Cars('Fiat', '500', 1500);
console.log(auto);
//# sourceMappingURL=app.js.map