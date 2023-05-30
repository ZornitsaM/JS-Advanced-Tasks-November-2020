
function solve(numbers){

 let maxElement = Number.MIN_SAFE_INTEGER;
 for (let i = 0; i < numbers.length; i++) {

    let currentRow = (numbers[i]);

    for (let j = 0; j < currentRow.length; j++) {
        
        if (currentRow[j]>maxElement){
            maxElement=currentRow[j];
        }
    }
 }
 console.log(maxElement)
}

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   );
   