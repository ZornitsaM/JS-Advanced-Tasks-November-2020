function solve() {

    let input = document.getElementsByTagName('input')[0];
    let button = document.getElementsByTagName("button")[0];
    
    let obj = {
        'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13,
        'O': 14, 'P': 15, 'Q': 16, 'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24, 'Z': 25
    };

    button.addEventListener('click', () => {

        let array = document.getElementsByTagName('ol')[0].children;
        let currentName = input.value[0].toUpperCase() + input.value.slice(1).toLocaleLowerCase();
        let capitalLetter = currentName[0];

        let index = obj[capitalLetter];
        let currentElement = array[index];

        if (currentElement.innerText == ''){
            currentElement.innerText = currentName;
        }
        else{
            currentElement.innerText += ', '+ currentName;
        }
    });
}