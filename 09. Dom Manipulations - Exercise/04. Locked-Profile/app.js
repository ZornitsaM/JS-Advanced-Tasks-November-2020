function lockedProfile() {


     Array.from(document.getElementsByClassName('profile')).forEach(element => {


        let btn = element.querySelectorAll('button')[0];

        btn.addEventListener('click', () => {


            let unlock = element.querySelectorAll('input')[1].checked;
            let hiddenP = element.querySelectorAll('div')[0];

            if (unlock) {

                if (btn.textContent == "Show more") {

                    hiddenP.style.display = 'block';
                    btn.textContent = "Hide it";

                }

                else if (btn.textContent == "Hide it") {

                    hiddenP.style.display = 'none';
                    btn.textContent = "Show more";
                }



            }


        })

    })

}