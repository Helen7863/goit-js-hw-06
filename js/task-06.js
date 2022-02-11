const refs = {
    input: document.querySelector('#validation-input')
}



const onInput = (event) =>{
    const value = event.target.value;
    const valueLength = event.target.dataset.length;
    
    if(Number(valueLength)  === value.length){
        classList('valid', 'invalid')
    }else{
        classList('invalid', 'valid')
    

}}

function classList( a, b){
    refs.input.classList.remove(b),
    refs.input.classList.add(a)
}
refs.input.addEventListener('blur', onInput)