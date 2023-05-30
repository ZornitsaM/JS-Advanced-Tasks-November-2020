
function solve(numbers){

let countNumber = Number(numbers.pop());

for (let i = 0; i < numbers.length; i+=countNumber) {
    console.log(numbers[i]);
}
}

solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
)