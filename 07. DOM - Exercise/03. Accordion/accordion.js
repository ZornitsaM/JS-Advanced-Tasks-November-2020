function toggle() {

    let element = document.getElementsByClassName('button')[0];
    let divExtra = document.getElementById('extra');

    if (element.textContent=="More"){
        element.textContent="Less";
        divExtra.style.display="block";
    }
    else{
        element.textContent="More";
        divExtra.style.display="none";
    }
}