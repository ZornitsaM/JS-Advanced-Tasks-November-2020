function personAndTeacher() {

function Person(name,email){

    this.name=name;
    this.email=email;

    toString= function(){

        return `${typeOf(this)} (name: ${this.name}, email: ${this.email})`
    }
}

class Teacher extends Person{
    super(subject){

        this.subject = this.subject;
    }
}

class Student extends Person{
    super()
}
    return {
        Person,
        Teacher
    }
}

