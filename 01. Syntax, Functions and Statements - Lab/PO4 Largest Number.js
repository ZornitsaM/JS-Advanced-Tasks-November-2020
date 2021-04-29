
// function solve(a,b,c) {

//     let collection = [a,b,c];
//     let largestNumber=collection[0];

//     for (let i = 1 ; i < collection.length; i++) {
        
//         if(collection[i]>largestNumber){

//             largestNumber=collection[i];
//         }

//     }

//     console.log(`The largest number is ${largestNumber}.`);

// }


function findMax(a,b,c){

    let max = Math.max(a,b,c);
    console.log(`The largest number is ${max}.`);

}

findMax(2,4,5)