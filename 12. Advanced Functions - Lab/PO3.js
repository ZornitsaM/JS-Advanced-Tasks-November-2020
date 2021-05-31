
function solve(input,criteria){

    let employees = JSON.parse(input);
    let[key,value]=criteria.split('-');

    if(criteria!='all'){

        let result = employees.filter(x=>x[key]==value);

        result.forEach((empl,i) => {
            
            console.log(`${i}. ${empl.first_name} ${empl.last_name} - ${empl.email}`)
        });
    }

    else{

        employees.forEach((empl,i) => {
            
            console.log(`${i}. ${empl.first_name} ${empl.last_name} - ${empl.email}`)
        });


    }
  



}


solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'


)