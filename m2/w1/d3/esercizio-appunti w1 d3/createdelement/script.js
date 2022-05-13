

//con create element genero un elemento un html in memoria e lo metto nella variabile assegnata
//IN NESSUN MODO QUESTO METODO MOSTRA IL TAG NELL'HTML, ce ne servirà un altro
let div = document.createElement('div');//<div></div> mi sta creando un elemento html
div.innerHTML = 'test'
div.classList.add('classeProva')

let div2 = document.createElement('div');
div2.innerHTML = 'test2'
div.classList.add('classeprova')

document.querySelector("#html-generato").append(div)
document.querySelector("#html-generato").prepend(div2)


//TO DO LIST


let bottone = document.querySelector('#inserisci')
let toDoArea = document.querySelector('#to-do')

let x = 1;

bottone.addEventListener('click', function(){

   
//genero l'elemento e gli do una classe
let todoWrap = document.createElement('div')
todoWrap.classList.add('todo')


//prelevo il testo dal campo input e lo inserisco nel div appena generato
let testo = document.querySelector('#testo')
todoWrap.innerText = x + ' ' + testo.value
x++;

//creo un bottone che mi servirà per eliminare il todo
                 let close = document.createElement('button')
                 //gli do una classe per lo stile (css successivo)
                close.classList.add('closeButton')
                //inserisco il testo del bottone
                close.innerText = 'elimina'

close.addEventListener('click', function(){
    //due modi per fare la stessa funzione di elimina
    todoWrap.remove()
    //close.parentNode.remove()
})



//inserisco il bottone generato dentro all'elemento creato
                 todoWrap.append(close)



//faccio si che l'elemento genrato venga mostrato
toDoArea.append(todoWrap)

//svuotare il campo

testo.value = ''

})

