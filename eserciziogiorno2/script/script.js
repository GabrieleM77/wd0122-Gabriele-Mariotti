
function pagamento(pag) {
    document.write("<br>Pagamento:", pag);
    budget -= pag
    if(budget < budgetIniziale && !superataMeta){
        document.write("Attenzione hai superato metà budget")
        superataMeta = true
    }
    document.write("<br>Budget:", budget);
}

let budget = prompt("Inserire il budget")
let budgetIniziale = budget/2

superataMeta = false

let p = Math.floor(Math.random()* 150)

document.write("<br>Budget iniziale:", budget);
document.write("<br><br>")




while(budget >= p){
    pagamento(p)
    p = Math.floor(Math.random()* 150)
}
if(budget == 0){
    document.write("<br> Hai terminato il budget")
}else{
    document.write("<br>Non hai abbastanza credito per il prossimo acquisto")
}



