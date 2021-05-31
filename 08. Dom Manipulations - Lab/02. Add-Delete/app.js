function addItem() {


    let whereToAtach = document.getElementById('items');
    let inputElement = document.getElementById('newText');

    let liElement = document.createComment('li');
    liElement.innerHTML = `${inputElement.value}`;
    let deleteElement = document.createElement('span');
    deleteElement.innerText='Delete';
    liElement.innerHTML=deleteElement;
    whereToAtach.appendChild = liElement;

    inputElement.value='';

}