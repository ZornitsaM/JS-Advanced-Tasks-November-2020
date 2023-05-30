
function solve(numbers){

    let output = [];

    for (let i = 0; i < numbers.length; i++) {
        
        if (i%2!=0){
            output.push(numbers[i]);
        }
    }

    let finalResult = output
    .map(x=>x*2)
    .reverse();

   console.log(finalResult.join(" "));
}

solve([10, 15, 20, 25])