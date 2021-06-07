
class Bank {

    constructor(bankName) {

        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {


        let currentCustomer = this.allCustomers.find(x => x.personalId == customer.personalId); //TODO

        if (currentCustomer) {

            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} is already our customer!`)
        }


        customer.totalMoney = 0;
        customer.transactions = [];
        this.allCustomers.push(customer);

        return customer;

    }

    depositMoney(personalId, amount) {


        let currentCustomer = this.allCustomers.find(x => x.personalId == personalId);

        if (!currentCustomer) {

            throw new Error('We have no customer with this ID!');
        }

        currentCustomer.totalMoney += amount;
        currentCustomer.transactions.unshift(`${currentCustomer.transactions.length + 1}. ${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${amount}$!`)

        return `${currentCustomer.totalMoney}$`
    }


    withdrawMoney(personalId, amount) {

        let currentCustomer = this.allCustomers.find(x => x.personalId == personalId);

        if (!currentCustomer) {

            throw new Error('We have no customer with this ID!');
        }

        if (currentCustomer.totalMoney < amount) {

            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`)
        }


        currentCustomer.totalMoney -= amount;
        currentCustomer.transactions.unshift(`${currentCustomer.transactions.length + 1}. ${currentCustomer.firstName} ${currentCustomer.lastName} withdrew ${amount}$!`)


        return `${currentCustomer.totalMoney}$`
    }


    customerInfo(personalId) {

        let currentCustomer = this.allCustomers.find(x => x.personalId == personalId);

        if (!currentCustomer) {

            throw new Error('We have no customer with this ID!');
        }

        let result = [];

        result.push(`Bank name: ${this._bankName}`)
        result.push(`Customer name: ${currentCustomer.firstName} ${currentCustomer.lastName}`)
        result.push(`Customer ID: ${currentCustomer.personalId}`)
        result.push(`Total Money: ${currentCustomer.totalMoney}$`)
        result.push(`Transactions:`)

        result.push(currentCustomer.transactions.join('\n'));

        return result.join('\n');

    }
}


let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
