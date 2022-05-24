
let a = true;
while(a){
    for(let i=0; i<90; i++){
        numeroCasuale = Math.floor(Math.random()*99 + 1);
    }
    alert('cerca di indovinare il numero, chi lo indovina o ci si avvicina di più vince');
    let player1 = prompt("Giocatore1, scrivi un numero:");
    let player2 = prompt("Giocatore2, scrivi un numero:");
    if(player1 == numeroCasuale){
        alert("Giocatore1 numero esatto");
    }
    else{
        scarto1 = Math.abs(numeroCasuale - player1);
    }
    if(player2 == numeroCasuale){
        alert("Giocatore2 numero esatto!!");
    }
    else{
        scarto2 = Math.abs(numeroCasuale - player2);
    }
    if(scarto1 < scarto2){
        alert("Nessuno dei due ha azzeccato il numero casuale, ma il player1 si è avvicinato di più! il numero era " + numeroCasuale);
    }
    else{
        alert("Nessuno dei due ha azzeccato il numero casuale, ma il player2 si è avvicinato di più! il numero era " + numeroCasuale);
    }
    a = confirm("Vuoi giocare di nuovo?");
}
