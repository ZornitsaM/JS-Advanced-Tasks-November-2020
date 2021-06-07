

class VeterinaryClinic {

    constructor(clinicName, capacity) {

        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {

        if (this.currentWorkload >= this.capacity) {

            throw new Error('Sorry, we are not able to accept more patients!');
        }

        let currentOwner = this.clients.find(x => x.ownerName==ownerName);

        if (currentOwner && currentOwner.pets.some(x => x.petName == petName)) {

            let currentPet = currentOwner.pets.find(x => x.petName == petName);

            if (currentPet.procedures.length > 0) {

                throw new Error(`This pet is already registered under ${currentOwner.ownerName} name! ${currentPet.petName} is on our lists, waiting for ${currentPet.procedures.join(', ')}.`)
            }

            else {

                currentPet.procedures = procedures;
            }
        }

        else if (!currentOwner) {

            currentOwner = {

                ownerName,
                pets: []
            }

            this.clients.push(currentOwner);
        }

        let pet = {

            petName,
            kind,
            procedures
        }

        currentOwner.pets.push(pet);
        this.currentWorkload++;
        return `Welcome ${petName}!`

    }


    onLeaving(ownerName, petName) {


        let currentClient = this.clients.find(x => x.ownerName == ownerName);
        if (!currentClient) {

            throw new Error('Sorry, there is no such client!');
        }

        let pet = currentClient.pets.find(x => x.petName == petName);

        if (!pet || pet.procedures.length == 0) {

            throw new Error(`Sorry, there are no procedures for ${petName}!`)
        }

        let currentBill = pet.procedures.length * 500;
        this.totalProfit += currentBill;
        pet.procedures = [];
        this.currentWorkload--;
        return `Goodbye ${pet.petName}. Stay safe!`
    }

    toString() {

        let result = [];

        let percentages = Math.floor((this.currentWorkload / this.capacity) * 100);
        result.push(`${this.clinicName} is ${percentages}% busy today!`)
        result.push(`Total profit: ${this.totalProfit.toFixed(2)}$`)


        let sortedClients = this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName));

        for (const owner of sortedClients) {

            result.push(`${owner.ownerName} with:`)

            let sortedPet = owner.pets.sort((a, b) => a.petName.localeCompare(b.petName));

            for (const pet of sortedPet) {

                result.push(`---${pet.petName} - a ${pet.kind.toLowerCase()} that needs: ${pet.procedures.join(', ')}`)

            }
        }

        return result.join('\n')
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
