


class Company {


    constructor() {

        this.departments = [];
    }


    addEmployee(username, salary, position, department) {

        if (!username) {
            throw new Error("Invalid input!");
        }

        if (salary < 0) {

            throw new Error("Invalid input!");

        }

        if (!this.departments[department]) {

            this.departments[department] = [];



        }

        this.departments[department].push({ username, salary, position });
        return` New employee is hired. Name: ${username}. Position: ${position}`;


    }


    bestDepartment() {

        let departments = {};
        Object.entries(this.departments).forEach(([department, emploees]) => {

            let totalSalary = emploees.map(x => x.salary).reduce((acc, curr) => acc += curr);

            departments[department] = totalSalary / emploees.lenght;
        });

        let max = 0;
        let bestDep;

        Object.entries(departments).forEach((dep, avgSalary) => {

            if (avgSalary > max) {

                max = avgSalary;
                bestDep = dep;

            }

        })

        return `Best department is: ${bestDep}
                    \nAverage salary: ${max.toFixed(2)}`;


         return this.departments[bestDep]
         .sort((a,b)=>b.salary-a.salary)
         .forEach(x=>{
            return `${x.username} ${x.salary} ${x.position}`
         })




    }



}


function solve() {

    let c = new Company();
    c.addEmployee("Stanimir", 2000, "engineer", "Construction");
    c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
    c.addEmployee("Slavi", 500, "dyer", "Construction");
    c.addEmployee("Stan", 2000, "architect", "Construction");
    c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
    c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
    c.addEmployee("Gosho", 1350, "HR", "Human resources");
    console.log(c.bestDepartment());
    

}

solve();