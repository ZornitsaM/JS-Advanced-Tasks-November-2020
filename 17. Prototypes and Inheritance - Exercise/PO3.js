
function solve(){

    class Employee{

        constructor(name,age){

            if (new.target===Employee){

                throw new Error('Can not initialize')
            }
            this.name=name;
            this.age=age;
            this.salary=0;
            this.tasks = [];
        }

        work(){
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask)
        }

        collectSalary(){
            console.log(`${this.name} received ${this.salary}`);
        }
    }

    class Junior extends Employee{
        constructor(name,age){

            super(name,age)
            this.tasks.push(' is working on a simple task.');
        }
    }

    class Senior extends Employee{

        constructor(name,age){
            super(name,age);
            this.tasks.push(' is working on a complicated task.')
            this.tasks.push(' is taking time off work.')
            this.tasks.push(' is supervising junior workers.')
        }
    }

    class Manager extends Employee{

        constructor(name,age){
            super(name,age);
            this.divident = 0;
            this.tasks.push(' scheduled a meeting.')
            this.tasks.push(' is preparing a quarterly report.')
        }

        collectSalary(){
            console.log(`${this.name} received ${this.salary + this.divident}`);
        }
    }

    return {

        Junior,
        Senior,
        Manager
    }
}

const people = solve();
let senior = new people.Senior('KOKO',25);
senior.collectSalary();

