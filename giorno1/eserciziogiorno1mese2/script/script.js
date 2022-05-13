let dataAttuale = new Date();
console.log(dataAttuale);

let giorno = dataAttuale.getDate()
console.log(giorno);

let mese = dataAttuale.getMonth()
console.log(mese);

let anno = dataAttuale.getFullYear()
console.log(anno);


mese++
let dataEuropea = '<br>' + giorno + '/' + 0 + mese + '/' + anno + '<br>'
document.write(dataEuropea)







function f(d) {
    let g = d.getDate()
    let m = d.getMonth() + 1
    let a = d.getFullYear()
    m = '0' + m 
    m = m.slice(-2)
    if(g <=9 ){
        g = '0' + g
    }
    return g + '/' + m + '/' + a
}

let oggi = new Date(1998,7,5)
let fe = f(oggi)
document.write(fe);