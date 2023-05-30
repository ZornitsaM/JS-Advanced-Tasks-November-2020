function encodeAndDecodeMessages() {

    let btnFirst = document.querySelector('#main > div:nth-child(1) > button');
    let btnSecond = document.querySelector('#main > div:nth-child(2) > button');
    let messInput = document.querySelector('#main > div:nth-child(1) > textarea');
    let messoutput = document.querySelector('#main > div:nth-child(2) > textarea');

    btnFirst.addEventListener('click', () => {

        let encodedMess = '';
        let theText = messInput.value;
       
        for (let i = 0; i < theText.length; i++) {
            
            let num = theText[i].charCodeAt(0)+1;
            encodedMess += String.fromCharCode(ascii(`${theText[i]}`) + 1);
        }
        messInput.value = '';
        messoutput.value=encodedMess;
    })

    btnSecond.addEventListener('click', () => {

        let encryptedMess = '';
        let theText = messoutput.value;
        for (let i = 0; i < theText.length; i++) {

            let num = theText[i].charCodeAt(0) - 1;

            encryptedMess += String.fromCharCode(ascii(`${theText[i]}`) - 1);
        }
        messoutput.value = encryptedMess;
    })

function ascii(a) {
    return a.charCodeAt(0);
}
}

