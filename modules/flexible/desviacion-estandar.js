const dataDesviacion = {
    desviacionEstandar: {
        valor: null,
        pass: false
    }
}

const opciones = document.querySelector('#opciones')
const modal = document.querySelector('.modal')
const modalC = document.querySelector('.modal-container')
const cerrarM = document.querySelector('.close')
const tramos = document.querySelectorAll('input[name="tramo"]')

const errorDes = document.querySelector('.err-desviacion')

window.addEventListener('load', e => {
    opciones.value = 0
})

opciones.addEventListener('change', e => {
    if(e.target.value === '2'){
        abrirModal()
        tramos.forEach( tramo => {
            tramo.checked = false
            tramo.addEventListener('change', e => {
                if(e.target.checked){
                    const PCI = Number(e.target.parentElement.previousElementSibling.textContent)
                    const n = 15
                    const pciUnid = [76,68,69,82,70,61,59,52,74,84,53,72,51,65,62]

                    const sumatoria = pciUnid.reduce((acc , actl) => acc + ((Math.pow((actl - PCI), 2)) / (n - 1)), 0)
                    const s = Number(Math.sqrt(sumatoria).toFixed(2))
                    dataDesviacion.desviacionEstandar.valor = s
                    dataDesviacion.desviacionEstandar.pass = true
                    errorDes.classList.remove('error')
                    console.log(dataDesviacion);
                } 
            })
            errorDes.classList.add('error')
            dataDesviacion.desviacionEstandar.valor = null
            dataDesviacion.desviacionEstandar.pass = false
            
        })
        console.log(dataDesviacion);
    } else if ( e.target.value === '1'){
        errorDes.classList.remove('error')
        dataDesviacion.desviacionEstandar.valor = 10
        dataDesviacion.desviacionEstandar.pass = true
        console.log(dataDesviacion);
    } else {
        dataDesviacion.desviacionEstandar.valor = null
        dataDesviacion.desviacionEstandar.pass = false
        console.log(dataDesviacion);
        errorDes.classList.add('error')
    }
})
cerrarM.addEventListener('click', e => {
    e.preventDefault()
    modal.style.opacity = '0'
    modal.style.visibility = 'hidden'
})


// FUNCIONES
function abrirModal(){
    modal.style.opacity = '1'
    modal.style.visibility = 'visible'
}