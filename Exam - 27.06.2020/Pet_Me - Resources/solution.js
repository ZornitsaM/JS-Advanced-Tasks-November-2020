function solve() {

    let firstSection = document.getElementById('adoption');
    let secondSection = document.getElementById('adopted');

    let firstULToAtached = firstSection.querySelector('ul');
    let secondULToAttached = secondSection.querySelector('ul');

    let container = document.getElementById('container');
    let name = document.querySelectorAll('input')[0];
    let age = document.querySelectorAll('input')[1];
    let kind = document.querySelectorAll('input')[2];
    let currentOwner1 = document.querySelectorAll('input')[3];

    container.querySelector('button').addEventListener('click', addTask);

    function addTask(e) {

        e.preventDefault();
        let nameText = name.value.trim();
        let ageText = age.value.trim();
        let kindText = kind.value.trim()
        let currentOwnerText = currentOwner1.value.trim();
        let button = el('button', 'Contact with owner');
        let secondButton = el('button', 'Yes! I take it!');
        let chekedFinalButton = el('button', 'Checked');
        let elementPLACEHOLDER = el('input', '', { placeholder: 'Enter your names' })

        if (nameText != '' && kindText != '' && currentOwnerText != '' && !isNaN(Number(ageText)) && ageText.trim() != '') {

            let currentOwner = el('span', `Owner: ${currentOwnerText}`);
            let task = el('li', [

                el('p', [
                    el('strong', nameText),
                    ' is a ',
                    el('strong', ageText),
                    ' year old ',
                    el('strong', kindText),
                ]),
                currentOwner,
                button
            ])

            firstULToAtached.appendChild(task);
            name.value = '';
            age.value = '';
            kind.value = '';
            currentOwner1.value = '';

            button.addEventListener('click', (e) => {
                e.preventDefault();

                let addDiv = el('div', [
                    elementPLACEHOLDER,
                    secondButton
                ])

                button.remove();

                task.appendChild(addDiv);

                secondButton.addEventListener('click', () => {

                    if(elementPLACEHOLDER.value!=''){
                        currentOwner.remove();
                        addDiv.remove();
                        task.appendChild(el('span', `New Owner: ${elementPLACEHOLDER.value}`))
                        task.appendChild(chekedFinalButton);
    
                        secondULToAttached.appendChild(task);
                    }
                })

                chekedFinalButton.addEventListener('click', () => {
                    task.remove();
                })
            })
        }
    }

    function el(type, content, attributes) {

        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes);
        }
        if (Array.isArray(content)) {
            content.forEach(append);
        }
        else {
            append(content);
        }

        function append(node) {

            if (typeof node === 'string' || typeof node === 'number') {

                node = document.createTextNode(node);
            }
            result.appendChild(node);
        }
        return result;
    }
}