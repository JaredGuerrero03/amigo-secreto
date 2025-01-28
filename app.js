// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let nombre = ""

function agregarAmigo (){
    nombre = document.getElementById("amigo").value
    if (nombre ===""){
        alert('Ingresa un nombre valido')
        borrarGanador()
    } else if (amigos.includes(nombre)) {
        alert('El nombre ya fue registrado')
    } else {
        amigos.push(nombre)
        agregarALaLista()
        borrarGanador()
    }
    console.log(amigos)
    limpiarDatos()
    return nombre
}

function limpiarDatos () { 
    document.querySelector("#amigo").value = ''
}

function agregarALaLista () {
    console.log(nombre)
    let unorderedList = document.querySelector('ul')
    let lista = document.createElement('li')
    lista.textContent = nombre
    unorderedList.appendChild(lista)   
}

function sortearAmigo ( ){
    if (!(amigos.length == 0)){
        let sorteador = Math.floor(Math.random()*amigos.length)
        console.log(sorteador)
        for (let i = 0;i<amigos.length;i++){
            if(sorteador == (i)){
                mostrarGanador (amigos[i])
            }
        }
        reiniciarJuego()
    } else {
        alert('Lista vacía, registra un amigo.')
    }
}

function reiniciarJuego () {
    let listaVacia = document.querySelector('ul')
    listaVacia.innerHTML=''
    amigos = []
}

function mostrarGanador (nombre) {
    let ganador = document.getElementById('resultado')
    let li = document.createElement('li')
    li.textContent = `¡El ganador es ${nombre}!`
    ganador.appendChild(li)
}

function borrarGanador (){
    let ganador = document.getElementById('resultado')
    ganador.innerHTML = ''
}