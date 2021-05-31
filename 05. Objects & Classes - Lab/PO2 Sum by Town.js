

class Person {
    #currentAge
    constructor(name, age) {
        this.name = name;
        this.#currentAge=age;
    }

    get fullname(){

        return this.current;
    }

   get age(){
       return this.currentAge;
   }
    set age(value) {

        if (value < 0) {
            return;
        }

        this.currentAge = value;


    }

    saySomething() {

        return `Hello, me name is ${this.name}`;
    }

    static talk(){

       return "bl";

    }
}

console.log(Person.talk());





let person = new Person("Zorry");
console.log(person.age==-1);
person.fullname='lllll';
console.log(person.fullname);