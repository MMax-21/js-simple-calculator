const controls = document.getElementsByClassName('btn');
const btnResult = document.getElementById('btnResult');
const btnReset = document.getElementById('btnReset');
const inputFitstValue = document.getElementById('firstValue');
const inputSecondValue = document.getElementById('secondValue');
const selectedAction = document.getElementById('selectedAction');
const fieldResult = document.getElementById('result');


let firstValue = 0;
let secondValue = 0
let action = '+';
selectedAction.innerHTML = action;

inputFitstValue.addEventListener('input', (e) => {
    firstValue = checkValue(e.currentTarget.value);
    e.currentTarget.value = firstValue;
})

inputSecondValue.addEventListener('input', (e) => {
    secondValue = checkValue(e.currentTarget.value);
    e.currentTarget.value = secondValue;
})

btnResult.addEventListener('click', () => {
    let result = calculate (firstValue, secondValue, action);
// if receves 'infinity', show infinity symbol
    if (result == 'infinity') {    
        fieldResult.innerHTML = `&infin;`;
    }
    else {
        fieldResult.innerHTML = result;
    }
// if recieves new number, setting it for first value to continue calculating 
// If recieves 'infinity' or any other string, makes nothing with first value.
    if (parseInt(result) + 0 == parseInt(result)) {
        firstValue = result;
        inputFitstValue.value = result;
    }
// Changing second value to 0
    secondValue = 0;
    inputSecondValue.value = '';

})

// resetting fields
btnReset.addEventListener('click', () => {
    fieldResult.innerHTML = 0;
    inputFitstValue.value = '';
    inputSecondValue.value = '';

})



for (let i = 0;  i < controls.length; i++) {
    const btn = controls[i];
    btn.addEventListener('click', (e) => {
        selectedAction.innerHTML = e.currentTarget.innerHTML;
        action = e.currentTarget.innerHTML;
    })
}

function checkValue(value) {
// if field is empty, setting it to 0
    if (value.length === 0) {
        return 0;
    }
    else {
// counting number of dots (for float numbers) in field value
        let dotCount = 0;
// starting position
        let position = 0;
// checking every symbol in string
        while (position < value.length) {
// number sign can be only in a first position
            if ((value[position] == '-' || value[position] == '+') && position == 0) {
                position++;
            }
// dot can be only one in field
            else if (value[position] == '.' && dotCount < 1) {
                position++;
                dotCount++;
            }
// if not a number, removing symbol
            else if (parseInt(value[position]) + 0 != parseInt(value[position])) {
                console.log('Not a number enterd at position:' + position);
                value = value.substring(0, position) + value.substring(position + 1, value.length);
            }
// changing position
            else {
                position++;
            }
            
        }
        return value;
    }

}

function calculate (x, y, action) {
// to make float calculations, getting numbers from strings
    x = parseFloat(x);
    y = parseFloat(y);

    let result = 0;
    switch (action) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
            case '/':
            if (y != 0) {
                result = x / y;
            }
            else {
                return 'infinity';
            }
            break;
        default:
            return 'operation unknown';
    }
// if float, leaving only 10 significant digits
    if (result % 1 != 0) result = (result).toFixed(10);
    return result;
}