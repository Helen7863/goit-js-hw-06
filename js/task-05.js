const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
};

const onInput = ( ) => {
    console.log('input')

    const userName = refs.input.value ? refs.input.value : "Anonymous";
    
    refs.output.textContent = userName;
};

refs.input.addEventListener('input', onInput);