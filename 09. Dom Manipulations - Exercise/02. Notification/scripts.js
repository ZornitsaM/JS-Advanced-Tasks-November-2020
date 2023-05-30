function notify(message) {
    
    let notification = document.getElementById('notification');
    let button = document.querySelector('#content > button');
    notification.textContent=message;
    notification.style.display='block';

       setTimeout(() => {
           notification.style.display='none';
       }, 2000);
}