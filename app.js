// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];

function capturaDeNombres (){
    let capturaNombre = document.getElementById("amigo");
        if (capturaNombre == true){
            console.log (capturaNombre);
        } else {
            alert ("Pls, escribe un nombre");
        }
    Amigos.push(capturaNombre);
}

 function limpiarCaja (){
    let valorCaja = document.getElementById("amigo");
    valorCaja.value ="";
 }