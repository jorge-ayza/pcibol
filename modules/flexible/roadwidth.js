// referencia de campos del formulario html
const datainspection = document.querySelector('#date')
const roadwidth = document.querySelector('#roadwidth')

// Eventos
function validRoadwidth(){
    roadwidth.addEventListener('blur', validate)
    datainspection.addEventListener('blur', validateDate)
}

// Funciones
function validate(e){
    if((!e.target.value || e.target.value.trim() === '') || (!/^(\d{1,3}(\.\d{1,2})?)$/.test(e.target.value) && !/^(\d{1,3}?)$/.test(e.target.value))){
        e.target.nextElementSibling.classList.add('error')
        e.target.classList.remove('validate')
        e.target.classList.add('no-valid') 
        return 
    }

    e.target.nextElementSibling.classList.remove('error')
    e.target.classList.remove('no-valid')
    e.target.classList.add('validate')
    return 
}

function validateDate(e){
    if(!e.target.value || e.target.value.length <= 0){
        e.target.nextElementSibling.classList.add('error')
        e.target.classList.remove('validate')
        e.target.classList.add('no-valid') 
        return 
    }
    e.target.nextElementSibling.classList.remove('error')
    e.target.classList.remove('no-valid')
    e.target.classList.add('validate')
    return
}


export default validRoadwidth