const refs = {
    form: document.querySelector('.login-form')
}

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = {};

    let isValid = true;
    formData.forEach((element, name) => {
        if(!element){
            isValid = false;
             alert('Eror') ;
        }else{
            result[name] = element;
            
        }
    });

    if(!isValid){
        return
    }
    
    console.log(result)
    event.target.reset()

}
