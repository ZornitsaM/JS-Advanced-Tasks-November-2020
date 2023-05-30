function deleteByEmail() {

    let inputElement =document.querySelector('input')
    let enteredEmail = inputElement.value;
    let customers = document.querySelectorAll('tbody tr td:nth-of-type(2)');
             
    let isFOUND = false;          
    let result = document.getElementById('result');
    for (const customerEmail of customers) {
        
        if(customerEmail.textContent==enteredEmail){
            customerEmail.parentElement.remove();
            isFOUND=true;
        }
    }

    if(!isFOUND){
       result.textContent="Not Found";
    }
    else{
        result.textContent="Deleted";
    }














}