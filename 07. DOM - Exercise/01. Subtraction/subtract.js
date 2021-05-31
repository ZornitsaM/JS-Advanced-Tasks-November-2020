function subtract() {

    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;

    firstNumber=Number(firstNumber);
    secondNumber=Number(secondNumber);

    let resultNumber = document.getElementById('result');
    resultNumber.innerHTML=firstNumber-secondNumber;
    console.log(resultNumber.innerText)
 
}