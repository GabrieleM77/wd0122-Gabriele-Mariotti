function calcolaAnni(compleanno){
    return 2022 - compleanno;
}
alert(calcolaAnni (1998) )

const anni = calcolaAnni(1998);
console.log(anni);



const pensionamento = (compleanno, nome) =>{
    const eta = 2022 - compleanno;
    const anniPensione = 70 - eta;
    //return anniPensione;
    return `${nome} va in pensione tra ${anniPensione} anni`;

    
}

console.log(pensionamento(1998, 'Gabriele'));
console.log(pensionamento(1987, 'Chiara'));

function tagliaFette(torta) {
    return torta * 3;
}

function scegliTorta(mela, arancia) {
    const fetteMela = tagliaFette(mela);
    const fetteArancia = tagliaFette(arancia);

    const torta = `Torta con ${fetteMela} fette di mela e ${fetteArancia} fette di arancia.`;
    return torta;
}

console.log(scegliTorta(3, 5));

const calcolaSpesa = function(conto) {
    return conto >= 50 && conto <= 300 ? conto * 0.15 : conto * 0.2;
}

console.log(calcolaSpesa(320));