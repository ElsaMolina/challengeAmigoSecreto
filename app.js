// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function capturaDeNombres (){
    let capturaNombre = document.getElementById("amigo")
        if (capturaNombre == true){
            console.log (capturaNombre);
        } else {
            alert ("Pls, escribe un nombre");
        }
    listaAmigos.push(capturaNombre)
}
