const refs ={
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text')
}

refs.input.addEventListener('input', onInput);

function onInput(event){
     event.target.valu
    refs.span.style.fontSize =`${ event.target.value}px` 
}