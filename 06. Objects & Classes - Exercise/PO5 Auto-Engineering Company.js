

function solve(input) {

    let result = {};

    input.forEach(line => {

        let [car, model, producedCar] = line.split(' | ');
        producedCar = Number(producedCar);

        if (!result[car]) {

            result[car] = {};
            result[car].push(model, producedCar);
        }

        else {

            if (!result[car].includes(model)) {

                result[car][model].push(producedCar);

            }

            else {

                result[car][1]+=producedCar;
            }

        }

    });


    
    Object.entries(result).forEach((a,b)=>{
      
        console.log(a);

    })

}


solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)