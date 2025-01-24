// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let nombre = ""
console.log(nombre)


function agregarAmigo (){
    nombre = document.getElementById("amigo").value
    if (nombre ===""){
        alert('Ingresa un nombre valido')
    } else {
        amigos.push(nombre)
    }
    console.log(amigos)
    limpiarDatos()
}

function limpiarDatos () {
    document.querySelector("#amigo").value = ''
}
