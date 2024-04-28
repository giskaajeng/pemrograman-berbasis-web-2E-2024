function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;

    let result;
    switch(operator) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            result = number1 / number2;
            break;
        case 'modulo':
            result = number1 % number2;
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('result').innerText = `Hasil: ${result}`;
}
