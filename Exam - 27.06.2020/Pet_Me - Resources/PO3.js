class VeterinaryClinic {

    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [] 
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {

        if (this.capacity <= this.currentWorkload) {

            throw new Error('Sorry, we are not able to accept more patients!');
        }

        let currentOwner = this.clients.find(x => x.ownerName == ownerName);

        if (currentOwner && currentOwner.pets.some(x => x.petName === petName)) {

            let pet = currentOwner.pets.find(x => x.petName === petName)

            if (pet.procedures.length > 0) {
                throw new Error(`This pet is already registered under ${currentOwner.ownerName} name! ${pet.petName} is on our lists, waiting for ${pet.procedures.join(', ')}.`)
            }
            else {
                pet.procedures = procedures;
            }
        }

        else if (!currentOwner) {

            currentOwner = {
                ownerName,
                pets: []
            }
            this.clients.push(currentOwner);
        }

        currentOwner.pets.push({
            petName,
            kind,
            procedures
        })

        this.currentWorkload++;
        return `Welcome ${petName}!`
    }

    onLeaving(ownerName, petName) {

        let currentOwner = this.clients.find(x => x.ownerName == ownerName);

        if(!currentOwner){

            throw new Error('Sorry, there is no such client!')
        }

        let currentPet = currentOwner.pets.find(p => p.petName == petName);

        if (!currentPet || currentPet.procedures.length == 0) {

            throw new Error(`Sorry, there are no procedures for ${petName}!`)
        }

        let currentBill = currentPet.procedures.length * 500;
        this.totalProfit += currentBill;
        currentPet.procedures = [];
        this.currentWorkload--;

        return `Goodbye ${currentPet.petName}. Stay safe!`
    }

    toString() {

        let result = [];
        let percentage = Math.floor((this.currentWorkload / this.capacity) * 100);

        result.push(`${this.clinicName} is ${percentage}% busy today!`);
        result.push(`Total profit: ${this.totalProfit.toFixed(2)}$`);

        this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName));

        for (const client of this.clients) {

            client.pets.sort((a, b) => a.petName.localeCompare(b.petName));

            result.push(`${client.ownerName} with:`)
            for (const pet of client.pets) {

                result.push(`---${pet.petName} - a ${pet.kind.toLowerCase()} that needs: ${pet.procedures.join(', ')}`)
            }
        }
        return result.join('\n');
    }
}


let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());



// Welcome Tom!
// Welcome Max!
// Welcome Tiny!
// Goodbye Tiny. Stay safe!
// SoftCare is 20% busy today!
// Total profit: 500.00$
// Anna Morgan with:
// ---Max - a dog that needs: SK456, DFG45, KS456
// Jim Jones with:
// ---Tiny - a cat that needs: 
// ---Tom - a cat that needs: A154B, 2C32B, 12CDB
// SoftCare is 30% busy today!
// Total profit: 500.00$
// Anna Morgan with:
// ---Max - a dog that needs: SK456, DFG45, KS456
// Jim Jones with:
// ---Sara - a dog that needs: A154B
// ---Tiny - a cat that needs: 
// ---Tom - a cat that needs: A154B, 2C32B, 12CDB
