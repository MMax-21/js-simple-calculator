const controls = document.getElementsByClassName('btn');
const btnResult = document.getElementById('btnResult');
const inputFitstValue = document.getElementById('firstValue');
const inputSecondValue = document.getElementById('secondValue');
const fieldResult = document.getElementById('result');


let firstValue = 0;
let secondValue = 0
let action = '+';

inputFitstValue.addEventListener('input', (e) => {
    if (e.currentTarget.value.length === 0) {
        firstValue = 0;
    }
    else {
        firstValue = parseInt(e.currentTarget.value);
    }
})

inputSecondValue.addEventListener('input', (e) => {
    if (e.currentTarget.value.length === 0) {
        secondValue = 0;
    }
    else {
        secondValue = parseInt(e.currentTarget.value);
    }
})

btnResult.addEventListener('click', () => {
    console.log(firstValue);
    console.log(secondValue);
    console.log(action);
    //calculate (firstValue, secondValue, action);
    fieldResult.innerHTML = calculate (firstValue, secondValue, action);
})

for (let i = 0;  i < controls.length; i++) {
    const btn = controls[i];
    btn.addEventListener('click', (e) => {
        action = e.currentTarget.innerHTML;
    })
}

function calculate (x, y, action) {
    switch (action) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if (y != 0) {
                return x / y;
            }
            return 'infinity';
                
    }
}