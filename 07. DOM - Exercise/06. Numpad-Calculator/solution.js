function solve() {

    let expression = document.getElementById('expressionOutput');
    let result = document.getElementById('resultOutput');

    document.querySelector('.keys').addEventListener('click', symbolClicked);
    document.querySelector('.clear').addEventListener('click', clear);

    function clear() {

        expression.textContent = "";
        result.textContent = "";

    }


    function symbolClicked(event) {

        let buttonPressed = event.target.value;

        switch (buttonPressed) {

            case '/':
            case '*':
            case '+':
            case '-':

                expression.textContent += ` ${buttonPressed} `;
                break;


            case '=':
                let [left, operator, right] = expression.textContent.split(" ");

                if (!right || !operator) {

                    result.textContent = 'NaN';

                }

                else {
                    let result2=0;

                    switch (operator) {

                        case '*':
                            result2 = Number(left) * Number(right);
                            break;
                        case '/':
                            result2 = Number(left) / Number(right);
                            break;
                        case '+':
                            result2 = Number(left) + Number(right);
                            break;
                        case '-':
                            result2 = Number(left) - Number(right);
                            break;
                    }


                    result.textContent = result2;

                }
                break;

            default:
                expression.textContent += buttonPressed;


        }


    }



}

