const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    value: document.querySelector('#value'),
    increment: document.querySelector('[data-action="increment"]')
}

let counterValue = 0;

refs.decrement.addEventListener('click', onDecrement);
refs.increment.addEventListener('click', onIncrement);

function onDecrement(){
    counterValue -= 1;
    refs.value.textContent = counterValue;
};

function onIncrement(){
    counterValue += 1;
    refs.value.textContent = counterValue;
}

