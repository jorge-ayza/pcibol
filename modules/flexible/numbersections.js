const dataSecciones = {
    longTramo:{
        valor: null,
        pass: false
    },
    numSecc: {
        valor: null,
        pass: false
    }, 
    longSeccion: {
        valor: [],
        pass: false
    },
    longTotalSecc: {
        valor: null,
        pass: false
    }
}
const longTramo = document.querySelector('#longTramo')
const numSecc   = document.querySelector('#numSecc')
const longSecc  = document.querySelectorAll('.longitud-seccion')
const editarSecc = document.querySelector('#editarSecc')
const containerSecc = document.querySelector('#containerSecc')
const errorSecc     = document.querySelectorAll('span')

window.addEventListener('load', () => editarSecc.disabled = true)

longSecc.forEach( elem => {
    elem.addEventListener('input', e => {
        containerSecc.textContent = ''
        editarSecc.checked = false
        
        if(elem === longTramo){
            const ER = /^(\d{1,3}(\.\d{1,2})?)$/

            if(ER.test(e.target.value) && Number(e.target.value) > 0) {
                dataSecciones.longTramo.valor = Number(e.target.value)
                dataSecciones.longTramo.pass = true
                mensajeError()
                
            } else {
                dataSecciones.longTramo.valor = false
                dataSecciones.longTramo.pass = false
                editarSecc.checked = false
                mensajeError(e.target.parentElement.getAttribute('id'))
            }
        } else if(elem === numSecc) {
            const ER = /^(\d{1,2})$/
    
            if(ER.test(e.target.value) && Number(e.target.value) > 0) {
                dataSecciones.numSecc.valor = Number(e.target.value)
                dataSecciones.numSecc.pass = true
                mensajeError()
            } else {
                dataSecciones.numSecc.valor = false
                dataSecciones.numSecc.pass = false
                mensajeError(e.target.parentElement.getAttribute('id'))
                editarSecc.checked = false
            }
        }

        if(dataSecciones.longTramo.valor && dataSecciones.numSecc.valor) {
            const resultado = dataSecciones.longTramo.valor / dataSecciones.numSecc.valor
            editarSecc.disabled = false
            dataSecciones.longSeccion.valor = []

            if(resultado !== 0) {
                for(let i = 1; i <= dataSecciones.numSecc.valor; i++){
                    const seccion = document.createElement('input')
                    seccion.value = resultado.toFixed(2)
                    seccion.disabled = true
                    seccion.classList.add('seccion')
                    seccion.setAttribute('type', 'text')
                    containerSecc.appendChild(seccion)
                    
                    dataSecciones.longSeccion.valor.push(Number(seccion.value))
                    dataSecciones.longSeccion.pass = true

                    dataSecciones.longTotalSecc.valor = dataSecciones.longSeccion.valor.reduce((acc, actl) => acc + actl, 0)
                    dataSecciones.longTotalSecc.pass = true
                }
            }
            
        } else {
            editarSecc.disabled = true
        }

    })
})

editarSecc.addEventListener('change', e => {
    const seccion = document.querySelectorAll('.seccion')
    
    if(e.target.checked){
        seccion.forEach( secc => {
            secc.disabled = false
        })
        
        seccion.forEach((secc, i) => {
            secc.addEventListener('input', e => {
                dataSecciones.longSeccion.valor[i] = Number(e.target.value)
                dataSecciones.longTotalSecc.valor = dataSecciones.longSeccion.valor.reduce((acc, actl) => acc + actl, 0)
                if(dataSecciones.longTotalSecc.valor === dataSecciones.longTramo.valor){
                    dataSecciones.longTotalSecc.valor = dataSecciones.longSeccion.valor.reduce((acc, actl) => acc + actl, 0)
                    dataSecciones.longTotalSecc.pass = true
                    mensajeError()
                } else {
                    dataSecciones.longTotalSecc.valor = null
                    dataSecciones.longTotalSecc.pass = false
                    mensajeError('secciones')
                }

                console.log(dataSecciones);
            })
        })
        
    } else {
        seccion.forEach( secc => {
            secc.disabled = true
        })
    }
})


// FUNCIONES
function mensajeError(id){
    errorSecc.forEach( err => {
        if(err.parentElement.getAttribute('id') === id){
            err.classList.add('error')
        } else {
            err.classList.remove('error')
        }
    })
}