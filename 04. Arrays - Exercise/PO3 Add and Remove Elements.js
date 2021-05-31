

function solve(numbers) {

    let output = [];
    let count = 1;

    numbers.forEach(command => {
        if (command == "add") {

            output.push(count);

        }

        else if (command == "remove") {

            output.pop();

        }

        count++;

    });

    output.length==0 ? console.log('Empty') : console.log(output.join("\n"));
}

solve(['remove',
    'remove',
    'remove']

)
