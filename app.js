// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];
let intentos =0; 


function agregarAmigo(){
    let capturaNombre = document.getElementById("amigo").value;
        if (capturaNombre){
            Amigos.push(capturaNombre);
            console.log (`Nombre capturado: ${capturaNombre}`);
            limpiarCaja();
        } else {
            alert ("Pls, escribe un nombre");
        }  
    }
 function limpiarCaja (){
    let valorCaja = document.getElementById("amigo");
    valorCaja.value ="";
 }

 function sortearAmigo(){
    if(Amigos.length === 0){
        alert("No hay nombres :c");
        return;
    }

    let nombreGenerado = Math.floor(Math.random() * Amigos.length);
    let nombreGanador= Amigos[nombreGenerado];
    alert (`El nombre sorteado es: ${nombreGanador} `);

 }