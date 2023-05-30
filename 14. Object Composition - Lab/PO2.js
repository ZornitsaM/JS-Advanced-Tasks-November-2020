
function solve(input) {

    let listProcesser = function() {
        let output = [];
        return {
            add: text => output.push(text),
            remove: text => output.splice(output.indexOf(text),1),
            print: () => console.log(output.join(', ')),
        }
    }
    
    let listProccessotFinal = listProcesser();
    input.map(x=>x.split(' '))
         .forEach(([comm, text]) => listProccessotFinal[comm](text));
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);