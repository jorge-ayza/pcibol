const tipoPavimento = document.querySelectorAll('input[name="pavement"]'),
      datosFlexible = document.querySelector('.c-pavementflex'),
      datosRigido   = document.querySelector('.c-pavementrig')
const formPavementFlex = document.querySelector('#formpavementflex'),
      formPavementRig  = document.querySelector('#formpavementrig')

window.addEventListener('load', () => {
    tipoPavimento.forEach( tipo => {
        tipo.checked = false
    })
})

function validTypePavement(){
    tipoPavimento.forEach( tipo => {
        tipo.addEventListener('change', e => {
            if(e.target.id === 'flexible'){
                datosFlexible.classList.add('active')
                datosRigido.classList.remove('active')
                formPavementFlex.reset()
            }
            if(e.target.id === 'rigido'){
                datosRigido.classList.add('active')
                datosFlexible.classList.remove('active')
                formPavementRig.reset()
            } 
        })
    })

}

export default validTypePavement