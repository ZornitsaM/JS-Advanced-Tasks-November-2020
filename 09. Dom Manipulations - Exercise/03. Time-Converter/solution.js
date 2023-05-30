function attachEventsListeners() {

    let days = document.querySelector('#days');
    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');

    let daysButton = document.querySelector('#daysBtn');
    let hoursButton = document.querySelector('#hoursBtn');
    let minutesButton = document.querySelector('#minutesBtn');

    let secondsButton = document.getElementById('secondsBtn');

    daysButton.addEventListener('click',()=> {convert(+days.value*86400)});
    hoursButton.addEventListener('click',()=> {convert(+hours.value*3600)});
    minutesButton.addEventListener('click',()=> {convert(+minutes.value*60)});
    secondsButton.addEventListener('click',()=> {convert(+seconds.value)});
    
    function convert(sec) {

        let day = sec / (24 * 60 * 60);
        let hour = sec / (60 * 60);
        let min = sec / 60;
        //let secs = sec%60;
        days.value = day;
        hours.value = hour;
        minutes.value = min;
        seconds.value=sec;
    }
}