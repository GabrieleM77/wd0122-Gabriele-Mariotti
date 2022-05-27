"use strict";
class Madre {
    constructor() {
        this.carica = 10; //euro disponibili
        this.costoMinuti = 0.20;
        this.numeroChiamate = 0; //numero chiamate efettuate
    }
    Ricarica(unaRicarica) {
        this.carica = this.carica + unaRicarica;
    }
    chiamata(minutiDurata) {
        this.carica = this.carica - (minutiDurata * this.costoMinuti);
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    NumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let madre = new Madre();
madre.Ricarica(5);
madre.chiamata(5);
madre.numero404();
madre.NumeroChiamate();
//madre.azzeraChiamate()
console.table(madre);
console.log(madre.numero404());
class Padre {
    constructor() {
        this.carica = 10; //euro disponibili
        this.costoMinuti = 0.20;
        this.numeroChiamate = 0;
    }
    Ricarica(unaRicarica) {
        this.carica = this.carica + unaRicarica;
    }
    chiamata(minutiDurata) {
        this.carica = this.carica - (minutiDurata * this.costoMinuti);
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    NumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let padre = new Padre;
padre.Ricarica(8);
padre.chiamata(4);
padre.chiamata(20);
padre.numero404();
padre.NumeroChiamate();
//padre.azzeraChiamate()
console.table(padre);
class Figlio {
    constructor() {
        this.carica = 10; //euro disponibili
        this.costoMinuti = 0.20;
        this.numeroChiamate = 0;
    }
    Ricarica(unaRicarica) {
        this.carica = this.carica + unaRicarica;
    }
    chiamata(minutiDurata) {
        this.carica = this.carica - (minutiDurata * this.costoMinuti);
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    NumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let figlio = new Figlio;
figlio.Ricarica(10);
figlio.chiamata(5);
figlio.chiamata(7);
figlio.chiamata(3);
figlio.numero404();
figlio.NumeroChiamate();
//figlio.azzeraChiamate()
console.table(figlio);
function numero404() {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=app.js.map