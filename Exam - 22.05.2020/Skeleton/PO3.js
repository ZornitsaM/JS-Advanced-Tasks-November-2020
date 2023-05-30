class Bank {

    constructor(bankName) {

        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {

        if (this.allCustomers.find(c => c.firstName == customer.firstName && c.lastName == customer.lastName) !== undefined) {

            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`) // todo with ID
        }

        customer.totalMoney = 0;
        customer.transactions = [];
        this.allCustomers.push(customer)
        //return `{ firstName: "${customer.firstName}", lastName: "${customer.lastName}", personalId: ${customer.personalId} }`//todo
        return customer;
    }

    depositMoney(personalId, amount) {

        let customer = this.allCustomers.find(c => c.personalId == personalId);

        if (customer == undefined) {
            throw new Error('We have no customer with this ID!')
        }

        customer.totalMoney += amount;
        customer.transactions.unshift(`${customer.transactions.length+1}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`)
        return `${customer.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {

        let customer = this.allCustomers.find(c => c.personalId == personalId);

        if (customer == undefined) {

            throw new Error('We have no customer with this ID!')
        }
        if (customer.totalMoney < amount) { //todo

            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
        }

        customer.totalMoney -= amount;
        customer.transactions.unshift(`${customer.transactions.length+1}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`)
        return `${customer.totalMoney}$`
    }

    customerInfo(personalId) {

        let customer = this.allCustomers.find(c => c.personalId == personalId);

        if (customer == undefined) {
            throw new Error('We have no customer with this ID!');
        }

        let result = [
            `Bank name: ${this._bankName}`,
            `Customer name: ${customer.firstName} ${customer.lastName}`,
            `Customer ID: ${personalId}`,
            `Total Money: ${customer.totalMoney}$`,
            'Transactions:'
            
        ].concat(customer.transactions).join('\n');
        return result;
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

