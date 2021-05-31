


function solve() {

   
   let button = document.querySelector('button#send');
   let inputElement = document.querySelector('textarea#chat_input');
   let chatHeadElement = document.querySelector('div#chat_messages');


   if (inputElement.value != ' ') {

      button.addEventListener('click', (ev) => {

      
         let mess = inputElement.value;
         let newDiv = document.createElement('div');
         newDiv.classList.add('message');
         newDiv.classList.add('my-message');
         newDiv.textContent = mess;

         chatHeadElement.appendChild(newDiv);
         inputElement.value = '';


      })
   }



}