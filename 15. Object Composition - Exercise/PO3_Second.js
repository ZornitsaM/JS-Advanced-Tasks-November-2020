function solve(descriptor){

    const engines = [

        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ]

    let car = {

        model: descriptor.model,
        carriage: {
            type: descriptor.carriage,
            color: descriptor.color
        }
    }

    for (const engine of engines) {
        
        if(descriptor.power<=engine.power){

            car.engine = Object.assign(engine);
            break;
        }
    }

    if (descriptor.wheelsize%2==0){

        const wheelsize = descriptor.wheelsize-1;
        car.wheels=[wheelsize,wheelsize,wheelsize,wheelsize]
    }

    else{
        
        const wheelsize = descriptor.wheelsize;
        car.wheels=[wheelsize,wheelsize,wheelsize,wheelsize]
    }

    console.log(car);
}

solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
)

