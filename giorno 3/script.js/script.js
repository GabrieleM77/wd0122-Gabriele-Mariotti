if(localStorage.getItem("nome")){
    document.querySelector("p").innerHTML = "Ciao, " + localStorage.getItem("nome")
}

document.getElementById("login").addEventListener("click", function () {

    let nome = document.getElementById("nome").value

    localStorage.setItem("nome", nome)

    document.querySelector("p").innerHTML = "Ciao, " + nome
})


document.querySelector("#logout").addEventListener("click", function(){
    localStorage.removeItem("nome")
    document.querySelector("p").innerHTML = "Effettua il login"
})


let t = 0

        if(sessionStorage.getItem("tempo")){
            t = sessionStorage.getItem("tempo")
        }


        setInterval(function(){
            t++
            sessionStorage.setItem("tempo", t)
            document.getElementById("tempo").innerHTML = t
        }, 1000)
