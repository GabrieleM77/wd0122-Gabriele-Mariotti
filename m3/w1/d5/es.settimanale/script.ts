interface Ismartphone{
    carica:number; //euro disponibili
    numeroChiamate:number; //numero di chiamate effettuate
    Ricarica(unaRicarica:number):void //ricarica il telefono
    chiamata(minutiDurata:number):void //effettua chiamata in minuti, aggiorna la carica e incrementa il numero di telefonate
    costoMinuti:number; //costo della telefonata al minuto 0.20
    numero404():number
    NumeroChiamate(numeroChiamateFatte:number):number
    azzeraChiamate():void
}

class Madre implements Ismartphone{

    carica:number = 10; //euro disponibili
    costoMinuti:number = 0.20;
    numeroChiamate:number = 0; //numero chiamate efettuate

    public Ricarica (unaRicarica:number):void{
        this.carica = this.carica + unaRicarica
    }

    public chiamata(minutiDurata:number):void{
    this.carica = this.carica - (minutiDurata * this.costoMinuti)
    this.numeroChiamate ++
    }

public numero404():number{
    return this.carica;
}

public NumeroChiamate():number{
    return this.numeroChiamate
}

public azzeraChiamate():void{
    this.numeroChiamate = 0
}

}

let madre = new Madre ();

madre.Ricarica(5)

madre.chiamata(5)

madre.numero404()

madre.NumeroChiamate()

//madre.azzeraChiamate()

console.table(madre);
console.log(madre.numero404());


class Padre implements Ismartphone{

    carica:number = 10; //euro disponibili
    numeroChiamate:number; //numero chiamate efettuate
    costoMinuti:number = 0.20;
    

    constructor(){
        this.numeroChiamate = 0
    }

    public Ricarica (unaRicarica:number):void{
        this.carica = this.carica + unaRicarica
    }

    public chiamata(minutiDurata:number):void{
    this.carica = this.carica - (minutiDurata * this.costoMinuti)
    this.numeroChiamate ++
    }

public numero404():number{
    return this.carica;
}

public NumeroChiamate():number{
    return this.numeroChiamate
}

public azzeraChiamate():void{
    this.numeroChiamate = 0
}

}

let padre = new Padre;
padre.Ricarica(8)

padre.chiamata(4)
padre.chiamata(20)

padre.numero404()

padre.NumeroChiamate()

//padre.azzeraChiamate()

console.table(padre);

class Figlio implements Ismartphone{

    carica:number = 10; //euro disponibili
    numeroChiamate:number; //numero chiamate efettuate
    costoMinuti:number = 0.20;
    

    constructor(){
        this.numeroChiamate = 0
    }

    public Ricarica (unaRicarica:number):void{
        this.carica = this.carica + unaRicarica
    }

    public chiamata(minutiDurata:number):void{
    this.carica = this.carica - (minutiDurata * this.costoMinuti)
    this.numeroChiamate ++
    
    }

public numero404():number{
    return this.carica;
}

public NumeroChiamate():number{
    return this.numeroChiamate
}

public azzeraChiamate():void{
    this.numeroChiamate = 0
}

}

let figlio = new Figlio;

figlio.Ricarica(10)

figlio.chiamata(5)
figlio.chiamata(7)
figlio.chiamata(3)

figlio.numero404()

figlio.NumeroChiamate()

//figlio.azzeraChiamate()

console.table(figlio);

function numero404(): any {
    throw new Error("Function not implemented.");
}
