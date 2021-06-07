

class Parking{

    constructor (capacity){

        this.capacity=Number(capacity);
        this.vehicles = [];
    }  

    addCar(carModel, carNumber){

        if(this.vehicles.length>=this.capacity){

            throw new Error('Not enough parking space.');
        }

        let currentCar = {

            carModel,
            carNumber, //todo Number() if case
            payed: false
        }

        this.vehicles.push(currentCar);
        return `The ${carModel}, with a registration number ${carNumber}, parked.` //todo .carModel if case
    }


    removeCar(carNumber){

        let currentCar = this.vehicles.find(c=>c.carNumber==carNumber);
        if(!currentCar){

            throw new Error(`The car, you're looking for, is not found.`) //todo ' or `
        }

        if(currentCar.payed==false){

            throw new Error(`${currentCar.carNumber} needs to pay before leaving the parking lot.`)
        }

        this.vehicles=this.vehicles.filter(c=>c!==currentCar);
        return `${currentCar.carNumber} left the parking lot.`
    }


    pay(carNumber){

        let currentCar = this.vehicles.find(c=>c.carNumber==carNumber);

        if(!currentCar){

            throw new Error(`${carNumber} is not in the parking lot.`)
        }

        if(currentCar.payed){

            throw new Error(`${currentCar.carNumber}'s driver has already payed his ticket.`)
        }

        currentCar.payed=true;
        return `${currentCar.carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber){

        let currentCar = this.vehicles.find(c=>c.carNumber==carNumber);
        let result=[];

        if(!currentCar){

            result.push(`The Parking Lot has ${this.capacity-this.vehicles.length} empty spots left.`)

            let sortedCars = this.vehicles.sort((a,b)=>a.carModel.localeCompare(b.carModel));

            for (const car of sortedCars) {

                let carStatusPay = '';
                if(car.payed){

                    carStatusPay='Has payed';
                }

                else{

                    carStatusPay='Not payed';

                }
                result.push(`${car.carModel} == ${car.carNumber} - ${carStatusPay}`)
            }
        }

        else{

            let carStatusPay = '';
            if(currentCar.payed){

                carStatusPay='Has payed';
            }

            else{

                carStatusPay='Not payed';
            }

            result.push(`${currentCar.carModel} == ${currentCar.carNumber} - ${carStatusPay}`)
        }

        return result.join('\n')
    }
}


const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
