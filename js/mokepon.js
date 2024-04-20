function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
botonMascotaJugador.addEventListener('click', seleccionarMastocaJugador)
}

function seleccionarMastocaJugador(){
    let inputKatara = document.getElementById('Katara')
    let inputToph = document.getElementById('Toph')
    let inputZuko = document.getElementById('Zuko')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputKatara.checked){
        spanMascotaJugador.innerHTML = 'katara'
    }else if(inputToph.checked){
        spanMascotaJugador.innerHTML = 'Toph'
    }else if(inputZuko.checked){
        spanMascotaJugador.innerHTML = 'Zuko'
    }else{
        alert('selecciona una mascota')
    }
    

}

window.addEventListener('load', iniciarJuego)