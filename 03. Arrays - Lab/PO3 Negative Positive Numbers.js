
function solve(numbers){

    let outputArr = [];

    for (let i = 0; i < numbers.length; i++) {
        
        if (numbers[i]<0){

            outputArr.unshift(numbers[i]);
            
        }

        else{
            
            outputArr.push(numbers[i]);

        }
        
    }

    console.log(outputArr.join("\n"))


}

solve([3, -2, 0, -1])