const validacion = {
    longitud: {
        limite: 7,
        pass: false
    },
    numeros: {
        limite: 6,
        pass: false
    },
    caracter: {
        limite: 1,
        pass: false
    }
}

const progresiva = document.querySelector('#progresiva')

progresiva.addEventListener('input', e => {
    
    const capturado = e.target.value
    const arreglo = capturado.split('')

    validacion.longitud.pass = arreglo.length === validacion.longitud.limite
    validacion.numeros.pass = contarNumeros(arreglo) === validacion.numeros.limite
    validacion.caracter.pass = verificarCaracter(arreglo) === validacion.caracter.limite

    mostrarResutados()

})

function contarNumeros(arreglo){
    
    const numeros = arreglo.filter( elem => !isNaN(elem) ).map(elem => Number(elem))
    
    if(numeros.length === 6) return numeros.length

    return false

}

function verificarCaracter(arreglo){

    const caracter = arreglo.filter(elem => isNaN(elem))

    if(caracter.length > 1 && caracter.find(elem => elem !== '+')) return false

    if(arreglo.findIndex( elem => elem === '+') === 3) return caracter.length

}

function mostrarResutados() {
    const error = document.querySelector('.err-progresiva')
    
    if(validacion.longitud.pass && validacion.numeros.pass && validacion.caracter.pass){
        error.classList.remove('error')
    } else {
        error.classList.add('error')
    }

}