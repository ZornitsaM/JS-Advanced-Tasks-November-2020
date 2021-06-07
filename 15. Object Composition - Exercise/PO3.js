
function solve(input){

    let {model, power, color, carriage, wheelsize} = input;

    let volume=0;
    if(power<=90){

        volume=1800;
    }

    else if (power<=120){
        volume=2400;
    }

    else{

        volume=3500;
    }


    let obj = {

        model,
        engine: {

            'power': power,
            'volume': volume
            
        },

        carriage: {

            type: carriage,
            color,
        },

        wheels: [wheelsize,wheelsize,wheelsize,wheelsize],
        
    }


    return obj;
    //console.log(obj);




}

solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

)