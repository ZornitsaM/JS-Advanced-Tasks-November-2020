function addItem() {



    
    let head = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let liElemeny = document.createElement('li');
    liElemeny.innerHTML = inputElement.value;
    head.appendChild(liElemeny);
    inputElement.value='';

  

}

