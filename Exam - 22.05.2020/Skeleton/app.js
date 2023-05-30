function solve(){

    let sections = document.querySelectorAll('section');

    let openDiv = sections.item(1).querySelectorAll('div').item(1);
    let progressDiv = sections.item(2).querySelectorAll('div').item(1);
    let finishedDiv = sections.item(3).querySelectorAll('div').item(1);

    let inputField = document.getElementById('task');
    let descField = document.getElementById('description');
    let dateField = document.getElementById('date');

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(e){

        e.preventDefault();

        let startButton = el('button','Start',{className: 'green'});
        let deleteButton = el('button','Delete',{className: 'red'});
        let finishButton = el('button','Finish',{className: 'orange'});

        let divButtons = el('div',[

            startButton,
            deleteButton
        ],{className:'flex'})

        if(inputField.value!='' && descField.value!=''&& dateField.value!=''){

            let domElement = el('article',[

                el('h3',inputField.value),
                el('p',`Description: ${descField.value}`),
                el('p',`Due Date: ${dateField.value}`),

                divButtons
            ]);

            openDiv.appendChild(domElement);

            startButton.addEventListener('click',()=>{

                progressDiv.appendChild(domElement);
                startButton.remove();
                divButtons.appendChild(finishButton);
            })

            deleteButton.addEventListener('click',()=>{
                domElement.remove();
            })

            finishButton.addEventListener('click',()=>{

                finishedDiv.appendChild(domElement);
                divButtons.remove();
            })
        }
    }

    function el(type,content,attributes){

        const result = document.createElement(type);
        
        if(attributes!==undefined){
            Object.assign(result,attributes);
        }
        if(Array.isArray(content)){
            content.forEach(append);
        }
        else{
            append(content);
        }
        
        function append(node){
        
            if(typeof node==='string' || typeof node==='number'){
        
                node=document.createTextNode(node);
            }
            result.appendChild(node);
        }
        return result;
        }
}