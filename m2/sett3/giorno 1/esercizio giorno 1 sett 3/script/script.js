function aggiungi(){
    let n = document.querySelector('#nome').value
    let c = document.querySelector('#cognome').value
    let dn = document.querySelector('#nascita').value
    let utente = new Utente(n, c, dn)
    utente.aggiungiAllaPagina()
}


//inserire utente nelLA TABELLA

class Utente{
    constructor(n, c, dn){
        this.nome = n
        this.cognome = c
        this.nascita = new Date (dn)
    }

    getFullName(){
        return this.nome + '' + this.cognome
    }

    getEta(){
        let oggi = new Date()
        oggi = oggi.getFullYear()
        
        return oggi - this.nascita.getFullYear()
    }
    aggiungiAllaPagina(){
        let row = document.createElement('div')
        row.classList.add('row')
        let colNome = document.createElement('div')
        colNome.classList.add('col')
        let colEta = document.createElement('div')
        colEta.classList.add('col')

        colNome.innerText= this.getFullName()
        colEta.innerText = this.getEta()

        row.append(colNome, colEta)

        document.querySelector('#table').append(row)
    }

}

