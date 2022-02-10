const refs = {
    input: document.querySelector('#validation-input')
}



const onInput = (event) =>{
    const value = event.target.value;
    const valueLength = event.target.dataset.length;
    
    if(Number(valueLength)  === value.length){
        refs.input.classList.remove('invalid'),
        refs.input.classList.add('valid')
    }else{
        refs.input.classList.add('invalid'),
        refs.input.classList.remove('valid')
    }
    

}
refs.input.addEventListener('blur', onInput);