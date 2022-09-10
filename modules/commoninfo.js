// referencia de campos del formulario html
const highway   = document.querySelector('#highway'),
      inspector = document.querySelector('#inspector')
const campos    = [highway, inspector]

// expresiones regulares (nombre tramo, nombre inspector)
const regexHighway = new RegExp('^[a-zA-Z0-9- ]+$')
const regexInspector = new RegExp('^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$')

function validDataGeneral(){
    campos.forEach(campo => campo.addEventListener('blur', validation))
}

function validation(e){
    if(e.target.id === 'highway' && e.target.value.trim() && regexHighway.test(e.target.value) || 
    e.target.id === 'inspector' && e.target.value.trim() && regexInspector.test(e.target.value)) {
        e.target.nextElementSibling.classList.remove('error')
        e.target.classList.remove('no-valid')
        e.target.classList.add('validate')
        return 
    }
    e.target.nextElementSibling.classList.add('error')
    e.target.classList.remove('validate')
    e.target.classList.add('no-valid')
    return 
}

export default validDataGeneral