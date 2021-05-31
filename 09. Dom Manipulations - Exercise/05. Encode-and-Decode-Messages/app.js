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


// function encodeAndDecodeMessages() {

//     let encodeBtn = document.querySelectorAll('button')[0];
//     let dencodeBtn = document.querySelectorAll('button')[1];
//     let messageInput = document.querySelectorAll('textarea')[0];
//     let messageOutput = document.querySelectorAll('textarea')[1];

//     encodeBtn.addEventListener('click', encodeMessages);
//     dencodeBtn.addEventListener('click', decodeMessages);

//     function encodeMessages() {

//         let theText = messageInput.value;
//         let encodedMessage = '';
//         for (let i = 0; i < theText.length; i++) {
//             encodedMessage += String.fromCharCode(ascii(`${theText[i]}`) + 1);
//         }
//         messageInput.value = '';
//         messageOutput.value = encodedMessage;
//     }

//     function decodeMessages() {
//         let theText = messageOutput.value;
//         let decodedMessage = '';
//         for (let i = 0; i < theText.length; i++) {
//             decodedMessage += String.fromCharCode(ascii(`${theText[i]}`) - 1);
//         }
//         messageOutput.value = decodedMessage;
//     }

//     function ascii(a) {
//         return a.charCodeAt(0);
//     }
// }