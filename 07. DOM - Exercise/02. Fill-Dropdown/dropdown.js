function addItem() {

    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');

    let menuElement = document.getElementById('menu');
    let optionElement = document.createElement('option');
    optionElement.value=inputValue.value;
    optionElement.innerText=inputText.value;
    
    menuElement.appendChild(optionElement);

    inputText.value=' ';
    inputValue.value=' ';
}