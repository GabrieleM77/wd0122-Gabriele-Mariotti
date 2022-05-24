// comando per sincornizzare tutti file: tsc script.ts classi.ts superclassi.ts --sourcemap --outfile app.js -w

class Car{

    public modello:string;
    public marca:string;
    public colore:string;
    

    protected prezzo:number
    protected scontoRivenditore:number = 30;


    constructor(mod:string, mar:string, col:string, p:number){
        this.modello = mod
        this.marca = mar
        this.colore = col
        this.prezzo = p

    }

    public dettagliAuto():string{
         return this.modello + " " + this.marca + " " + this .colore
    }
    public set cambiaScontoRivenditore(n:number){
    this.scontoRivenditore = n
    }
    public get prezzoFinale():string{
        return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100) + '$';
    }

    public static nazione(){
        console.log('Italia');
    
    }


}

let fiat = new Car('500', 'Fiat', 'grigio', 10000)

console.log(fiat.modello);
console.log(fiat.prezzoFinale);

//console.log(fiat.scontoRivenditore); non posso accedere alle propietà protected o private

fiat.cambiaScontoRivenditore = 20

console.log(fiat);

console.log(fiat.prezzoFinale);

// fiat.nazione()


Car.nazione()



