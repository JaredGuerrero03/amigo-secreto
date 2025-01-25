// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let nombre = ""

function agregarAmigo (){
    nombre = document.getElementById("amigo").value
    if (nombre ===""){
        alert('Ingresa un nombre valido')
    } else if (amigos.includes(nombre)) {
        alert('El nombre ya fue registrado')
    } else {
        amigos.push(nombre)
    }
    console.log(amigos)
    
    agregarALaLista()
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