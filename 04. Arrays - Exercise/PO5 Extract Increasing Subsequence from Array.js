

function solve(input) {

    let output = [];
    let max = Number.MIN_SAFE_INTEGER;
    input.forEach(element => {

        if (element >= max) {

            max = element;
            console.log(max);
        }
    });

    console.log(output.join("\n"))

}


solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)