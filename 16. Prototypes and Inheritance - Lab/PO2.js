class Person {
    constructor(name,age){
        this.name = name;
        this.age = age
    }
}

Person.prototype.speak = function(){
    console.log(`Hello, my name is ${this.name}`);
}

let student = new Person('Mimi',25)
student.speak();