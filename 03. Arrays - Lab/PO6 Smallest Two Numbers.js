

function solve(numbers){

    let result = numbers
    .sort(function(a, b){return a-b})
    .splice(0,2);

    console.log(result.join(" "));
    
}

solve([30, 15, 50, 5])