function solve() {

    let sections = document.querySelectorAll('section');
    let trainingDiv = sections.item(0).querySelector('div');
    let administartionDiv = sections.item(1).querySelector('form');

    let lectureNameDiv = administartionDiv.querySelectorAll('div')[0];
    let dateNameDiv = administartionDiv.querySelectorAll('div')[1];
    let moduleNameDiv = administartionDiv.querySelectorAll('div')[2];
    let btnDiv = administartionDiv.querySelectorAll('div')[3];
    let btn = btnDiv.querySelector('button')



    let inputType = lectureNameDiv.querySelector('input');
    let dateType = dateNameDiv.querySelector('input');
    let moduleTypes = moduleNameDiv.querySelector('select');


    btn.addEventListener('click', addTask);


    function addTask(e) {

        e.preventDefault();

        let inputText = inputType.value;
        let dateText = dateType.value;
        let modulText = moduleTypes.value;

        if(inputText!='' && dateText!=''&& modulText!='Select module'){


            modulText = (moduleTypes.value).toUpperCase();
            let onlyDate = dateText.split('T')[0];
            let onlyHour = dateText.split('T')[1];
            
    
            let splittedDate = onlyDate.split('-')
    
    
            let divElement = document.createElement('div');
            let h3Element = document.createElement('h3');
            let liElement = document.createElement('li');
            let ulElement = document.createElement('ul');
            let h4Element = document.createElement('h4');
            let buttonElement = document.createElement('button');
    
            h3Element.textContent = `${modulText}-MODULE`;
            divElement.className = 'module';
    
            h4Element.textContent = `${inputText} - ${splittedDate[0]}/${splittedDate[1]}/${splittedDate[2]} - ${onlyHour}`;
            buttonElement.textContent = 'Del';
            buttonElement.className = 'red';
    
            liElement.appendChild(h4Element);
            liElement.appendChild(buttonElement);
            liElement.className ='flex';
           
            ulElement.appendChild(liElement);
            
    
            divElement.appendChild(h3Element);
            divElement.appendChild(ulElement);
    
    
            trainingDiv.appendChild(divElement);
    
            inputType.value='';
            dateType.value=''
            moduleTypes.value=''
    
    
            buttonElement.addEventListener('click', () => {
    
                
                liElement.remove();

                if(divElement.childElementCount==2){

                    divElement.remove();
                }


    
    
            })

        }
       
    }


};