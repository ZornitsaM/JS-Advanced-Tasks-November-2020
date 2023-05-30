
function solve(numbers){

     let result = [];
     let sumFirst = 0;
     let sumSecond = 0;

     for (let i = 0; i < numbers.length; i++) {
         
        let currentRow = numbers[i];

        for (let j = 0; j < currentRow.length; j++) {

            if (i==j){
                sumFirst+=currentRow[j];
            }
        }
     }

     let reversedArr = numbers.reverse();

     for (let i = 0; i < reversedArr.length; i++) {
         
        let currentRow = numbers[i];

        for (let j = 0; j < currentRow.length; j++) {

            if (i==j){
                sumSecond+= currentRow[j];
            }
        }
     }

     result.push(sumFirst);
     result.push(sumSecond);
     console.log(result.join(" "));
}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )
   