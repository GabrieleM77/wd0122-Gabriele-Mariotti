//get si usa per chiamate in lettura e post per la creazione
//put/patch serve per aggiornare un dato gia esistente
//delete per eliminare un qualche oggetto

let richiesta = new XMLHttpRequest() //inizializzo l'oggetto (chiamare ajax)

richiesta.open('GET', 'https://sofin.wp-admin.it/public/api/v1/user' )

richiesta.onload = function(){
    //console.log(richiesta.response);
}


richiesta.send()//avvio la richiesta


fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json())
.then(data => {


for(let user of data){
let div = document.createElement('div');
div.innerHTML = user.name

document.querySelector('#target').append(div)
}
})


//JSON

let j = '{"name":"mario","eta":30}'

console.log(JSON.parse(j).name)//versione trasformata in oggetto

//per convertire un oggetto in stringa dovrei usare ///JSON.stringify(oggetto)

fetch('prova.json')
.then(data => data.json)
.then(data => console.log(data))











