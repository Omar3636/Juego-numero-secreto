let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximoIntentos = 4;  

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (intentos == maximoIntentos) {
        asignarTextoElemento('p', 'Se han terminado tus intentos :(');
        document.querySelector('#reiniciar').removeAttribute("disabled");
        document.getElementById('intentos').setAttribute('disabled', true);

    } else {
        if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Felicidades, acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentos').setAttribute('disabled', true);
        } else { 
            //El usuario no acertó.
            if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
            } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
            }
        }
     intentos++;
     limpiarCaja();
    return;
    }
}


function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números.
    if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se asignaron todos los números posibles.');
    } else {
        //Si el número generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return  numeroGenerado;
        }
    }
}

function limpiarCaja () {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja.
    limpiarCaja();
    //Restablecer mensaje inicial.
    //Generar nuevo número secreto.
    //Restablecer número de intentos.
    condicionesIniciales();
    //Deshabilitar botón reiniciar Juego.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    document.querySelector('#intentos').removeAttribute('disabled');
}

condicionesIniciales();

let frutas = ["Manzana", "Uva", "Naranja"];
console.log(frutas);
frutas.pop();
console.log(frutas);