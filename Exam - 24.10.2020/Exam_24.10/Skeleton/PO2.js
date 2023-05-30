

function solveClasses() {

    class Developer {

        constructor(firstName, lastName) {

            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }

        addTask(id, taskName, priority) {

            let currentTask = {

                id,
                taskName,
                priority
            }

            if (currentTask.priority == 'high') {

                this.tasks.unshift(currentTask);
            }
            else {

                this.tasks.push(currentTask);
            }
            return `Task id ${currentTask.id}, with ${currentTask.priority} priority, has been added.`
        }

        doTask() {

            if (this.tasks.length > 0) {
                let theHighestTaskPrior = this.tasks.shift();
                return theHighestTaskPrior.taskName;
            }
            else {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`
            }
        }

        getSalary() {

            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }

        reviewTasks() {

            let result = [];
            result.push('Tasks, that need to be completed:')
            this.tasks.forEach(t => result.push(`${t.id}: ${t.taskName} - ${t.priority}`))

            return result.join('\n')
        }
    }

    class Junior extends Developer {

        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary += bonus; //todo
            this.tasks = [];
            this.experience = Number(experience)
        }

        learn(years) {
            this.experience += years
        }
    }

    class Senior extends Developer {

        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary += bonus;
            this.tasks = [];
            this.experience = Number(experience) + 5;
        }

        changeTaskPriority(taskId) {

            let curretnTask = this.tasks.find(t => t.id == taskId);

            if (curretnTask.priority == 'high') {
                curretnTask.priority = 'low';
                this.tasks = this.tasks.filter(x => x !== curretnTask);
                this.tasks.push(curretnTask);
                return curretnTask.priority;
            }
            else {
                curretnTask.priority = 'high';
                this.tasks = this.tasks.filter(x => x !== curretnTask);
                this.tasks.unshift(curretnTask);
            }
            return curretnTask;
        }
    }

    return {
        Developer,
        Junior,
        Senior
    }
}

let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());

const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());

const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);
